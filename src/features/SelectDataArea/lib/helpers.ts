import { Dimension } from 'entities/sheet';
import { Cell, WebixRangeObj, parseRange } from 'shared/components/SpreadSheetWidget';

export const getNamedRangeByCells = (
  cells: Cell[],
  ranges: WebixRangeObj[],
  rangeName: string
): WebixRangeObj | null => {
  return (
    ranges.find((range) => {
      if (range.name !== rangeName) {
        return false;
      }
      const rangeCells = parseRange(range.range);
      return cells.some((cell) =>
        rangeCells.some(
          (rangeCell) => rangeCell.row === cell.row && rangeCell.column === cell.column
        )
      );
    }) || null
  );
};

export const checkIsCellInRange = (
  cells: Cell[],
  ranges: WebixRangeObj[],
  rangeName: string
): boolean => {
  return !!getNamedRangeByCells(cells, ranges, rangeName);
};

export const findDimensionsForDataArea = (cells: Cell[], dimensions: Dimension[]): Dimension[] => {
  if (cells.length === 0) {
    return [];
  }

  const minRow = Math.min(...cells.map((cell) => cell.row));
  const minCol = Math.min(...cells.map((cell) => cell.column));

  const isDimensionForArea = (dimension: Dimension) => {
    const { row, column } = dimension.cell;
    return row < minRow || column < minCol;
  };

  return dimensions.filter(isDimensionForArea);
};
