import React from 'react';
import { SheetStates } from '../constants';

export interface SpreadSheetWidgetProps {
  className?: string;
  // onInit: (widget: webix.ui.spreadsheet) => void;
}

/** Cell types */

type CellRowNumber = number;
type CellColNumber = number;
export interface Cell {
  row: CellRowNumber;
  column: CellColNumber;
}

export type LockCellCoord = LockCell | LockCellRange;
export type LockCell = [CellRowNumber, CellColNumber, LockedState];
export type LockCellRange = [Cell, Cell, LockedState];
export type LockedState = boolean;

// -------------------------------------------------------------

export interface SpreadSheetWidgetContextType {
  instance: webix.ui.spreadsheet | null;
  setInstance: React.Dispatch<React.SetStateAction<webix.ui.spreadsheet | null>>;
  data: SpreadSheetWidgetSheet[] | null;
  setData: React.Dispatch<React.SetStateAction<SpreadSheetWidgetSheet[] | null>>;
  importExcelFile: (path: string) => void;
  selectedCells: Cell[];
  setSelectedCells: (cells: Cell[]) => void;
  activeSheetName: string | null;
  setActiveSheetName: (name: string | null) => void;
  getSpreadSheetData: () => SpreadSheetWidgetSheet[] | null;
}

export interface SpreadSheetWidgetConfig extends Omit<webix.ui.spreadsheetConfig, 'view'> {
  toolbar?: 'full' | 'default';
}

/** SpreadSheetWidget data types */

export interface SpreadSheetWidgetSheet {
  name: string;
  state: SheetStates;
  content: SpreadSheetContentData;
}

// TODO: дописать типы https://docs.webix.com/spreadsheet__loading_data.html

export interface SpreadSheetContentData {
  data: SpreadSheetWidgetCell[];
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

export type SpreadSheetWidgetCell = [
  CellRowNumber,
  CellColNumber,
  CellContent,
  CellCssClass?,
  CellDataType?,
];

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
