export enum SpreadSheetDatatype {
  EXCEL = 'excel',
}

export enum ChangeModes {
  'UPDATE' = 'update',
  'RENAME' = 'rename',
  'REMOVE' = 'remove',
  'INSERT' = 'insert',
  'STATE' = 'state',
}

export const SerializeConfig: webix.WebixSpreadsheetSerializeConfig = {
  math: true,
  sheets: true,
};

export enum CellEditorType {
  'SS_RICHSELECT' = 'ss_richselect',
}

export enum SheetStates {
  'VISIBLE' = 'visible',
  'HIDDEN' = 'hidden',
  'VERY_HIDDEN' = 'veryHidden',
}

export const SpreadSheetSerializeConfig: webix.WebixSpreadsheetSerializeConfig = {
  math: true,
  sheets: true,
};

export const defaultRangeStyleProps: webix.WebixSpreadsheetStyleProps = {
  background: '',
};

export const dataAreaRangeStyleProps: webix.WebixSpreadsheetStyleProps = {
  background: '#b7f7f1',
};
