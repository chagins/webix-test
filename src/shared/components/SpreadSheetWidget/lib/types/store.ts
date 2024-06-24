import { Cell, SpreadSheetWidgetSheet } from './types';

export type SpreadSheetWidgetState = {
  widgetInstance: webix.ui.spreadsheet | null;
  data: SpreadSheetWidgetSheet[] | null;
  importData: SpreadSheetWidgetSheet[] | null;
  selectedCells: Cell[];
  activeSheetName: string | null;
};

export type SpreadSheetWidgetAction = {
  updateWidgetInstance: (instance: webix.ui.spreadsheet | null) => void;
  updateData: (newData: SpreadSheetWidgetSheet[] | null) => void;
  updateImportData: (newData: SpreadSheetWidgetSheet[] | null) => void;
  updateSelectedCells: (cells: Cell[]) => void;
  updateActiveSheetName: (name: string | null) => void;
};
