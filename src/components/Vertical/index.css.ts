import { style } from '@vanilla-extract/css';

import { fullFlex } from '@styles/fullFlex.css';

import { vars } from '@themes/index.css';

export const verticalStyle = style([
  fullFlex,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: vars.space.medium,
  },
]);

export const scrollableVerticalStyle = style([
  verticalStyle,
  {
    overflowY: 'auto',

    '::-webkit-scrollbar': {
      width: vars.space.medium,
    },
    '::-webkit-scrollbar-track': {
      borderRadius: vars.borderRadius.small,
      background: 'transparent',
      border: vars.border.transparent,
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: vars.borderRadius.small,
      background: vars.color.white,
    },
  },
]);
