import { FileInfo, SheetContext } from 'app/providers/SheetProvider';
import { useCallback, useContext } from 'react';

export const useSheet = () => {
  const {
    currentTemplateIndex,
    templateList,
    setTemplateList,
    setCurrentTemplateIndex,
    templatePath,
    currentTemplate,
  } = useContext(SheetContext);

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

  return {
    currentTemplateIndex,
    setCurrentTemplateIndex,
    templateList,
    fetchTemplateList,
    templatePath,
    currentTemplate,
  };
};
