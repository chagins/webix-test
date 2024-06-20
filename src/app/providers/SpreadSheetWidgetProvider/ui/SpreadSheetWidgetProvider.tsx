import { FC, useCallback, useMemo, useState } from 'react';
import {
  SpreadSheetWidgetContext,
  SpreadSheetWidgetContextType,
  SpreadSheetWidgetData,
  SpreadSheetDatatype,
} from 'shared/components/SpreadSheetWidget';
import { SpreadSheetProviderProps } from '../lib';

export const SpreadSheetWidgetProvider: FC<SpreadSheetProviderProps> = ({ children }) => {
  const [instance, setInstance] = useState<webix.ui.spreadsheet | null>(null);
  const [data, setData] = useState<SpreadSheetWidgetData | null>(null);

  const importExcelFile = useCallback(
    (path: string) => {
      if (!instance || !path) {
        return;
      }

      const url = `binary->${path}`;
      const dataType = SpreadSheetDatatype.EXCEL;

      instance.load(url, dataType);
    },
    [instance]
  );

  const defaultProps = useMemo<SpreadSheetWidgetContextType>(
    () => ({
      instance,
      setInstance,
      data,
      setData,
      importExcelFile,
    }),
    [data, importExcelFile, instance]
  );

  return (
    <SpreadSheetWidgetContext.Provider value={defaultProps}>
      {children}
    </SpreadSheetWidgetContext.Provider>
  );
};
