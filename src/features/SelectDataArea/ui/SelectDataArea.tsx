import { Checkbox, Space, Typography, Drawer } from 'antd';
import type { CheckboxProps } from 'antd';
import { useSheetStore } from 'entities/sheet';
import React, { useEffect, useState } from 'react';
import {
  RangeCode,
  WebixRangeObj,
  parseRange,
  useSpreadSheetWidgetStore,
} from 'shared/components/SpreadSheetWidget';
import {
  SelectDataAreaProps,
  checkIsCellInRange,
  findDimensionsForDataArea,
  getNamedRangeByCells,
} from '../lib';

import * as styles from './SelectDataArea.module.scss';

const { Title } = Typography;

export const SelectDataArea = (props: SelectDataAreaProps) => {
  const { className, rangeName } = props;

  const spreadSheetWidget = useSpreadSheetWidgetStore.use.widgetInstance();
  const selectedCells = useSpreadSheetWidgetStore.use.selectedCells();
  const activeSheetName = useSpreadSheetWidgetStore.use.activeSheetName();
  const lastRangeSet = useSpreadSheetWidgetStore.use.lastRangeSet();
  const range = useSpreadSheetWidgetStore.use.range();

  const currentTemplate = useSheetStore.use.currentTemplate();
  const templateConfigs = useSheetStore.use.templateConfigs();
  const updateTemplateConfig = useSheetStore.use.updateTemplateDataAreaConfigs();

  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!currentTemplate || !spreadSheetWidget) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [currentTemplate, spreadSheetWidget]);

  useEffect(() => {
    if (!currentTemplate || !spreadSheetWidget || !selectedCells || !lastRangeSet) {
      return;
    }

    const allRanges = (spreadSheetWidget.ranges.getRanges() as WebixRangeObj[]) || [];
    const selectedRange = spreadSheetWidget.getSelectedRange() as RangeCode;
    const namedRange = getNamedRangeByCells(selectedCells, allRanges, rangeName);
    setChecked(!!namedRange);

    console.log('allRanges', allRanges);
    console.log('selectedRange', selectedRange);
    console.log('selectedCells', selectedCells);
  }, [currentTemplate, selectedCells, spreadSheetWidget, lastRangeSet, rangeName]);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    if (
      !spreadSheetWidget ||
      !range ||
      !selectedCells.length ||
      !activeSheetName ||
      !currentTemplate
    ) {
      return;
    }

    const isChecked = e.target.checked;
    const selectedRange = spreadSheetWidget.getSelectedRange();

    if (!selectedRange) {
      return;
    }

    if (isChecked) {
      spreadSheetWidget.ranges.add(rangeName, selectedRange, activeSheetName);
      spreadSheetWidget.setRangeStyle(selectedRange, range.dataAreaRangeStyle);
      const currentConfig = templateConfigs?.[currentTemplate.id];
      const currentSheetConfigs = currentConfig?.[activeSheetName];
      const currentDimensions = currentSheetConfigs?.dimensions || [];
      const rangeCells = parseRange(selectedRange);

      const dimensionsForDataArea = findDimensionsForDataArea(rangeCells, currentDimensions);
      updateTemplateConfig(currentTemplate.id, activeSheetName, {
        cells: rangeCells,
        dimensions: dimensionsForDataArea,
        name: rangeName,
        rangeCode: selectedRange,
        rangeCodeWithSheetName: `${activeSheetName}!${selectedRange}`,
      });

      spreadSheetWidget.refresh();
      setChecked(isChecked);
      onOpen();
    } else {
      const allRanges = (spreadSheetWidget.ranges.getRanges() as WebixRangeObj[]) || [];
      const namedRange = getNamedRangeByCells(selectedCells, allRanges, rangeName);
      if (namedRange) {
        spreadSheetWidget.setRangeStyle(namedRange.range, range.defaultRangeStyle);
        spreadSheetWidget.ranges.remove(namedRange.name, activeSheetName);
        spreadSheetWidget.refresh();
      }
      setChecked(isChecked);
      onOpen();
    }
  };

  return (
    <div className={className}>
      <Space direction="vertical" className={styles.Container}>
        <Title level={2}>DataArea</Title>
        <Checkbox onChange={onChange} checked={checked} disabled={isDisabled}>
          {rangeName}
        </Checkbox>
      </Space>
      <Drawer title="Basic Drawer" onClose={onClose} open={isOpen}>
        {templateConfigs && currentTemplate && activeSheetName
          ? templateConfigs?.[currentTemplate.id]?.[activeSheetName]?.dataAreas?.map((area) => (
              <React.Fragment key={area.name}>
                <p>
                  <b>area name</b>
                  <br />
                  {area.name}
                </p>
                <p>
                  <b>area rangeCode</b>
                  <br />
                  {area.rangeCode}
                </p>
                <p>
                  <b>area rangeCodeWithSheetName</b>
                  <br />
                  {area.rangeCodeWithSheetName}
                </p>
                <p>
                  <b>area cells</b>
                  <br />
                  {JSON.stringify(area.cells)}
                </p>
                <p>
                  <b>area dims</b>
                  <br />
                  <ul>
                    {area.dimensions?.map((dim) => (
                      <li key={`${dim.cell.row}:${dim.cell.column}`}>{JSON.stringify(dim)}</li>
                    ))}
                  </ul>
                </p>
              </React.Fragment>
            ))
          : undefined}
      </Drawer>
    </div>
  );
};
