import {
  Cell,
  SpreadSheetDatatype,
  SpreadSheetWidgetSheet,
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
  dimensions: Dimension[];
}

export type DimensionId = string;
export interface Dimension {
  id: DimensionId;
  values: string[];
  cell: Cell;
}
