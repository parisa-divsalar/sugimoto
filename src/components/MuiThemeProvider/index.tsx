import * as React from 'react';
import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { getDesignTokens } from '@/config/theme.ts';
import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const _theme = useSelector(themeSelector);
  const theme = useMemo(() => createTheme(getDesignTokens(_theme)), [_theme]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
