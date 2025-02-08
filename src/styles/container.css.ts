import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

export const containerStyle = style({
  border: vars.border.transparent,
  borderRadius: vars.borderRadius.medium,

  background: 'rgba(255, 255, 255, 0.2)',
});
