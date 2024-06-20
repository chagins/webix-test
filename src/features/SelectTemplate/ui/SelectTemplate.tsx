import { Select } from 'antd';
import { useSheet } from 'entities/sheet';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SpreadSheetDatatype, useSpreadSheetWidget } from 'shared/components/SpreadSheetWidget';
import { SelectTemplateProps, Option } from '../lib';

import * as styles from './SelectTemplate.module.scss';

export const SelectTemplate = ({ className }: SelectTemplateProps) => {
  const { fetchTemplateList, templateList, currentTemplate, setCurrentTemplate } = useSheet();
  const { importExcelFile } = useSpreadSheetWidget();

  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const loadedOptions = templateList?.map(({ name, id }) => ({
      value: id,
      label: name,
    }));
    setOptions(loadedOptions);
  }, [fetchTemplateList, templateList, templateList.length]);

  useEffect(() => {
    if (currentTemplate && currentTemplate.datatype === SpreadSheetDatatype.EXCEL) {
      importExcelFile(currentTemplate.path);
    }
  }, [currentTemplate, importExcelFile]);

  const onChange = (value: string) => {
    setCurrentTemplate(value);
  };

  return (
    <Select
      className={classNames(className, styles.SelectTemplate)}
      options={options}
      value={currentTemplate?.id}
      onChange={onChange}
      placeholder="Select template"
      allowClear
    />
  );
};
