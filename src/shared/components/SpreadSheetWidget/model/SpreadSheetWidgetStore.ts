import { create } from 'zustand';
import { Cell, SpreadSheetWidgetAction, SpreadSheetWidgetState } from '../lib';

export const useSpreadSheetWidgetStoreBase = create<
  SpreadSheetWidgetState & SpreadSheetWidgetAction
>()((set) => ({
  widgetInstance: null,
  data: null,
  importData: null,
  selectedCells: [],
  activeSheetName: null,
  updateWidgetInstance: (instance) => set(() => ({ widgetInstance: instance })),
  updateData: (newData) => set(() => ({ data: newData })),
  updateImportData: (newData) => set(() => ({ data: newData })),
  updateSelectedCells: (cells: Cell[]) => set(() => ({ selectedCells: cells })),
  updateActiveSheetName: (name: string | null) => set(() => ({ activeSheetName: name })),
}));
