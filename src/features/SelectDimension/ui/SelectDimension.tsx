import { Space, Tree, TreeProps, Typography } from 'antd';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import {
  Cell,
  CellEditorType,
  useSpreadSheetWidgetStore,
} from 'shared/components/SpreadSheetWidget';
import { Dimension, getCurrentTemplateSheetConfig, useSheetStore } from 'entities/sheet';
import { SelectDimensionProps, getDimensionKeys, treeData } from '../lib';

import * as styles from './SelectDimension.module.scss';

const { Title } = Typography;

export const SelectDimension = ({ className }: SelectDimensionProps) => {
  const spreadSheetWidget = useSpreadSheetWidgetStore.use.widgetInstance();
  const selectedCells = useSpreadSheetWidgetStore.use.selectedCells();
  const activeSheetName = useSpreadSheetWidgetStore.use.activeSheetName();

  const updateTemplateConfig = useSheetStore.use.updateTemplateDimensionConfigs();
  const currentTemplate = useSheetStore.use.currentTemplate();
  const templateConfigs = useSheetStore.use.templateConfigs();

  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
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

    const dimensions = getCurrentTemplateSheetConfig(
      templateConfigs,
      currentTemplate,
      activeSheetName
    )?.dimensions;

    if (!dimensions) {
      return;
    }

    dimensions.forEach(({ id, cell, values }) => {
      const cellsWithDim = selectedCells.filter(
        (selectedCell) => selectedCell.row === cell.row && selectedCell.column === cell.column
      );

      const dimensionIdKey = id;

      if (cellsWithDim.length) {
        setCheckedKeys((prevKeys) => {
          return prevKeys.includes(dimensionIdKey) ? [...prevKeys] : [...prevKeys, dimensionIdKey];
        });
      } else {
        setCheckedKeys((prevKeys) => {
          const dimensionValuesKeys =
            treeData.find((node) => node.key === dimensionIdKey)?.children?.map(({ key }) => key) ||
            [];
          const newKeys = prevKeys.filter(
            (key) => key !== dimensionIdKey && !dimensionValuesKeys.includes(key)
          );
          return [...newKeys];
        });
      }
    }, []);
  }, [activeSheetName, currentTemplate, selectedCells, spreadSheetWidget, templateConfigs]);

  const onExpand: TreeProps['onExpand'] = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue as string[]);
    setAutoExpandParent(false);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeysValue) => {
    if (!spreadSheetWidget || !Array.isArray(checkedKeysValue)) {
      return;
    }

    setCheckedKeys((prevKeys) => {
      const dimensionKeys = getDimensionKeys(checkedKeysValue, treeData)?.[0];
      const dimensions: Dimension[] = [];

      if (activeSheetName && currentTemplate) {
        spreadSheetWidget.eachSelectedCell((cell: Cell) => {
          if (dimensionKeys && dimensionKeys.values.length) {
            spreadSheetWidget.setCellEditor(cell.row, cell.column, {
              editor: CellEditorType.SS_RICHSELECT,
              options: dimensionKeys.values,
            });
            spreadSheetWidget.setCellValue(
              cell.row,
              cell.column,
              dimensionKeys.values[0],
              activeSheetName
            );
            dimensions.push({
              id: dimensionKeys.id,
              cell,
              values: dimensionKeys.values,
            });

            updateTemplateConfig(currentTemplate.id, activeSheetName, dimensions);
          }

          if (!dimensionKeys || !dimensionKeys.values.length) {
            const currentCellEditor = spreadSheetWidget.getCellEditor(cell.row, cell.column);

            if (currentCellEditor) {
              spreadSheetWidget.setCellEditor(cell.row, cell.column, {
                editor: '',
              });
            }
          }
        });
      }

      return checkedKeysValue as string[];
    });
  };

  const onSelect: TreeProps['onSelect'] = (selectedKeysValue, info) => {
    setSelectedKeys(selectedKeysValue as string[]);
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
