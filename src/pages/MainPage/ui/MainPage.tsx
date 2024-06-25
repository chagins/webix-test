import classNames from 'classnames';
import {
  CellEditorType,
  SpreadSheetWidget,
  useSpreadSheetWidgetStore,
} from 'shared/components/SpreadSheetWidget';
import { useEffect } from 'react';
import { getCurrentTemplateSheetConfig, useSheetStore } from 'entities/sheet';
import { IMainPageProps } from '../lib';

import * as styles from './MainPage.module.scss';

export const MainPage = ({ className }: IMainPageProps) => {
  const spreadSheetWidget = useSpreadSheetWidgetStore.use.widgetInstance();
  const spreadSheetImportData = useSpreadSheetWidgetStore.use.importData();
  const updateSpreadSheetImportData = useSpreadSheetWidgetStore.use.updateImportData();
  const spreadSheetData = useSpreadSheetWidgetStore.use.data();

  const activeSheetName = useSpreadSheetWidgetStore.use.activeSheetName();
  const updateTemplateData = useSheetStore.use.updateTemplateData();
  const templateData = useSheetStore.use.templateData();
  const currentTemplate = useSheetStore.use.currentTemplate();
  const templateConfigs = useSheetStore.use.templateConfigs();

  console.log('templateData', { templateData });

  useEffect(() => {
    if (spreadSheetData && currentTemplate) {
      updateTemplateData(currentTemplate.id, spreadSheetData);
    }
  }, [currentTemplate, spreadSheetData, updateTemplateData]);

  useEffect(() => {
    if (!spreadSheetWidget) {
      return;
    }
    const templateSheetConfig = getCurrentTemplateSheetConfig(
      templateConfigs,
      currentTemplate,
      activeSheetName
    );
    const dimensions = templateSheetConfig?.dimensions;

    if (dimensions) {
      dimensions.forEach(({ cell, values }) => {
        spreadSheetWidget.setCellEditor(cell.row, cell.column, {
          editor: CellEditorType.SS_RICHSELECT,
          options: values,
        });
      }, []);
    }
  }, [activeSheetName, currentTemplate, spreadSheetWidget, templateConfigs]);

  return (
    <div className={classNames(className, styles.MainPage)}>
      <SpreadSheetWidget className={styles.Sheet} />
    </div>
  );
};
