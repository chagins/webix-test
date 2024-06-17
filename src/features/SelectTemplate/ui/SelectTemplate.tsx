import { Select } from 'antd';
import { useSheet } from 'entities/sheet';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SelectTemplateProps, Option } from '../lib';

import * as styles from './SelectTemplate.module.scss';

export const SelectTemplate = ({ className }: SelectTemplateProps) => {
  const { fetchTemplateList, templateList, setCurrentTemplateIndex, currentTemplateIndex } =
    useSheet();
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    if (templateList.length) {
      const loadedOptions = templateList.map((template, index) => ({
        value: index,
        label: template.name,
      }));
      setOptions(loadedOptions);
    }
  }, [fetchTemplateList, templateList, templateList.length]);

  const onChange = (value: number) => {
    setCurrentTemplateIndex(value);
  };

  return (
    <Select
      className={classNames(className, styles.SelectTemplate)}
      options={options}
      value={currentTemplateIndex}
      onChange={onChange}
      placeholder="Select template"
      allowClear
    />
  );
};
