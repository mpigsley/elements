import React from 'react';

import { mono } from './themes/mono';

export type Theme = {
  spacingDoublingFactor?: string | number;
  spacingDoublingOffset?: string | number;
  colorPalette?: { [colorKey: string]: string | string[] };
  globalSettings?: {
    /* Border */
    borderRadius?: string | number;
    borderWidth?: string | number;
    borderStyle?:
      | 'solid'
      | 'dashed'
      | 'dotted'
      | 'double'
      | 'groove'
      | 'ridge'
      | 'inset'
      | 'outset';

    /* Colors */
    pageColor?: string | [string, string];
    backgroundColor?: string | [string, string];
    borderColor?: string | [string, string];
    textColor?: string | [string, string];
    primaryColor?: string | [string, string];
  };
};

export type Control = {
  isDarkMode?: boolean;
};

export type ThemeState = {
  control?: Control;
  theme?: Theme;
};

export const ThemeContext = React.createContext<ThemeState>({
  control: { isDarkMode: false },
  theme: mono,
});
