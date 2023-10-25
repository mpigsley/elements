import { Theme } from '../theme.context';

export const mono: Theme = {
  spacingDoublingFactor: '0.25rem',
  colorPalette: {
    mono: [
      '#ffffff',
      '#e5e4e3',
      '#c9c8c6',
      '#adabaa',
      '#908f8e',
      '#747371',
      '#585655',
      '#3b3a39',
      '#1f1e1c',
      '#030100',
    ],
  },
  globalSettings: {
    /* Border */
    borderWidth: 1,
    borderStyle: 'solid',

    /* Colors */
    pageColor: ['mono1', 'mono10'],
    backgroundColor: ['mono1', 'mono10'],
    borderColor: ['mono10', 'mono1'],
    textColor: ['mono10', 'mono1'],
    primaryColor: ['mono10', 'mono1'],
  },
};
