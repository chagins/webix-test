import React, { useEffect, useMemo, useState } from 'react';
import { FileInfo, SheetContext, SheetContextProps, SheetProviderProps } from '../lib';

export const SheetProvider: React.FC<SheetProviderProps> = ({ children, templatePath }) => {
  const [templateList, setTemplateList] = useState<FileInfo[]>([]);
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState<number>();
  const [currentTemplate, setCurrentTemplate] = useState<FileInfo>();
  const [sheetInstance, setSheetInstance] = useState<webix.ui.spreadsheet>();

  useEffect(() => {
    if (currentTemplateIndex !== undefined && Array.isArray(templateList) && templateList.length) {
      setCurrentTemplate(templateList[currentTemplateIndex]);
    }
  }, [currentTemplateIndex, templateList]);

  const defaultProps = useMemo<SheetContextProps>(
    () => ({
      currentTemplateIndex,
      setCurrentTemplateIndex,
      templateList,
      setTemplateList,
      templatePath,
      currentTemplate,
      sheetInstance,
      setSheetInstance,
    }),
    [currentTemplateIndex, templateList, templatePath, currentTemplate, sheetInstance]
  );

  return <SheetContext.Provider value={defaultProps}>{children}</SheetContext.Provider>;
};
