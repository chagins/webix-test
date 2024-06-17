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
    if (!currentSheetConfig || !sheetInstance) {
      return;
    }

    const { columnCount, rowCount, editableCells } = currentSheetConfig;
    const initialRowCount = sheetInstance.config.rowCount;
    const initialColumnCount = sheetInstance.config.columnCount;

    sheetInstance.define({ columnCount, rowCount });
    if (initialRowCount !== undefined && initialRowCount > rowCount) {
      const startRowIndex = rowCount + 1;
      const endRowIndex = initialRowCount;
      sheetInstance.deleteRow([startRowIndex, endRowIndex]);
    }

    if (initialColumnCount !== undefined && initialColumnCount > columnCount) {
      const startColIndex = columnCount + 1;
      const endColIndex = initialColumnCount;
      sheetInstance.deleteColumn([startColIndex, endColIndex]);
    }

    if (editableCells) {
      sheetInstance.lockCell({ row: 1, column: 1 }, { row: rowCount, column: columnCount }, true);
      sheetInstance.lockCell(...editableCells, false);
    }

    sheetInstance.adjust();
    sheetInstance.refresh();
  };

  return (
    <Button className={className} type="primary" onClick={onApply} disabled={isDisabled}>
      Apply config
    </Button>
  );
};
