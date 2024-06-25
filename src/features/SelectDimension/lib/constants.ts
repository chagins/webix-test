import { TreeDataNode } from 'antd';
import { TreeNode } from './types';

// export interface CustomChildrenTreeDataNode extends TreeDataNode. {

// }
// export interface CustomTreeDataNode extends TreeDataNode {
//   parentKey: React.Key | null;
//   children?:
//     | FieldDataNode<
//         {
//           key: React.Key;
//           title?: React.ReactNode | ((data: TreeDataNode) => React.ReactNode);
//         },
//         'children'
//       >[]
//     | undefined;
// }

export const treeData: TreeNode[] = [
  {
    title: 'R1',
    key: 'R1',
    parentKey: null,
    children: [
      {
        title: 'R1-A',
        key: 'R1-A',
        parentKey: 'R1',
        children: undefined,
      },
      {
        title: 'R1-B',
        key: 'R1-B',
        parentKey: 'R1',
        children: undefined,
      },
      {
        title: 'R1-C',
        key: 'R1-C',
        parentKey: 'R1',
        children: undefined,
      },
    ],
  },
  {
    title: 'R2',
    key: 'R2',
    parentKey: null,
    children: [
      {
        title: 'R2-A',
        key: 'R2-A',
        parentKey: 'R2',
        children: undefined,
      },
      {
        title: 'R2-B',
        key: 'R2-B',
        parentKey: 'R2',
        children: undefined,
      },
    ],
  },
  {
    title: 'C1',
    key: 'C1',
    parentKey: null,
    children: [
      {
        title: 'C1-A',
        key: 'C1-A',
        parentKey: 'C1',
        children: undefined,
      },
      {
        title: 'C1-B',
        key: 'C1-B',
        parentKey: 'C1',
        children: undefined,
      },
      {
        title: 'C1-C',
        key: 'C1-C',
        parentKey: 'C1',
        children: undefined,
      },
    ],
  },
  {
    title: 'C2',
    key: 'C2',
    parentKey: null,
    children: [
      {
        title: 'C2-A',
        key: 'C2-A',
        parentKey: 'C2',
        children: undefined,
      },
      {
        title: 'C2-B',
        key: 'C2-B',
        parentKey: 'C2',
        children: undefined,
      },
    ],
  },
];
