export enum SpreadSheetDatatype {
  EXCEL = 'excel',
}

export enum OnChangeMode {
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
