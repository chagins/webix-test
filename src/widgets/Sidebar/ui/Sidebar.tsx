import { Layout, Space } from 'antd';
import { SelectDimension } from 'features/SelectDimension';

import * as styles from './Sidebar.module.scss';

const { Sider } = Layout;

export const Sidebar = () => {
  return (
    <Sider className={styles.Sidebar} collapsible width={400} collapsedWidth={200}>
      <Space className={styles.Container} direction="vertical">
        <SelectDimension />
      </Space>
    </Sider>
  );
};
