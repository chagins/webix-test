import { TemplateData, TemplateId, TemplateSeparateData } from 'entities/sheet';

export const mergeTemplateData = (
  currentTemplateId: TemplateId,
  templateData: TemplateData,
  newTemplateData: TemplateSeparateData
): TemplateData => {
  const updatedTemplateData = { ...templateData };

  Object.entries(newTemplateData).forEach(([templateId, newSheets]) => {
    if (templateId !== currentTemplateId) {
      return;
    }
    const existingSheets = updatedTemplateData[templateId];

    if (existingSheets) {
      Object.entries(newSheets).forEach(([sheetName, newSheetContent]) => {
        if (existingSheets[sheetName]) {
          updatedTemplateData[templateId][sheetName].content.data = [
            ...existingSheets[sheetName].content.data,
            ...newSheetContent.data,
          ];
        }
      });
    }
  });

  return updatedTemplateData;
};
