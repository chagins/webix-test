import classNames from 'classnames';
import {
  SpreadSheetWidget,
  SpreadSheetDatatype,
  useSpreadSheetWidget,
} from 'shared/components/SpreadSheetWidget';
import { useSheet } from 'entities/sheet';
import { useEffect } from 'react';
import { IMainPageProps } from '../lib';

import * as styles from './MainPage.module.scss';

export const MainPage = ({ className }: IMainPageProps) => {
  const { currentTemplate } = useSheet();
  const { instance: sheetInstance, importExcelFile } = useSpreadSheetWidget();

  // useEffect(() => {
  //   if (!currentTemplate || !sheetInstance) {
  //     return;
  //   }

  //   if (currentTemplate.datatype === SpreadSheetDatatype.EXCEL) {
  //     importExcelFile(currentTemplate.path);
  //   }
  // }, [currentTemplate, importExcelFile, sheetInstance]);

  return (
    <div className={classNames(className, styles.MainPage)}>
      <SpreadSheetWidget
        className={styles.Sheet}
        config={{
          toolbar: 'full',
        }}
      />
    </div>
  );
};
