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
    if (!sheetInstance || !currentTemplate || !currentTemplate?.sheets) {
      setIsDisabled(true);
      return;
    }

    sheetInstance.attachEvent('onAfterLoad', () => {
      const activeSheetName = sheetInstance.getActiveSheet();
      const { sheets } = currentTemplate;
      const foundSheet = sheets?.find((sheet) => sheet.name === activeSheetName);

      if (foundSheet?.config) {
        setCurrentSheetConfig(foundSheet.config);
      } else {
        setIsDisabled(true);
      }
    });

    setIsDisabled(false);
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
  };

  return (
    <Button className={className} type="primary" onClick={onApply} disabled={isDisabled}>
      Apply config
    </Button>
  );
};
