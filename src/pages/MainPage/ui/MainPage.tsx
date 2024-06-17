import classNames from 'classnames';
import { useCallback, useEffect } from 'react';
import { SpreadSheet, prepareImportFileInfo } from 'shared/components/SpreadSheet';
import { useSheet } from 'entities/sheet';
import { IMainPageProps } from '../lib';

import * as styles from './MainPage.module.scss';

export const MainPage = ({ className }: IMainPageProps) => {
  const { currentTemplate, sheetInstance, setSheetInstance } = useSheet();

  useEffect(() => {
    if (!currentTemplate || !sheetInstance) {
      return;
    }

    const { url, datatype } = prepareImportFileInfo({
      path: currentTemplate.path,
      datatype: currentTemplate.datatype,
    });

    if (url && datatype) {
      sheetInstance.load(url, datatype);
    }
  }, [currentTemplate, sheetInstance]);

  useEffect(() => {
    if (!currentTemplate || !sheetInstance) {
      return;
    }

    const { sheets } = currentTemplate;

    if (sheets && sheets.length) {
      // sheetInstance.define({ columnCount, rowCount });
      // sheetInstance.attachEvent('onAfterLoad', () => {
      //   sheetInstance.lockCell({ row: 1, column: 1 }, { row: rowCount, column: columnCount }, true);
      //   sheetInstance.lockCell(...editableCells, false);
      // });
    }
  }, [currentTemplate, sheetInstance]);

  const onSpreadSheetInit = useCallback(
    (sheet: webix.ui.spreadsheet) => {
      setSheetInstance(sheet);
    },
    [setSheetInstance]
  );

  return (
    <div className={classNames(className, styles.MainPage)}>
      <SpreadSheet className={styles.Sheet} onInit={onSpreadSheetInit} />
    </div>
  );
};
