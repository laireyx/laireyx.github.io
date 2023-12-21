import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

export const navigationWrapperStyle = style({
  outline: 'none',
});

export const navigationIconStyle = style({
  verticalAlign: 'middle',

  transition: '0.5s',
  ':hover': {
    filter: 'brightness(0) drop-shadow(0 0 6px #000c)',
  },

  width: vars.icon.small,
  height: vars.icon.small,
});

export const activeNavigationIconStyle = style([
  navigationIconStyle,
  {
    filter: 'brightness(0)',
  },
]);
