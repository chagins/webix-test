import { createContext } from 'react';
import { FileInfo, SheetContextProps } from './types';

export const initSheetData: SheetContextProps = {
  templateList: [],
  setTemplateList: (_: FileInfo[]) => [],
  currentTemplateIndex: undefined,
  setCurrentTemplateIndex: () => -1,
  templatePath: '',
  setSheetInstance: (_: webix.ui.spreadsheet) => {},
};

export const SheetContext = createContext<SheetContextProps>({ ...initSheetData });
