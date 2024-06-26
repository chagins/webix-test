import { SpreadSheetWidgetSheet } from 'shared/components/SpreadSheetWidget';
import {
  DataArea,
  Dimension,
  SheetName,
  Template,
  TemplateConfigs,
  TemplateData,
  TemplateId,
  Templates,
} from './types';

export type SheetState = {
  spreadSheetWidget: webix.ui.spreadsheet | null;
  templates: Templates | null;
  currentTemplate: Template | null;
  templatePath: string | null;
  templateData: TemplateData | null;
  templateConfigs: TemplateConfigs | null;
};

export type SheetAction = {
  updateSpreadSheetWidget: (instance: webix.ui.spreadsheet | null) => void;
  updateTemplates: (newTemplates: Templates | null) => void;
  updateCurrentTemplate: (templateId: TemplateId) => void;
  updateTemplatePath: (path: string | null) => void;
  updateTemplateData: (templateId: TemplateId, data: SpreadSheetWidgetSheet[]) => void;
  updateTemplateDimensionConfigs: (
    templateId: TemplateId,
    sheetName: SheetName,
    dimensions: Dimension[]
  ) => void;
  updateTemplateDataAreaConfigs: (
    templateId: TemplateId,
    sheetName: SheetName,
    dataArea: DataArea
  ) => void;
};
