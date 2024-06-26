import { Layout, Space } from 'antd';
import { SelectDimension } from 'features/SelectDimension';
import { SelectDataArea } from 'features/SelectDataArea';

import * as styles from './Sidebar.module.scss';

const { Sider } = Layout;

export const Sidebar = () => {
  const dataAreas = ['DA1', 'DA2'];
  return (
    <Sider className={styles.Sidebar}>
      <Space className={styles.Container} direction="vertical">
        <SelectDimension />
        {dataAreas.map((name) => (
          <SelectDataArea rangeName={name} key={name} />
        ))}
      </Space>
    </Sider>
  );
};
