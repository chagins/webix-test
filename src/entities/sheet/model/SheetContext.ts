import { createContext } from 'react';
import { SheetContextType } from '../lib';

export const SheetContext = createContext<SheetContextType | undefined>(undefined);
