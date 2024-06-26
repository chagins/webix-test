import {
  Cell,
  RangeCode,
  RangeCodeWithSheetName,
  SpreadSheetDatatype,
  SpreadSheetWidgetSheet,
  SpreadSheetContentData,
  SpreadSheetWidgetCell,
} from 'shared/components/SpreadSheetWidget';

/** Templates types */

export type TemplateId = string;
export type Templates = Record<TemplateId, Template>;

export interface Template {
  id: TemplateId;
  name: string;
  path: string;
  datatype: SpreadSheetDatatype.EXCEL;
}

/** Template data types */

export type TemplateData = Record<TemplateId, TemplateSheets>;

export type SheetName = string;
export type TemplateSheets = Record<SheetName, SpreadSheetWidgetSheet>;

/** Template config types */

export type TemplateConfigs = Record<TemplateId, TemplateSheetConfigs>;
export type TemplateSheetConfigs = Record<SheetName, TemplateSheetConfig>;
export interface TemplateSheetConfig {
  dimensions?: Dimension[];
  dataAreas?: DataArea[];
}

export type DimensionId = string;
export interface Dimension {
  id: DimensionId;
  values: string[];
  cell: Cell;
}

export interface DataArea {
  name: string;
  rangeCodeWithSheetName: RangeCodeWithSheetName;
  rangeCode: RangeCode;
  cells: Cell[];
  dimensions: Dimension[];
}

/** Template separate data types */

export type TemplateSeparateData = Record<TemplateId, TemplateSeparateDataSheets>;
export type TemplateSeparateDataSheets = Record<SheetName, SheetContentData>;
export type SheetContentData = Pick<SpreadSheetContentData, 'data'>;
