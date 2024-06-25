import { TreeDataNode } from 'antd';
import { Key } from 'react';
import { TreeNode } from './types';

export const getDimensionKeys = (
  selectedKeys: Key[] | { checked: Key[]; halfChecked: Key[] },
  treeData: TreeNode[]
): {
  id: string;
  values: string[];
}[] => {
  if (Array.isArray(selectedKeys)) {
    const dimensionNodes = treeData.filter((treeNode) =>
      treeNode?.children?.some(({ key }) => selectedKeys.includes(key))
    );

    return dimensionNodes.map(({ key, children }) => ({
      id: key,
      values: children?.map((childNode) => childNode.key) || [],
    }));
  }

  return [];
};
