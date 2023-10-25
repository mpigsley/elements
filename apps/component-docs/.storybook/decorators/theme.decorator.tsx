import { Control, Theme, ThemeProvider, themes } from '@mpigsley/components';
import type { DecoratorFunction, Renderer } from '@storybook/types';
import { DecoratorHelpers } from '@storybook/addon-themes';
import { useMemo } from '@storybook/preview-api';
import React from 'react';

const { initializeThemeState, pluckThemeFromContext, useThemeParameters } =
  DecoratorHelpers;

export interface ProviderStrategyConfiguration {
  defaultTheme?: string;
}

export const withTheme = <TRenderer extends Renderer = Renderer>({
  defaultTheme,
}: ProviderStrategyConfiguration): DecoratorFunction<TRenderer> => {
  const themeNames = Object.keys(themes)
    .map((name) => [`${name} - light`, `${name} - dark`])
    .flat();
  const initialTheme = defaultTheme || themeNames[0];

  initializeThemeState(themeNames, initialTheme);

  return (storyFn, context) => {
    const { themeOverride } = useThemeParameters();
    const selected = pluckThemeFromContext(context);

    console.log(context.parameters);

    const [theme, control] = useMemo(() => {
      const selectedThemeName = themeOverride || selected || initialTheme;
      const [themeName, mode] = selectedThemeName.split(' - ');
      const pairs = Object.entries(themes);

      const theme: Theme = pairs.length === 1 ? pairs[0][1] : themes[themeName];
      const control: Control = { isDarkMode: mode.toLowerCase() === 'dark' };

      return [theme, control];
    }, [themes, selected, themeOverride]);

    const bodyEl = storyFn() as React.ReactNode;
    return (
      <ThemeProvider theme={theme} control={control}>
        {bodyEl}
      </ThemeProvider>
    );
  };
};
