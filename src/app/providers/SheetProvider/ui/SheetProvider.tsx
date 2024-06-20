import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FileInfo, SheetContext, SheetContextType } from 'entities/sheet';
import { SheetProviderProps } from '../lib';

export const SheetProvider: React.FC<SheetProviderProps> = ({ children, templatePath }) => {
  const [templateList, setTemplateList] = useState<FileInfo[]>([]);
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState<number | null>(null);
  const [currentTemplate, setCurrentTemplate] = useState<FileInfo | null>(null);

  useEffect(() => {
    if (currentTemplateIndex !== null && Array.isArray(templateList) && templateList.length) {
      setCurrentTemplate(templateList[currentTemplateIndex]);
    }
  }, [currentTemplateIndex, templateList]);

  const fetchTemplateList = useCallback(async (): Promise<FileInfo[] | null> => {
    try {
      const response = await fetch(templatePath);
      const files = (await response.json()) as FileInfo[];

      if (!!files && Array.isArray(files) && !!files.length) {
        setTemplateList(files);
        setCurrentTemplateIndex(0);
        return files;
      }

      return null;
    } catch (error) {
      console.error('Templates list download error', error);
      return null;
    }
  }, [setCurrentTemplateIndex, setTemplateList, templatePath]);

  const defaultProps = useMemo<SheetContextType>(
    () => ({
      currentTemplateIndex,
      setCurrentTemplateIndex,
      templateList,
      setTemplateList,
      fetchTemplateList,
      templatePath,
      currentTemplate,
    }),
    [currentTemplate, currentTemplateIndex, fetchTemplateList, templateList, templatePath]
  );

  return <SheetContext.Provider value={defaultProps}>{children}</SheetContext.Provider>;
};
