import * as React from 'react';

import { ThemeType } from './type';
import { ThemeContext } from './theme.context';
import { defaultTheme } from '../style';
import deepmerge from 'deepmerge';

export interface ThemeProviderProps {
  theme?: ThemeType;
}

export const ThemeProvider = (
  props: React.PropsWithChildren<ThemeProviderProps>
) => {
  const { theme: themeProp = {}, children } = props;

  const [themeState, setThemeState] = React.useState(
    deepmerge(defaultTheme, themeProp)
  );

  const setTheme = (newTheme: ThemeType) => {
    const mergedTheme = deepmerge(defaultTheme, newTheme);
    setThemeState(mergedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
