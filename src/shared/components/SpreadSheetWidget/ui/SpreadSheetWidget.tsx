import { useEffect, useRef, memo, useCallback } from 'react';
import { SpreadSheetWidgetProps, SpreadSheetWidgetConfig, shallowCompareConfig } from '../lib';
import { useSpreadSheetWidget } from '../hooks/useSpreadSheetWidget';

import './SpreadSheetWidget.scss';

export const SpreadSheetWidget = memo((props: SpreadSheetWidgetProps) => {
  const { className, config } = props;

  const { setInstance } = useSpreadSheetWidget();
  const containerRef = useRef<HTMLDivElement>(null);
  const spreadSheetRef = useRef<null | webix.ui.spreadsheet>(null);

  const initSpreadSheet = useCallback(
    (initialConfig?: SpreadSheetWidgetConfig) => {
      webix.ready(() => {
        if (containerRef.current && !spreadSheetRef.current) {
          try {
            const container = initialConfig?.container || containerRef.current;
            const view = 'spreadsheet';

            spreadSheetRef.current = webix.ui<webix.ui.spreadsheet>({
              ...initialConfig,
              view,
              container,
            });
            setInstance(spreadSheetRef.current);
          } catch (error) {
            console.error('Failed to initialize spreadsheet', error);
          }
        }
      });
    },
    [setInstance]
  );

  useEffect(() => {
    initSpreadSheet(config);

    return () => {
      if (spreadSheetRef.current) {
        spreadSheetRef.current.destructor();
        spreadSheetRef.current = null;
      }
    };
  }, [config, initSpreadSheet]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (spreadSheetRef.current && containerRef.current) {
        spreadSheetRef.current.adjust();
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={containerRef} className={className} />;
}, shallowCompareConfig);

SpreadSheetWidget.displayName = 'SpreadSheet';
