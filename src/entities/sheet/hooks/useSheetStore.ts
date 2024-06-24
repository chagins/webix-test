import { createSelectors } from 'shared/helpers';
import { useSheetStoreBase } from '../model';

export const useSheetStore = createSelectors(useSheetStoreBase);
