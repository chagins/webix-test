export interface SheetContextType {
  templateList: FileInfo[];
  fetchTemplateList: () => Promise<FileInfo[] | null>;
  currentTemplate: FileInfo | null;
  setCurrentTemplate: (id: string) => void;
  templatePath: string | null;
}

export interface FileInfo {
  name: string;
  path: string;
  datatype: string;
  id: string;
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
