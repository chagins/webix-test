import { useContext } from 'react';
import { SpreadSheetWidgetContext } from '../model';

export const useSpreadSheetWidget = () => {
  const context = useContext(SpreadSheetWidgetContext);

  if (!context) {
    throw new Error('useSpreadSheet must be used within a SpreadSheetProvider');
  }

  return context;
};
