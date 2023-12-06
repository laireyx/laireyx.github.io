import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

export const boxStyle = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',

    padding: vars.space.medium,
  },
  {
    border: vars.border.transparent,
    borderRadius: vars.borderRadius.medium,

    background: 'rgba(192, 192, 192, 0.2)',
    backdropFilter: 'blur(4px)',
  },
]);
