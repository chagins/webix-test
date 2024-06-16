import { createContext } from 'react';
import { FileInfo, SheetContextProps } from './types';

export const initSheetData: SheetContextProps = {
  templateList: [],
  setTemplateList: (_: FileInfo[]) => [],
  currentTemplateIndex: undefined,
  setCurrentTemplateIndex: () => -1,
  templatePath: '',
};

export const SheetContext = createContext<SheetContextProps>({ ...initSheetData });
