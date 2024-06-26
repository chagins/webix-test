import { Cell, SpreadSheetWidgetRange, SpreadSheetWidgetSheet } from './types';

export type SpreadSheetWidgetState = {
  widgetInstance: webix.ui.spreadsheet | null;
  data: SpreadSheetWidgetSheet[] | null;
  importData: SpreadSheetWidgetSheet[] | null;
  selectedCells: Cell[];
  activeSheetName: string | null;
  lastRangeSet: SpreadSheetWidgetRange | null;
  range: {
    dataAreaRangeStyle: webix.WebixSpreadsheetStyle;
    defaultRangeStyle: webix.WebixSpreadsheetStyle;
  } | null;
};

export type SpreadSheetWidgetAction = {
  updateWidgetInstance: (instance: webix.ui.spreadsheet | null) => void;
  updateData: (newData: SpreadSheetWidgetSheet[] | null) => void;
  updateImportData: (newData: SpreadSheetWidgetSheet[] | null) => void;
  updateSelectedCells: (cells: Cell[]) => void;
  updateActiveSheetName: (name: string | null) => void;
  updateLastRangeSet: (range: SpreadSheetWidgetRange) => void;
  updateRangeStyle: (
    defaultRangeStyle: webix.WebixSpreadsheetStyle,
    dataAreaRangeStyle: webix.WebixSpreadsheetStyle
  ) => void;
};
