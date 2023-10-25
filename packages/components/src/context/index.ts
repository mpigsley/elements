import { mono } from './themes/mono';

export const themes = { mono };

export {
  default as ThemeProvider,
  type ThemeProviderProps,
} from './theme.provider';
export {
  type Control,
  type Theme,
  ThemeContext,
  type ThemeState,
} from './theme.context';
