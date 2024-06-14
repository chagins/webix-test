import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { ISpreadSheetProps } from '../lib';

export const SpreadSheet = forwardRef<webix.ui.spreadsheet, ISpreadSheetProps>(
  (props: ISpreadSheetProps, ref) => {
    const { data, className } = props;
    const sheets = useRef<null | webix.ui.spreadsheet>(null);
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
      webix.ready(() => {
        if (!sheets.current) {
          sheets.current = webix.ui<webix.ui.spreadsheet>({
            id: 'spreadsheet1',
            view: 'spreadsheet',
            toolbar: 'full',
            container: container.current,
            data,
          });
        }
      });

      return () => {
        if (sheets.current) {
          sheets.current.destructor();
          sheets.current = null;
        }
      };
    }, [data]);

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

    useImperativeHandle(ref, () => sheets.current!, []);

    return <div ref={container} className={className} />;
  }
);

SpreadSheet.displayName = 'SpreadSheet';
