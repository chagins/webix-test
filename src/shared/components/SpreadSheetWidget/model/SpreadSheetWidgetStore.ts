import { create } from 'zustand';
import {
  Cell,
  SpreadSheetWidgetAction,
  SpreadSheetWidgetRange,
  SpreadSheetWidgetState,
} from '../lib';

export const useSpreadSheetWidgetStoreBase = create<
  SpreadSheetWidgetState & SpreadSheetWidgetAction
>()((set) => ({
  widgetInstance: null,
  data: null,
  importData: null,
  selectedCells: [],
  activeSheetName: null,
  lastRangeSet: null,
  range: null,
  updateWidgetInstance: (instance) => set(() => ({ widgetInstance: instance })),
  updateData: (newData) => set(() => ({ data: newData })),
  updateImportData: (newData) => set(() => ({ data: newData })),
  updateSelectedCells: (cells: Cell[]) => set(() => ({ selectedCells: cells })),
  updateActiveSheetName: (name: string | null) => set(() => ({ activeSheetName: name })),
  updateLastRangeSet: (range: SpreadSheetWidgetRange) => set(() => ({ lastRangeSet: range })),
  updateRangeStyle: (defaultRangeStyle, dataAreaRangeStyle) =>
    set((state) => ({
      range: {
        ...state.range,
        defaultRangeStyle,
        dataAreaRangeStyle,
      },
    })),
}));
