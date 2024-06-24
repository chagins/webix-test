import { Layout, Space } from 'antd';
import { SelectDimension } from 'features/SelectDimension';

import * as styles from './Sidebar.module.scss';

const { Sider } = Layout;

export const Sidebar = () => {
  return (
    <Sider className={styles.Sidebar}>
      <Space className={styles.Container} direction="vertical">
        <SelectDimension />
      </Space>
    </Sider>
  );
};
