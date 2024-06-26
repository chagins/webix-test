import classNames from 'classnames';
import { Space, Typography } from 'antd';
import { SelectTemplate } from 'features/SelectTemplate';
import { LoadTemplates } from 'features/LoadTemplates';
import { ApplySheetConfig } from 'features/ApplySheetConfig';
import { INavbarProps } from '../lib';

import * as styles from './Navbar.module.scss';

const { Title } = Typography;

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(className, styles.Navbar)}>
      <Title>Webix SpreadSheet</Title>
      <div className={styles.FeaturesContainer}>
        <Space size="small">
          <LoadTemplates />
          <SelectTemplate />
          <ApplySheetConfig />
        </Space>
      </div>
    </div>
  );
};
