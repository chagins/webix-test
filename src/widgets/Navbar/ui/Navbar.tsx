import classNames from 'classnames';
import { Typography } from 'antd';
import { INavbarProps } from '../lib';

import * as styles from './Navbar.module.scss';

const { Title } = Typography;

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(className, styles.Navbar)}>
      <Title>Webix SpreadSheet</Title>
    </div>
  );
};
