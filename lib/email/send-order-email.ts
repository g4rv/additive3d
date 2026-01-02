import Mailjet from 'node-mailjet';
import * as XLSX from 'xlsx-js-style';

interface OrderFile {
  name: string;
  url: string;
  weight: number;
  quantity: number;
  includePaint: boolean;
  pricePerUnit: number;
  totalPrice: number;
  fileSize: number;
}

interface OrderEmailData {
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

    // Generate HTML email content
    const filesListHTML = orderData.files
      .map(
        (file, index) => `
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px; text-align: center;">${index + 1}</td>
        <td style="padding: 12px;">${file.name}</td>
        <td style="padding: 12px; text-align: center;">${file.quantity} шт</td>
        <td style="padding: 12px; text-align: center;">${file.weight.toFixed(2)} г</td>
        <td style="padding: 12px; text-align: right;">${file.totalPrice.toFixed(2)} грн</td>
        <td style="padding: 12px; text-align: center;">
          <a href="${file.url}" style="color: #3b82f6; text-decoration: none;">Завантажити</a>
        </td>
      </tr>
    `
      )
      .join('');

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Additive3D</h1>
                  <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">Підтвердження замовлення</p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 30px;">
                  <h2 style="color: #1f2937; margin: 0 0 10px 0;">Вітаємо${orderData.userName ? ', ' + orderData.userName : ''}!</h2>
                  <p style="color: #6b7280; margin: 0 0 20px 0; line-height: 1.6;">
                    Дякуємо за ваше замовлення. Ми отримали ваші файли та розпочинаємо обробку замовлення.
                  </p>

                  <!-- Order Info Box -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 6px; margin: 20px 0;">
                    <tr>
                      <td style="padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #1f2937;">Номер замовлення:</strong>
                            </td>
                            <td style="padding: 8px 0; text-align: right; color: #6b7280;">
                              ${orderData.orderNumber}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #1f2937;">Кількість файлів:</strong>
                            </td>
                            <td style="padding: 8px 0; text-align: right; color: #6b7280;">
                              ${orderData.files.length}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #1f2937;">Загальна вага:</strong>
                            </td>
                            <td style="padding: 8px 0; text-align: right; color: #6b7280;">
                              ${orderData.totalWeight.toFixed(2)} г
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; border-top: 2px solid #e5e7eb;">
                              <strong style="color: #1f2937; font-size: 16px;">Загальна вартість:</strong>
                            </td>
                            <td style="padding: 8px 0; text-align: right; border-top: 2px solid #e5e7eb;">
                              <strong style="color: #667eea; font-size: 18px;">${orderData.totalPrice.toFixed(2)} грн</strong>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <h3 style="color: #1f2937; margin: 30px 0 15px 0;">Ваші файли:</h3>
                  <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px;">
                    <thead>
                      <tr style="background-color: #f9fafb;">
                        <th style="padding: 12px; text-align: center; color: #1f2937; font-weight: 600; border-bottom: 2px solid #e5e7eb;">№</th>
                        <th style="padding: 12px; text-align: left; color: #1f2937; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Назва</th>
                        <th style="padding: 12px; text-align: center; color: #1f2937; font-weight: 600; border-bottom: 2px solid #e5e7eb;">К-сть</th>
                        <th style="padding: 12px; text-align: center; color: #1f2937; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Вага</th>
                        <th style="padding: 12px; text-align: right; color: #1f2937; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Ціна</th>
                        <th style="padding: 12px; text-align: center; color: #1f2937; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Файл</th>
                      </tr>
                    </thead>
                    <tbody style="color: #6b7280;">
                      ${filesListHTML}
                    </tbody>
                  </table>

                  <div style="margin: 30px 0; padding: 20px; background-color: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
                    <p style="margin: 0; color: #1e40af; line-height: 1.6;">
                      <strong>📎 Детальний прайс у вкладенні</strong><br>
                      До цього листа додано Excel-файл з повним прайсом та деталями замовлення.
                    </p>
                  </div>

                  <p style="color: #6b7280; margin: 20px 0 0 0; line-height: 1.6;">
                    Ми зв'яжемося з вами найближчим часом для підтвердження деталей замовлення та обговорення термінів виконання.
                  </p>

                  <p style="color: #6b7280; margin: 10px 0 0 0; line-height: 1.6;">
                    З повагою,<br>
                    <strong>Команда Additive3D</strong>
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                    © ${new Date().getFullYear()} Additive3D. Всі права захищені.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

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
          TextPart: `
Вітаємо!

Дякуємо за ваше замовлення в Additive3D.

Номер замовлення: ${orderData.orderNumber}
Кількість файлів: ${orderData.files.length}
Загальна вага: ${orderData.totalWeight.toFixed(2)} г
Загальна вартість: ${orderData.totalPrice.toFixed(2)} грн

Ваші файли:
${orderData.files.map((file, i) => `${i + 1}. ${file.name} - ${file.url}`).join('\n')}

Детальний прайс додано у вкладенні.

Ми зв'яжемося з вами найближчим часом.

З повагою,
Команда Additive3D
          `,
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
