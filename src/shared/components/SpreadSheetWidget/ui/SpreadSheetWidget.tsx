import { useEffect, useRef, memo, useCallback } from 'react';
import {
  SpreadSheetWidgetProps,
  SpreadSheetWidgetConfig,
  ChangeModes,
  Cell,
  SpreadSheetWidgetSheet,
  SpreadSheetSerializeConfig,
  SpreadSheetWidgetRange,
  defaultRangeStyleProps,
  dataAreaRangeStyleProps,
  addStyle,
} from '../lib';

import './SpreadSheetWidget.scss';
import { useSpreadSheetWidgetStore } from '../hooks';

export const SpreadSheetWidget = memo(
  (props: SpreadSheetWidgetProps) => {
    const { className } = props;

    console.log('SpreadSheetWidget');

    const updateWidgetInstance = useSpreadSheetWidgetStore.use.updateWidgetInstance();
    const updateImportData = useSpreadSheetWidgetStore.use.updateImportData();
    const updateData = useSpreadSheetWidgetStore.use.updateData();
    const updateSelectedCells = useSpreadSheetWidgetStore.use.updateSelectedCells();
    const updateActiveSheetName = useSpreadSheetWidgetStore.use.updateActiveSheetName();
    const updateLastRangeSet = useSpreadSheetWidgetStore.use.updateLastRangeSet();
    const updateRangeStyle = useSpreadSheetWidgetStore.use.updateRangeStyle();

    const containerRef = useRef<HTMLDivElement>(null);
    const spreadSheetRef = useRef<null | webix.ui.spreadsheet>(null);

    const initSpreadSheet = useCallback(() => {
      webix.ready(() => {
        if (containerRef.current && !spreadSheetRef.current) {
          try {
            const container = containerRef.current;
            const view = 'spreadsheet';
            const config: SpreadSheetWidgetConfig = {
              toolbar: 'full',
            };

            spreadSheetRef.current = webix.ui<webix.ui.spreadsheet>({
              ...config,
              view,
              container,
              on: {
                onAfterLoad: () => {
                  const data =
                    spreadSheetRef.current?.serialize(SpreadSheetSerializeConfig) || null;
                  // updateImportData(data as SpreadSheetWidgetSheet[] | null);
                  updateData(data as SpreadSheetWidgetSheet[] | null);

                  if (spreadSheetRef.current) {
                    const defaultRangeStyle = addStyle(
                      spreadSheetRef.current,
                      defaultRangeStyleProps
                    );
                    const dataAreaRangeStyle = addStyle(
                      spreadSheetRef.current,
                      dataAreaRangeStyleProps
                    );
                    updateRangeStyle(defaultRangeStyle, dataAreaRangeStyle);
                  }

                  console.log('onAfterLoad', { data });
                },
                onChange: (mode: ChangeModes, name: string, oldName: string) => {
                  const data = spreadSheetRef.current?.serialize(SpreadSheetSerializeConfig);
                  updateData(data as SpreadSheetWidgetSheet[] | null);
                  console.log('onChange', { mode, name, data });
                },
                onAfterSelect: (cells: Cell[]) => {
                  updateSelectedCells(cells);
                  console.log('onAfterSelect', { cells });
                },
                onAfterSheetShow: (sheetName: string) => {
                  updateActiveSheetName(sheetName);
                  console.log('onAfterSheetShow', { sheetName });
                },
                onDataParse: (sheet: unknown) => {
                  console.log('onDataParse', sheet);
                },
                onAfterRangeSet: (...range: SpreadSheetWidgetRange) => {
                  updateLastRangeSet(range);
                  console.log('onAfterRangeSet', range);
                },
              },
            });
            updateWidgetInstance(spreadSheetRef.current);
          } catch (error) {
            console.error('Failed to initialize spreadsheet', error);
          }
        }
      });
    }, [
      updateWidgetInstance,
      updateRangeStyle,
      updateData,
      updateSelectedCells,
      updateActiveSheetName,
      updateLastRangeSet,
    ]);

    useEffect(() => {
      initSpreadSheet();

      return () => {
        if (spreadSheetRef.current) {
          spreadSheetRef.current.destructor();
          spreadSheetRef.current = null;
        }
      };
    }, [initSpreadSheet]);

    useEffect(() => {
      const resizeObserver = new ResizeObserver(() => {
        setTimeout(() => {
          if (spreadSheetRef.current && containerRef.current) {
            spreadSheetRef.current.adjust();
          }
        }, 0);
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    return <div ref={containerRef} className={className} />;
  } /* shallowCompareConfig */
);

SpreadSheetWidget.displayName = 'SpreadSheet';
