export interface SheetContextProps {
  templateList: FileInfo[];
  setTemplateList: (list: FileInfo[]) => void;
  currentTemplateIndex?: number;
  setCurrentTemplateIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  currentTemplate?: FileInfo;
  templatePath: string;
}

export interface FileInfo {
  name: string;
  path: string;
  editableCells?: [CellCoord, CellCoord];
  datatype: string;
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
