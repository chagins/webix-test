import { create } from 'zustand';
import { Dimension, SheetAction, SheetState, TemplateSheets } from '../lib';

export const useSheetStoreBase = create<SheetState & SheetAction>()((set) => ({
  spreadSheetWidget: null,
  templates: null,
  currentTemplate: null,
  templatePath: null,
  templateData: null,
  templateConfigs: null,
  updateSpreadSheetWidget: (widget) => set(() => ({ spreadSheetWidget: widget })),
  updateTemplates: (newTemplates) => set(() => ({ templates: newTemplates })),
  updateCurrentTemplate: (templateId) =>
    set((state) => {
      const foundTemplate = state.templates?.[templateId];
      return foundTemplate
        ? { currentTemplate: foundTemplate }
        : { currentTemplate: state.currentTemplate };
    }),
  updateTemplatePath: (path) => set(() => ({ templatePath: path })),
  updateTemplateData: (templateId, data) =>
    set((state) => {
      const newTemplateSheets = data.reduce<TemplateSheets>((acc, item) => {
        return {
          ...acc,
          [item.name]: item,
        };
      }, {});
      return {
        templateData: {
          ...state.templateData,
          [templateId]: newTemplateSheets,
        },
      };
    }),
  updateTemplateDimensionConfigs: (templateId, sheetName, newDimensions) =>
    set((state) => {
      const currentConfig = state.templateConfigs?.[templateId];
      const currentSheetConfigs = currentConfig?.[sheetName];
      const currentDimensions = currentSheetConfigs?.dimensions || [];

      const currentDimensionsMap = new Map<string, Dimension>();

      currentDimensions.forEach((dimension) => {
        const key = `${dimension.cell.row}:${dimension.cell.column}`;
        currentDimensionsMap.set(key, dimension);
      });

      newDimensions.forEach((newDimension) => {
        const key = `${newDimension.cell.row}:${newDimension.cell.column}`;
        currentDimensionsMap.set(key, newDimension);
        return newDimension;
      });

      const updatedDimensions = Array.from(currentDimensionsMap.values());

      return {
        templateConfigs: {
          ...state.templateConfigs,
          [templateId]: {
            ...currentConfig,
            [sheetName]: {
              ...currentSheetConfigs,
              dimensions: updatedDimensions,
            },
          },
        },
      };
    }),
  updateTemplateDataAreaConfigs: (templateId, sheetName, dataArea) =>
    set((state) => {
      const currentConfig = state.templateConfigs?.[templateId];
      const currentSheetConfigs = currentConfig?.[sheetName];
      const currentDataAreas = currentSheetConfigs?.dataAreas || [];

      return {
        templateConfigs: {
          ...state.templateConfigs,
          [templateId]: {
            ...currentConfig,
            [sheetName]: {
              ...currentSheetConfigs,
              dataAreas: [...currentDataAreas, dataArea],
            },
          },
        },
      };
    }),
}));
