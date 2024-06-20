import { Space, Tree, TreeProps, Typography } from 'antd';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Cell, CellEditorType, useSpreadSheetWidget } from 'shared/components/SpreadSheetWidget';
import { SelectDimensionProps, treeData } from '../lib';

import * as styles from './SelectDimension.module.scss';

const { Title } = Typography;

export const SelectDimension = ({ className }: SelectDimensionProps) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const { instance } = useSpreadSheetWidget();

  const firstLevelKeys = treeData.map(({ key }) => key);

  useEffect(() => {
    if (!instance) {
      return;
    }

    instance.attachEvent('onAfterSelect', (cells: Cell[]) => {
      const activeSheetName = instance.getActiveSheet();

      instance.eachSelectedCell((cell: Cell) => {
        const cellEditor = instance.getCellEditor(cell.row, cell.column);
      });
    });
  }, [instance]);

  const onExpand: TreeProps['onExpand'] = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeysValue) => {
    console.log({ checkedKeysValue });
    setCheckedKeys(checkedKeysValue as React.Key[]);

    if (!instance) {
      return;
    }

    const activeSheetName = instance.getActiveSheet();
    instance.eachSelectedCell((cell: Cell) => {
      console.log(instance.getCellValue(cell.row, cell.column, true, activeSheetName));
      const allKeys = Array.isArray(checkedKeysValue) ? checkedKeysValue : [];
      const childKeys = allKeys.filter((key) => !firstLevelKeys.includes(key));

      if (childKeys.length) {
        instance.setCellEditor(cell.row, cell.column, {
          editor: CellEditorType.SS_RICHSELECT,
          options: childKeys,
        });
      }

      if (!childKeys.length) {
        instance.setCellEditor(cell.row, cell.column, {
          editor: '',
        });
      }
    });
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
        />
      </Space>
    </div>
  );
};
