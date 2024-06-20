import React from 'react';

export interface SpreadSheetWidgetProps {
  className?: string;
  config?: SpreadSheetWidgetConfig;
}

export interface SpreadSheetWidgetContextType {
  instance: webix.ui.spreadsheet | null;
  setInstance: React.Dispatch<React.SetStateAction<webix.ui.spreadsheet | null>>;
  data: SpreadSheetWidgetData | null;
  setData: React.Dispatch<React.SetStateAction<SpreadSheetWidgetData | null>>;
  importExcelFile: (path: string) => void;
}

export interface SpreadSheetWidgetConfig extends Omit<webix.ui.spreadsheetConfig, 'view'> {
  toolbar?: 'full' | 'default';
}

// TODO: дописать типы https://docs.webix.com/spreadsheet__loading_data.html
export interface SpreadSheetWidgetData {
  data: SpreadSheetWidgetCellData;
  styles: SpreadSheetWidgetStyleData;
  sizes: SpreadSheetWidgetSizeData;
  spans: SpreadSheetWidgetSpanData;
  conditions: SpreadSheetWidgetConditionsData;
  formats: unknown;
  table: unknown;
  ranges: unknown;
  locked: unknown;
  editors: unknown;
  filters: unknown;
  comments: unknown;
  views: unknown;
}

/** SpreadSheetWidget data types */

export type SpreadSheetWidgetCellData = Array<SpreadSheetWidgetCell>;
export type SpreadSheetWidgetCell = [
  CellRowNumber,
  CellColNumber,
  CellContent,
  CellCssClass?,
  CellDataType?,
];
type CellRowNumber = number;
type CellColNumber = number;
type CellContent = string;
type CellCssClass = string;
type CellDataType = 'date' | 'number' | 'string';

/** SpreadSheetWidget styles types */

export type SpreadSheetWidgetStyleData = Array<SpreadSheetWidgetStyle>;
export type SpreadSheetWidgetStyle = [SpreadSheetWidgetStyleName, SpreadSheetWidgetStyleString];
type SpreadSheetWidgetStyleName = string;
/**
 * The styles in a string are listed in the following order:
 *  color; background; text-align; font-family; font-size; font-style; underline;
 *  font-weight; vertical-align; wrap; borders; format; border-right; border-bottom;
 *  border-left; border-top; strike; indent.
 *
 *  example: ";#6E6EFF;center;;;;;;;;;"
 *
 */
type SpreadSheetWidgetStyleString = string;

/** SpreadSheetWidget sizes types */

export type SpreadSheetWidgetSizeData = Array<SpreadSheetWidgetSize>;
export type SpreadSheetWidgetSize =
  | [SizeRowNumber, 0, SizeRowHeight]
  | [0, SizeColNumber, SizeColWidth];
type SizeRowNumber = number;
type SizeColNumber = number;
type SizeColWidth = number;
type SizeRowHeight = number;

/** SpreadSheetWidget span types */

export type SpreadSheetWidgetSpanData = Array<SpreadSheetWidgetSpan>;
export type SpreadSheetWidgetSpan = [
  SpanStartRowNumber,
  SpanStartColNumber,
  SpanColsCount,
  SpanRowsCount,
];
type SpanStartRowNumber = number;
type SpanStartColNumber = number;
type SpanColsCount = number;
type SpanRowsCount = number;

/** SpreadSheetWidget conditions types */

export type SpreadSheetWidgetConditionsData = Array<SpreadSheetWidgetCondition>;
export type SpreadSheetWidgetCondition = [
  ConditionRowId,
  ConditionColId,
  ConditionRule,
  ConditionCompareValue,
  ConditionSatisfiedCssClass,
];
type ConditionRowId = number;
type ConditionColId = number;
type ConditionRule =
  | 'greater'
  | 'less'
  | 'greaterOrEqual'
  | 'lessOrEqual'
  | 'equal'
  | 'notEqual'
  | 'between'
  | 'notBetween'
  | 'contains'
  | 'notContains'
  | 'beginsWith'
  | 'notBeginsWith'
  | 'endsWith'
  | 'notEndsWith';
type ConditionCompareValue = number;
type ConditionSatisfiedCssClass = string;
