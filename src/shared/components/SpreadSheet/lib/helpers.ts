import { SpreadSheetDatatype } from './constants';
import { SpreadSheetFileInfo, SpreadSheetPreparedFileInfo } from './types';

export const prepareImportFileInfo = ({
  path,
  datatype,
}: SpreadSheetFileInfo): SpreadSheetPreparedFileInfo => {
  const result: SpreadSheetPreparedFileInfo = {
    url: undefined,
    datatype: undefined,
  };

  if (datatype === SpreadSheetDatatype.EXCEL) {
    result.url = `binary->${path}`;
    result.datatype = datatype;
  }

  return result;
};
