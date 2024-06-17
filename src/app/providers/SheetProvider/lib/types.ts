export interface SheetContextProps {
  templateList: FileInfo[];
  setTemplateList: (list: FileInfo[]) => void;
  currentTemplateIndex?: number;
  setCurrentTemplateIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  currentTemplate?: FileInfo;
  templatePath: string;
  sheetInstance?: webix.ui.spreadsheet;
  setSheetInstance: (instance: webix.ui.spreadsheet) => void;
}

export interface FileInfo {
  name: string;
  path: string;
  datatype: string;
  sheets?: Sheet[];
}

export interface Sheet {
  name: string;
  config?: SheetConfig;
}

export interface SheetConfig {
  editableCells?: [CellCoord, CellCoord];
  rowCount: number;
  columnCount: number;
}
export interface CellCoord {
  row: string | number;
  column: string | number;
}

export interface SheetProviderProps {
  children: React.ReactNode;
  templatePath: string;
}
