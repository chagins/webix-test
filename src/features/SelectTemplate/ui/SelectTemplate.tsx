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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!templateList.length) {
      setIsLoading(true);
      fetchTemplateList();
    } else {
      setIsLoading(false);
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
      loading={isLoading}
      placeholder="Select template"
      allowClear
    />
  );
};
