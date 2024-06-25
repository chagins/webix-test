import { Select } from 'antd';
// import { useSheet } from 'entities/sheet';
import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  SpreadSheetDatatype,
  SpreadSheetSerializeConfig /* useSpreadSheetWidget */,
  SpreadSheetWidgetSheet,
  useSpreadSheetWidgetStore,
} from 'shared/components/SpreadSheetWidget';
import { Template, TemplateId, useSheetStore } from 'entities/sheet';
import { SelectTemplateProps, Option } from '../lib';

import * as styles from './SelectTemplate.module.scss';

export const SelectTemplate = ({ className }: SelectTemplateProps) => {
  const spreadSheetWidget = useSpreadSheetWidgetStore.use.widgetInstance();
  // const spreadSheetImportedData = useSpreadSheetWidgetStore.use.importedData();

  const templates = useSheetStore.use.templates();
  const updateCurrentTemplate = useSheetStore.use.updateCurrentTemplate();
  const currentTemplate = useSheetStore.use.currentTemplate();
  const templateData = useSheetStore.use.templateData();
  const updateTemplateData = useSheetStore.use.updateTemplateData();

  const [options, setOptions] = useState<Option[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!spreadSheetWidget || !options.length) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [options.length, spreadSheetWidget]);

  useEffect(() => {
    if (!templates) {
      return;
    }

    const loadedOptions = Object.values(templates)?.map(({ name, id }) => ({
      value: id,
      label: name,
    }));
    setOptions(loadedOptions);
  }, [templates]);

  const importExcelFile = useCallback(
    async (importTemplate: Template) => {
      // TODO: вынести в хуки или в хелперы, try catch

      const { path } = importTemplate;
      if (!spreadSheetWidget || !path) {
        return;
      }

      const url = `binary->${path}`;
      const dataType = SpreadSheetDatatype.EXCEL;

      await spreadSheetWidget.load(url, dataType);
    },
    [spreadSheetWidget]
  );

  const onChange = (value: TemplateId) => {
    updateCurrentTemplate(value);
    const selectedTemplate = templates?.[value];

    if (!selectedTemplate || !spreadSheetWidget) {
      return;
    }

    const selectedTemplateData = templateData?.[selectedTemplate.id];

    if (selectedTemplateData) {
      spreadSheetWidget.parse({
        sheets: Object.values(selectedTemplateData).map((item) => ({
          ...item,
          content: {
            // Проверка возможности сохранение элемента массива данных ячейки
            ...item.content,
            data: item.content.data.map((dataItem) => [...dataItem, { myCustomData: 'lalala' }]),
          },
        })),
      });
    } else {
      importExcelFile(selectedTemplate);
    }
  };

  return (
    <Select
      className={classNames(className, styles.SelectTemplate)}
      options={options}
      value={currentTemplate?.id}
      onChange={onChange}
      placeholder="Select template"
      allowClear
      disabled={isDisabled}
    />
  );
};
