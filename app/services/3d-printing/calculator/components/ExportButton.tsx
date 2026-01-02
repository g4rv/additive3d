'use client';

import { useCalculator } from '../context/CalculatorContext';
import * as XLSX from 'xlsx-js-style';
import { FileDown } from 'lucide-react';

export default function ExportButton() {
  const { state } = useCalculator();

  const handleExport = () => {
    if (state.files.length === 0) return;

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
    const rows = state.files.map((file, index) => {
      const totalWeight = file.modelWeight * file.quantity;
      const totalPrice = file.totalPrice;

      return [
        index + 1,
        file.name,
        'шт',
        file.quantity,
        Number(file.modelWeight.toFixed(2)),
        Number(totalWeight.toFixed(2)),
        Number(file.pricePerUnit.toFixed(2)),
        Number(totalPrice.toFixed(2)),
      ];
    });

    // Totals
    const totalQuantity = state.files.reduce((sum, f) => sum + f.quantity, 0);
    const totalWeight = state.files.reduce((sum, f) => sum + f.modelWeight * f.quantity, 0);
    const totalWithoutVAT = state.files.reduce((sum, f) => sum + f.totalPrice, 0);

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

    // Export Workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Таблиця');
    XLSX.writeFile(workbook, 'Таблиця_продукції.xlsx');
  };

  return (
    <button
      onClick={handleExport}
      disabled={state.files.length === 0}
      className="btn btn-primary gap-2"
    >
      <FileDown className="h-5 w-5" />
      Вивантажити .EXCEL
    </button>
  );
}
