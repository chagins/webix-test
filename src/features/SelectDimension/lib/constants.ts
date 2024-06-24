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
    title: 'D1',
    key: 'D1',
    parentKey: null,
    children: [
      {
        title: 'D1-A',
        key: 'D1-A',
        parentKey: 'D1',
        children: undefined,
      },
      {
        title: 'D1-B',
        key: 'D1-B',
        parentKey: 'D1',
        children: undefined,
      },
      {
        title: 'D1-C',
        key: 'D1-C',
        parentKey: 'D1',
        children: undefined,
      },
    ],
  },
  {
    title: 'D2',
    key: 'D2',
    parentKey: null,
    children: [
      {
        title: 'D2-A',
        key: 'D2-A',
        parentKey: 'D2',
        children: undefined,
      },
      {
        title: 'D2-B',
        key: 'D2-B',
        parentKey: 'D2',
        children: undefined,
      },
    ],
  },
];
