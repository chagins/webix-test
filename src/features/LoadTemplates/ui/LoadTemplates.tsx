import { Button } from 'antd';
// import { useSheet } from 'entities/sheet';
import { useEffect, useState } from 'react';
// import { useSpreadSheetWidget } from 'shared/components/SpreadSheetWidget';
import { Template, Templates, useSheetStore } from 'entities/sheet';
import { useSpreadSheetWidgetStore } from 'shared/components/SpreadSheetWidget';
import { LoadTemplatesProps } from '../lib';

export const LoadTemplates = ({ className }: LoadTemplatesProps) => {
  const spreadSheetWidget = useSpreadSheetWidgetStore.use.widgetInstance();
  const updateTemplates = useSheetStore.use.updateTemplates();
  const templatePath = useSheetStore.use.templatePath();

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!spreadSheetWidget) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [spreadSheetWidget]);

  const fetchTemplates = async (path: string): Promise<Templates | null> => {
    try {
      const response = await fetch(path);
      const templateList = (await response.json()) as Template[];
      console.log('fetchTemplates', { templateList });

      if (!!templateList && Array.isArray(templateList) && !!templateList.length) {
        const templateObject = templateList.reduce<Templates>(
          (acc, item) => ({
            ...acc,
            [item.id]: item,
          }),
          {}
        );
        updateTemplates(templateObject);
        return templateObject;
      }

      return null;
    } catch (error) {
      console.error('Templates list download error', error);
      return null;
    }
  };

  const onLoad = async () => {
    if (!templatePath) {
      return;
    }

    setIsLoading(true);
    spreadSheetWidget?.disable();
    await fetchTemplates(templatePath);
    spreadSheetWidget?.enable();
    setIsLoading(false);
  };

  return (
    <Button
      className={className}
      type="primary"
      loading={isLoading}
      onClick={onLoad}
      disabled={isDisabled || isLoading}
    >
      Load templates
    </Button>
  );
};
