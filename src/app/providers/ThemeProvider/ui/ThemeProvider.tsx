import React, { useMemo, useState } from 'react';
import { ConfigProvider, ThemeConfig } from 'antd';
import { ThemeContext, defaultThemeData } from '../lib';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(defaultThemeData);

  const defaultProps = useMemo(
    () => ({
      themeConfig,
      setThemeConfig,
    }),
    [themeConfig]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      <ConfigProvider theme={{ ...themeConfig }}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
