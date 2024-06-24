import { Space, Tree, TreeProps, Typography } from 'antd';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import {
  Cell,
  CellEditorType,
  useSpreadSheetWidgetStore,
} from 'shared/components/SpreadSheetWidget';
import { Dimension, useSheetStore } from 'entities/sheet';
import { SelectDimensionProps, getDimensionKeys, treeData } from '../lib';

import * as styles from './SelectDimension.module.scss';

const { Title } = Typography;

export const SelectDimension = ({ className }: SelectDimensionProps) => {
  const spreadSheetWidget = useSpreadSheetWidgetStore.use.widgetInstance();
  const selectedCells = useSpreadSheetWidgetStore.use.selectedCells();
  const activeSheetName = useSpreadSheetWidgetStore.use.activeSheetName();

  const updateTemplateConfig = useSheetStore.use.updateTemplateConfigs();
  const currentTemplate = useSheetStore.use.currentTemplate();
  const templateConfigs = useSheetStore.use.templateConfigs();

  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState(true);

  console.log('templateConfig', { templateConfigs });

  useEffect(() => {
    if (!currentTemplate || !spreadSheetWidget) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [currentTemplate, spreadSheetWidget]);

  useEffect(() => {
    if (
      !selectedCells?.length ||
      !templateConfigs ||
      !currentTemplate ||
      !activeSheetName ||
      !spreadSheetWidget
    ) {
      return;
    }

    const templateSheetConfigs = templateConfigs?.[currentTemplate.id];
    const templateSheetConfig = templateSheetConfigs?.[activeSheetName];
    const dimensions = templateSheetConfig?.dimensions;

    // if (dimensions) {
    //   dimensions.forEach(({ id, cell, values }) => {
    //     const isCellsWithDimsExists = selectedCells.some(
    //       (selectedCell) => selectedCell.row === cell.row && selectedCell.column === cell.column
    //     );
    //     if (isCellsWithDimsExists) {
    //       setCheckedKeys((prevKeys) => {
    //         const newKeys = prevKeys.filter((key) => key !== id);

    //       });
    //     } else {
    //       setCheckedKeys((prevKeys) => {
    //         const newKeys = prevKeys.filter((key) => key !== id);
    //         return [...newKeys];
    //       });
    //     }
    //   }, []);
    // }
  }, [activeSheetName, currentTemplate, selectedCells, spreadSheetWidget, templateConfigs]);

  const onExpand: TreeProps['onExpand'] = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue as React.Key[]);

    if (!spreadSheetWidget) {
      return;
    }

    const { dimensionIdKey, dimensionValuesKeys } = getDimensionKeys(checkedKeysValue, treeData);
    const dimensions: Dimension[] = [];

    if (dimensionIdKey && activeSheetName && currentTemplate) {
      spreadSheetWidget.eachSelectedCell((cell: Cell) => {
        if (dimensionValuesKeys.length) {
          spreadSheetWidget.setCellEditor(cell.row, cell.column, {
            editor: CellEditorType.SS_RICHSELECT,
            options: dimensionValuesKeys,
          });
          spreadSheetWidget.setCellValue(
            cell.row,
            cell.column,
            dimensionValuesKeys[0],
            activeSheetName
          );
          dimensions.push({
            id: dimensionIdKey,
            cell,
            values: dimensionValuesKeys,
          });

          updateTemplateConfig(currentTemplate.id, activeSheetName, dimensions);
        }

        if (!dimensionValuesKeys.length) {
          // TODO: доработать разные dimensions
          const currentCellEditor = spreadSheetWidget.getCellEditor(cell.row, cell.column);

          if (currentCellEditor) {
            spreadSheetWidget.setCellEditor(cell.row, cell.column, {
              editor: '',
            });
          }
        }
      });
    }
  };

  const onSelect: TreeProps['onSelect'] = (selectedKeysValue, info) => {
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <div className={classNames(className, styles.SelectDimension)}>
      <Space direction="vertical" className={styles.Container}>
        <Title level={2}>Dimensions</Title>
        <Tree
          checkable
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          treeData={treeData}
          disabled={isDisabled}
        />
      </Space>
    </div>
  );
};
