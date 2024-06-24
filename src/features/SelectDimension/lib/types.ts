import { Key } from 'react';

export interface SelectDimensionProps {
  className?: string;
}

export interface TreeNode {
  title: string;
  key: string;
  parentKey: string | null;
  children?: TreeNode[];
}
