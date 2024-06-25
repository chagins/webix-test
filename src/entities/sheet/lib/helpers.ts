import { SheetName, Template, TemplateConfigs, TemplateSheetConfig } from './types';

export const getCurrentTemplateSheetConfig = (
  templateConfigs: TemplateConfigs | null,
  template: Template | null,
  activeSheetName: SheetName | null
): TemplateSheetConfig | null => {
  if (!templateConfigs || !template || !activeSheetName) {
    return null;
  }
  const templateSheetConfigs = templateConfigs?.[template.id];
  const templateSheetConfig = templateSheetConfigs?.[activeSheetName] || null;

  return templateSheetConfig;
};
