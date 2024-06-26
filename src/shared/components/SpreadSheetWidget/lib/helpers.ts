import { Cell, RangeCode, RangeCodeWithSheetName } from './types';

export const addStyle = (
  instance: webix.ui.spreadsheet,
  style: webix.WebixSpreadsheetStyleProps
): webix.WebixSpreadsheetStyle => {
  const webixAddStyle = instance.addStyle.bind(instance) as (
    style: webix.WebixSpreadsheetStyleProps
  ) => webix.WebixSpreadsheetStyle;
  return webixAddStyle(style);
};

export const parseRange = (range: RangeCodeWithSheetName | RangeCode): Cell[] => {
  const cells: Cell[] = [];

  const rangeWithoutSheetName = range.includes('!') ? range.split('!')[1] : range;
  const [start, end] = rangeWithoutSheetName.split(':');

  const getColumnNumber = (column: string) => {
    const alphabetLength = 26;
    const unicodeA = 'A'.charCodeAt(0);
    let colNumber = 0;
    for (let i = 0; i < column.length; i += 1) {
      colNumber = colNumber * alphabetLength + (column.charCodeAt(i) - unicodeA + 1);
    }
    return colNumber;
  };

  const startCol = getColumnNumber(start.replace(/[0-9]/g, ''));
  const startRow = parseInt(start.replace(/[A-Z]/g, ''), 10);
  const endCol = getColumnNumber(end.replace(/[0-9]/g, ''));
  const endRow = parseInt(end.replace(/[A-Z]/g, ''), 10);

  for (let row = startRow; row <= endRow; row += 1) {
    for (let column = startCol; column <= endCol; column += 1) {
      cells.push({ row, column });
    }
  }

  return cells;
};
