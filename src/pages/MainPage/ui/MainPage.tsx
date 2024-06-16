import classNames from 'classnames';
import { useRef } from 'react';
import { SpreadSheet } from 'shared/components/SpreadSheet';
import { IMainPageProps } from '../lib';

import * as styles from './MainPage.module.scss';

export const MainPage = ({ className }: IMainPageProps) => {
  const spreadSheetRef = useRef<webix.ui.spreadsheet>(null);

  return (
    <div className={classNames(className, styles.MainPage)}>
      <SpreadSheet ref={spreadSheetRef} className={styles.Sheet} />
    </div>
  );
};
