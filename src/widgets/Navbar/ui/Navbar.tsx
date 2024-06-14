import classNames from 'classnames';
import { INavbarProps } from '../lib';

import * as styles from './Navbar.module.scss';

export const Navbar = ({ className }: INavbarProps) => {
  return <div className={classNames(className, styles.Navbar)}>Navbar</div>;
};
