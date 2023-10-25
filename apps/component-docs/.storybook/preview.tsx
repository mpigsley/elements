import '@mpigsley/components/dist/index.css';

import { withTheme } from './decorators/theme.decorator';

export const decorators = [withTheme({ defaultTheme: 'mono - light' })];

export default {
  parameters: {
    backgrounds: {
      values: [{ name: 'match theme', value: 'var(--pageColor)' }],
    },
  },
};
