import { Button, Space, Typography, message, MessageArgsProps } from 'antd';
import { useEffect, useState } from 'react';
import { useSpreadSheetWidgetStore } from 'shared/components/SpreadSheetWidget';
import { useSheetStore } from 'entities/sheet';
import {
  CellDataType,
  ValidationRule,
  dateValidationRule,
  numberValidationRule,
  phraseValidationRule,
  stringValidationRule,
  validate,
} from '../lib';

import * as styles from './ValidateCell.module.scss';

const { Title } = Typography;

export const ValidateCell = () => {
  const selectedCells = useSpreadSheetWidgetStore.use.selectedCells();
  const spreadSheetWidget = useSpreadSheetWidgetStore.use.widgetInstance();
  const activeSheetName = useSpreadSheetWidgetStore.use.activeSheetName();
  const [messageApi, contextHolder] = message.useMessage();

  const currentTemplate = useSheetStore.use.currentTemplate();

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!currentTemplate || !spreadSheetWidget || !selectedCells) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [currentTemplate, spreadSheetWidget, selectedCells]);

  const showMessage = (content: string, type: MessageArgsProps['type']) => {
    messageApi.open({
      type,
      content,
    });
  };

  const OnValidate = (rule: ValidationRule) => {
    if (!spreadSheetWidget || !activeSheetName) {
      return;
    }

    selectedCells.forEach((cell) => {
      const value = spreadSheetWidget.getCellValue(cell.row, cell.column, true, activeSheetName);
      console.log(value);
      const result = validate(value, rule);
      showMessage(result.message, result.isSuccess ? 'success' : 'error');
    });
  };

  return (
    <div className={styles.ValidateCell}>
      <Space direction="vertical" className={styles.Container}>
        <Title level={2}>Validation</Title>
        <Button
          onClick={() => OnValidate(numberValidationRule)}
          disabled={isDisabled}
        >{`isNumber, 1 <= value >= 100`}</Button>
        <Button
          onClick={() => OnValidate(stringValidationRule)}
          disabled={isDisabled}
        >{`isString, <= 50`}</Button>
        <Button
          onClick={() => OnValidate(dateValidationRule)}
          disabled={isDisabled}
        >{`isDate, >= 2000 year`}</Button>
        <Button
          onClick={() => OnValidate(phraseValidationRule)}
          disabled={isDisabled}
        >{`It's a string & contains 'word'`}</Button>
      </Space>
      {contextHolder}
    </div>
  );
};
