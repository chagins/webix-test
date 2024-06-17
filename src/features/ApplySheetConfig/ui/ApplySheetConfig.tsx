import { Button } from 'antd';
import { useSheet } from 'entities/sheet';
import { useEffect, useState } from 'react';
import { SheetConfig } from 'app/providers/SheetProvider';
import { ApplySheetConfigProps } from '../lib';

export const ApplySheetConfig = ({ className }: ApplySheetConfigProps) => {
  const { currentTemplate, sheetInstance } = useSheet();
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentSheetConfig, setCurrentSheetConfig] = useState<SheetConfig>();

  useEffect(() => {
    sheetInstance?.attachEvent('onAfterLoad', () => {
      const activeSheetName = sheetInstance.getActiveSheet();

      if (!currentTemplate || !currentTemplate.sheets) {
        setIsDisabled(true);
        return;
      }

      const foundSheet = currentTemplate.sheets.find((sheet) => sheet.name === activeSheetName);

      if (foundSheet?.config) {
        setCurrentSheetConfig(foundSheet.config);
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    });
  }, [sheetInstance, currentTemplate]);

  const onApply = () => {
    if (!currentSheetConfig) {
      return;
    }

    const { columnCount, rowCount, editableCells } = currentSheetConfig;

    if (!sheetInstance) {
      return;
    }

    sheetInstance.define({ columnCount, rowCount });

    if (editableCells) {
      sheetInstance.lockCell({ row: 1, column: 1 }, { row: rowCount, column: columnCount }, true);
      sheetInstance.lockCell(...editableCells, false);
    }

    sheetInstance.refresh();
  };

  return (
    <Button className={className} type="primary" onClick={onApply} disabled={isDisabled}>
      Apply config
    </Button>
  );
};
