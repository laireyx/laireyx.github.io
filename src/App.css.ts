import { style } from '@vanilla-extract/css';

import { fullFlex } from '@styles/fullFlex.css';
import { sprinkles } from '@styles/sprinkles.css';

import { themeClass } from '@themes/index.css';

export const appStyle = style([
  themeClass,
  fullFlex,
  {
    display: 'flex',
    flexDirection: 'column',
  },
  {
    height: '100dvh',
  },
]);

export const appInnerStyle = style([
  fullFlex,
  {
    display: 'flex',
    flexDirection: 'column',
  },
  sprinkles({
    margin: 'medium',
  }),
]);
