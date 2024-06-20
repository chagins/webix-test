import { createContext } from 'react';
import { SpreadSheetWidgetContextType } from '../lib';

export const SpreadSheetWidgetContext = createContext<SpreadSheetWidgetContextType | undefined>(
  undefined
);
