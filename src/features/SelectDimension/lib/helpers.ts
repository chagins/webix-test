import { TreeDataNode } from 'antd';
import { Key } from 'react';
import { TreeNode } from './types';

export const getDimensionKeys = (
  selectedKeys: Key[] | { checked: Key[]; halfChecked: Key[] },
  treeData: TreeNode[]
): {
  dimensionValuesKeys: string[];
  dimensionIdKey: string | null;
} => {
  // TODO: доделать для любой вложенности
  const firstLevelKeys = treeData.map(({ key }) => key);
  const result = {
    dimensionValuesKeys: [],
    dimensionIdKey: null,
  };

  if (Array.isArray(selectedKeys)) {
    const dimensionValuesKeys = selectedKeys
      .filter((key) => !firstLevelKeys.includes(String(key)))
      .map((key) => String(key));
    const dimensionIdKey =
      String(selectedKeys.find((key) => firstLevelKeys.includes(String(key)))) || null;
    return {
      dimensionValuesKeys,
      dimensionIdKey,
    };
  }

  return result;
};
