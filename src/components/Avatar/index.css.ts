import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

export const avatarStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const avatarImgStyle = style({
  width: vars.image.medium,
  height: vars.image.medium,
  clipPath: 'circle()',
});
