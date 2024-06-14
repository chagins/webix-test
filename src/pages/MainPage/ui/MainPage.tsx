import classNames from 'classnames';
import { useRef, useState } from 'react';
import { baseData, mathDataSimple } from 'shared/mock';
import { SpreadSheet } from 'shared/components/SpreadSheet';
import { IMainPageProps } from '../lib';

import * as styles from './MainPage.module.scss';

export const MainPage = ({ className }: IMainPageProps) => {
  const spreadSheetRef = useRef<webix.ui.spreadsheet>(null);
  const [data, setData] = useState(baseData);

  const onLoad = () => {
    setData(mathDataSimple);
  };

  return (
    <div className={classNames(className, styles.MainPage)}>
      <button
        type="button"
        style={{
          height: '30px',
          width: '60px',
          alignSelf: 'flex-start',
          padding: '5px',
        }}
        onClick={onLoad}
      >
        load
      </button>
      <SpreadSheet ref={spreadSheetRef} data={data} className={styles.Sheet} />
    </div>
  );
};
