export interface SheetContextType {
  templateList: FileInfo[];
  setTemplateList: (list: FileInfo[]) => void;
  fetchTemplateList: () => Promise<FileInfo[] | null>;
  currentTemplateIndex: number | null;
  setCurrentTemplateIndex: React.Dispatch<React.SetStateAction<number | null>>;
  currentTemplate: FileInfo | null;
  templatePath: string | null;
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
