import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';

import { vars } from '@themes/index.css';

export const bottomNavigationStyle = style([
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  {
    border: vars.border.transparent,
    background: 'rgba(255, 255, 255, 0.2)',
    transition: '0.5s',

    ':hover': {
      background: 'rgba(255, 255, 255, 0.4)',
    },
  },
  sprinkles({
    borderRadius: {
      mobile: 'none',
      desktop: 'large',
    },
    margin: {
      mobile: 'none',
      desktop: 'large',
    },
    padding: {
      mobile: 'medium',
      desktop: 'large',
    },
  }),
]);
