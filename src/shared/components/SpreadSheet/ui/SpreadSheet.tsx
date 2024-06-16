import { useEffect, useRef, memo } from 'react';
import { ISpreadSheetProps, prepareImportFileInfo } from '../lib';

import './SpreadSheet.scss';

export const SpreadSheet = memo((props: ISpreadSheetProps) => {
  const { data, className, onInit, importFileInfo } = props;
  const sheets = useRef<null | webix.ui.spreadsheet>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    webix.ready(() => {
      const fileInfo = importFileInfo && prepareImportFileInfo(importFileInfo);

      if (!sheets.current) {
        sheets.current = webix.ui<webix.ui.spreadsheet>({
          id: 'spreadsheet1',
          view: 'spreadsheet',
          toolbar: 'full',
          container: container.current,
          data,
          ...fileInfo,
          math: true,
          spans: true,
        });

        if (onInit) {
          onInit(sheets.current);
        }
      }
    });

    return () => {
      if (sheets.current) {
        sheets.current.destructor();
        sheets.current = null;
      }
    };
  }, [data, importFileInfo, onInit]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (sheets.current) {
        sheets.current.adjust();
      }
    });

    if (container.current) {
      resizeObserver.observe(container.current);
    }

    return () => {
      if (sheets.current) {
        sheets.current.destructor();
        sheets.current = null;
      }
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={container} className={className} />;
});

SpreadSheet.displayName = 'SpreadSheet';
