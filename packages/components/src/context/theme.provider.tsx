import React, { CSSProperties, useEffect } from 'react';

import { Control, Theme, ThemeContext, ThemeState } from './theme.context';
import { mono } from './themes/mono';
import '../assets/reset.css';

export interface ThemeProviderProps extends ThemeState {
  children: React.ReactNode;
}

export default function ThemeProvider({
  children,
  control = { isDarkMode: false },
  theme = mono,
}: ThemeProviderProps) {
  useEffect(() => {
    Object.entries(buildThemeVariables(theme, control)).forEach(
      ([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      },
    );
  }, [theme, control]);

  return (
    <ThemeContext.Provider value={{ control, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const buildThemeVariables = (
  theme?: Theme,
  control?: Control,
): CSSProperties => {
  let themeVariables: CSSProperties = {};

  if (theme?.colorPalette) {
    themeVariables = Object.entries(theme.colorPalette).reduce(
      (acc, [key, value]) => {
        if (typeof value === 'string') {
          return { ...acc, [`--#${key}`]: value };
        }
        return {
          ...acc,
          ...value.reduce(
            (acc, value, i) => ({
              ...acc,
              [`--${key}${i + 1}`]: value,
            }),
            {} as CSSProperties,
          ),
        };
      },
      themeVariables,
    );
  }

  if (theme?.spacingDoublingFactor) {
    let num: number = 0.25;
    let unit: string = 'rem';
    if (typeof theme.spacingDoublingFactor === 'number') {
      num = theme.spacingDoublingFactor;
      unit = 'px';
    } else if (typeof theme.spacingDoublingFactor === 'string') {
      try {
        const [, n, u] =
          theme.spacingDoublingFactor.split(/([\d.]+)([a-zA-Z]+)/);
        num = Number.parseFloat(n);
        unit = u;
      } catch (e) {
        console.error(
          `Error generating theme spacing variables... using defaults. ${e}`,
        );
      }
    }

    themeVariables = Array.from<CSSProperties>({ length: 6 }).reduce(
      (acc, _, i) => ({
        ...acc,
        [`--s${i + 1}`]: `${num * Math.pow(2, i)}${unit}`,
      }),
      themeVariables,
    );
  }

  if (theme?.globalSettings) {
    const variableKeys = Object.keys(themeVariables);
    Object.entries(theme.globalSettings).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value = control?.isDarkMode ? value[1] : value[0];
      }

      let formattedValue = value;
      if (typeof value === 'number') {
        formattedValue = `${value}px`;
      } else if (variableKeys.includes(`--${value}`)) {
        formattedValue = `var(--${value})`;
      }
      themeVariables = { ...themeVariables, [`--${key}`]: formattedValue };
    });
  }

  return themeVariables;
};
