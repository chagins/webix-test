import { Button } from 'antd';
import { TemplateData, TemplateSeparateData, TemplateSheets, useSheetStore } from 'entities/sheet';
import { useEffect, useState } from 'react';
import {
  SpreadSheetWidgetSheet,
  useSpreadSheetWidgetStore,
} from 'shared/components/SpreadSheetWidget';
import { LoadDataProps, mergeTemplateData } from '../lib';

export const LoadData = (props: LoadDataProps) => {
  const { dataPath } = props;

  const spreadSheetWidget = useSpreadSheetWidgetStore.use.widgetInstance();

  const currentTemplate = useSheetStore.use.currentTemplate();
  const templateData = useSheetStore.use.templateData();
  const updateTemplateData = useSheetStore.use.updateTemplateData();

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!currentTemplate || !spreadSheetWidget || !templateData) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [currentTemplate, spreadSheetWidget, templateData]);

  const fetchData = async (path: string): Promise<TemplateSeparateData | null> => {
    try {
      const response = await fetch(path);
      const newData = (await response.json()) as TemplateSeparateData;

      if (!newData) {
        return null;
      }

      return newData;
    } catch (error) {
      console.error('Templates separate data update error', error);
      return null;
    }
  };

  const updateData = (
    actualTemplateData: TemplateData,
    newTemplateData: TemplateSeparateData,
    currentTemplateId: string
  ): SpreadSheetWidgetSheet[] | null => {
    try {
      const mergedTemplateData = mergeTemplateData(
        currentTemplateId,
        actualTemplateData,
        newTemplateData
      );
      const spreadSheetWidgetSheets: SpreadSheetWidgetSheet[] = Object.values(
        mergedTemplateData?.[currentTemplateId]
      );
      updateTemplateData(currentTemplateId, spreadSheetWidgetSheets);
      return spreadSheetWidgetSheets;
    } catch (error) {
      console.error('Templates separate data update error', error);
      return null;
    }
  };

  const onLoad = async () => {
    if (!spreadSheetWidget || !currentTemplate || !templateData) {
      return;
    }

    const newTemplateData = await fetchData(dataPath);

    if (!newTemplateData) {
      return;
    }

    const updatedSpreadSheetWidgetSheets = updateData(
      templateData,
      newTemplateData,
      currentTemplate.id
    );

    if (updatedSpreadSheetWidgetSheets && updatedSpreadSheetWidgetSheets.length) {
      spreadSheetWidget.parse({
        sheets: updatedSpreadSheetWidgetSheets,
      });
    }
  };

  return (
    <div>
      <Button onClick={onLoad} disabled={isDisabled}>
        Load Data
      </Button>
    </div>
  );
};
