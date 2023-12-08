import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

export const avatarStyle = style({
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
});

export const avatarImgStyle = style({
  width: vars.icon.medium,
  height: vars.icon.medium,
  clipPath: 'circle()',
});
