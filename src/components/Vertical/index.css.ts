import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

export const verticalStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: vars.space.medium,
});

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
