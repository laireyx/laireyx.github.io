import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

export const glassStyle = style({
  border: vars.border.transparent,
  borderRadius: vars.borderRadius.medium,

  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(4px)',
  boxShadow: '0 8px 12px rgba(128, 128, 128, 0.4)',
});
