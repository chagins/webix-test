import { createContext } from 'react';
import { ThemeConfig } from 'antd';
import { ThemeContextProps } from './types';

export const defaultThemeData: ThemeConfig = {
  components: {
    Typography: {
      colorTextHeading: '#ffffff',
      titleMarginBottom: 0,
    },
    Button: {
      colorTextDisabled: '#aaaaaa',
    },
  },
};

export const ThemeContext = createContext<ThemeContextProps>({});
