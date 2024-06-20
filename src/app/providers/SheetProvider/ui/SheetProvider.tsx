import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FileInfo, SheetContext, SheetContextType } from 'entities/sheet';
import { SheetProviderProps } from '../lib';

export const SheetProvider: React.FC<SheetProviderProps> = ({ children, templatePath }) => {
  const [templateList, setTemplateList] = useState<FileInfo[]>([]);
  const [template, setTemplate] = useState<FileInfo | null>(null);

  const fetchTemplateList = useCallback(async (): Promise<FileInfo[] | null> => {
    try {
      const response = await fetch(templatePath);
      const files = (await response.json()) as FileInfo[];

      if (!!files && Array.isArray(files) && !!files.length) {
        setTemplateList(files);
        return files;
      }

      return null;
    } catch (error) {
      console.error('Templates list download error', error);
      return null;
    }
  }, [setTemplateList, templatePath]);

  const setCurrentTemplate = useCallback(
    (id: string) => {
      if (!templateList.length) {
        return;
      }

      const foundTemplate = templateList.find((item) => item.id === id);
      if (foundTemplate) {
        setTemplate(foundTemplate);
      }
    },
    [templateList]
  );

  const defaultProps = useMemo<SheetContextType>(
    () => ({
      templateList,
      fetchTemplateList,
      templatePath,
      currentTemplate: template,
      setCurrentTemplate,
    }),
    [fetchTemplateList, setCurrentTemplate, template, templateList, templatePath]
  );

  return <SheetContext.Provider value={defaultProps}>{children}</SheetContext.Provider>;
};
