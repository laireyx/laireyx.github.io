import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

export const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: vars.space.medium,
});

export const scrollablePageStyle = style([
  pageStyle,
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
