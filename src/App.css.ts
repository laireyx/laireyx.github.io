import { style } from '@vanilla-extract/css';

import { fullFlex } from '@styles/fullFlex.css';

import { themeClass } from '@themes/index.css';

export const appStyle = style([
  themeClass,
  fullFlex,
  {
    display: 'flex',
    flexDirection: 'column',
  },
]);
