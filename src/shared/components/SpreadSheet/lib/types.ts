export interface ISpreadSheetProps {
  className?: string;
  data?: unknown;
  onInit?: (sheetInstance: webix.ui.spreadsheet) => void;
  importFileInfo?: SpreadSheetFileInfo;
}

export interface SpreadSheetFileInfo {
  path: string;
  datatype: string;
}

export interface SpreadSheetPreparedFileInfo {
  url: string | undefined;
  datatype: string | undefined;
}
