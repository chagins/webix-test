import classNames from 'classnames';
import { Typography } from 'antd';
import { SelectTemplate } from 'features/SelectTemplate';
import { INavbarProps } from '../lib';

import * as styles from './Navbar.module.scss';

const { Title } = Typography;

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(className, styles.Navbar)}>
      <Title>Webix SpreadSheet</Title>
      <div className={styles.FeaturesContainer}>
        <SelectTemplate />
      </div>
    </div>
  );
};
