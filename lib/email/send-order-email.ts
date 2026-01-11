import Mailjet from 'node-mailjet';
import * as XLSX from 'xlsx-js-style';
import { generateOrderConfirmationHTML, generateOrderConfirmationText } from './templates/order-confirmation-template';

export interface OrderFile {
  name: string;
  url: string;
  weight: number;
  quantity: number;
  includePaint: boolean;
  pricePerUnit: number;
  totalPrice: number;
  fileSize: number;
}

export interface OrderEmailData {
  orderNumber: string;
  userEmail: string;
  userName?: string;
  totalPrice: number;
  totalWeight: number;
  files: OrderFile[];
  priceMultiplier: number;
}

// Initialize Mailjet client
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_SECRET_KEY || '',
});

/**
 * Generate Excel file buffer from order data
 */
function generateExcelBuffer(orderData: OrderEmailData): Buffer {
  // Headers
  const headers = [
    [
      '№ з/п',
      'Найменування продукції / Розмір, мм',
      'Од. вим.',
      'К-сть, шт',
      'Вага, грам/од',
      'Вага, грам',
      'Ціна за одиницю у грн (без ПДВ)',
      'Сума у грн (без ПДВ)',
    ],
  ];

  // Table Rows
  const rows = orderData.files.map((file, index) => {
    const totalWeight = file.weight * file.quantity;
    return [
      index + 1,
      file.name,
      'шт',
      file.quantity,
      Number(file.weight.toFixed(2)),
      Number(totalWeight.toFixed(2)),
      Number(file.pricePerUnit.toFixed(2)),
      Number(file.totalPrice.toFixed(2)),
    ];
  });

  // Totals
  const totalQuantity = orderData.files.reduce((sum, f) => sum + f.quantity, 0);
  const totalWeight = orderData.totalWeight;
  const totalWithoutVAT = orderData.totalPrice;

  const vatRate = 0.2;
  const vatAmount = totalWithoutVAT * vatRate;
  const totalWithVAT = totalWithoutVAT + vatAmount;

  // Summary Rows
  const summary = [
    [
      '',
      'ВСЬОГО',
      'шт',
      totalQuantity,
      '',
      Number(totalWeight.toFixed(2)),
      'Разом без ПДВ:',
      Number(totalWithoutVAT.toFixed(2)),
    ],
    ['', '', '', '', '', '', 'ПДВ 20%:', Number(vatAmount.toFixed(2))],
    ['', '', '', '', '', '', 'Разом з ПДВ:', Number(totalWithVAT.toFixed(2))],
  ];

  const worksheetData = [...headers, ...rows, ...summary];

  // Create Worksheet
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

  // Column Widths
  worksheet['!cols'] = [
    { wch: 6 },
    { wch: 40 },
    { wch: 10 },
    { wch: 10 },
    { wch: 12 },
    { wch: 12 },
    { wch: 25 },
    { wch: 20 },
  ];

  // Row Heights
  const headerHeight = 50;
  const itemRowHeight = 50;
  const totalRowsCount = 3;
  const totalRowStart = worksheetData.length - totalRowsCount;

  worksheet['!rows'] = worksheetData.map((_, index) => {
    if (index === 0) return { hpt: headerHeight };
    if (index > 0 && index < totalRowStart) return { hpt: itemRowHeight };
    return {};
  });

  // Border Style
  const borderStyle = {
    top: { style: 'thin', color: { rgb: '000000' } },
    left: { style: 'thin', color: { rgb: '000000' } },
    bottom: { style: 'thin', color: { rgb: '000000' } },
    right: { style: 'thin', color: { rgb: '000000' } },
  };

  // Styling
  const range = XLSX.utils.decode_range(worksheet['!ref']!);
  const totalRowsStartIndex = worksheetData.length - 3;

  for (let R = range.s.r; R <= range.e.r; ++R) {
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
      const cell = worksheet[cellAddress] || {};

      const isHeader = R === 0;
      const isTotalRow = R >= totalRowsStartIndex;
      const isSummaryLabelCell = isTotalRow && C === 6;
      const isSummaryValueCell = isTotalRow && C === 7;
      const isSummaryCellWithBorder = isSummaryLabelCell || isSummaryValueCell;

      const applyBorder =
        isHeader || (R > 0 && R < totalRowsStartIndex) || isSummaryCellWithBorder;

      let horizontalAlign: 'center' | 'left' = 'center';
      if (!isHeader && C === 1) horizontalAlign = 'left';
      if (isSummaryLabelCell) horizontalAlign = 'left';

      cell.s = {
        font: {
          name: 'Times New Roman',
          sz: isHeader ? 12 : 11,
          bold: isTotalRow,
        },
        alignment: {
          vertical: 'center',
          horizontal: horizontalAlign,
          wrapText: true,
        },
        border: applyBorder ? borderStyle : undefined,
      };

      worksheet[cellAddress] = cell;
    }
  }

  // Export Workbook as buffer
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Таблиця');
  const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

  return excelBuffer as Buffer;
}

/**
 * Send order confirmation email with Excel attachment
 */
export async function sendOrderConfirmationEmail(orderData: OrderEmailData): Promise<void> {
  try {
    // Generate Excel file
    const excelBuffer = generateExcelBuffer(orderData);
    const excelBase64 = excelBuffer.toString('base64');

    // Generate HTML and text email content using templates
    const htmlContent = generateOrderConfirmationHTML(orderData);
    const textContent = generateOrderConfirmationText(orderData);

    // Parse manager emails from environment variable
    const managerEmails = process.env.MAILJET_MANAGER_EMAILS
      ? process.env.MAILJET_MANAGER_EMAILS.split(',').map(email => email.trim()).filter(Boolean)
      : [];

    // Build recipients list
    const recipients = [
      {
        Email: orderData.userEmail,
        Name: orderData.userName || orderData.userEmail,
      },
    ];

    // Add managers as recipients
    const ccRecipients = managerEmails.map(email => ({
      Email: email,
      Name: 'Manager',
    }));

    // Send email via Mailjet
    const request = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL || 'noreply@additive3d.com',
            Name: process.env.MAILJET_FROM_NAME || 'Additive3D',
          },
          To: recipients,
          ...(ccRecipients.length > 0 && { Cc: ccRecipients }),
          Subject: `Підтвердження замовлення ${orderData.orderNumber} - Additive3D`,
          HTMLPart: htmlContent,
          TextPart: textContent,
          Attachments: [
            {
              ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              Filename: `Замовлення_${orderData.orderNumber}.xlsx`,
              Base64Content: excelBase64,
            },
          ],
        },
      ],
    });

  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error(`Email sending failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
