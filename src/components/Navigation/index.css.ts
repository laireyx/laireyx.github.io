import { style } from '@vanilla-extract/css';

import { containerStyle } from '@styles/container.css';
import { sprinkles } from '@styles/sprinkles.css';

export const navigationStyle = style([
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerStyle,
  {
    background: 'rgba(255, 255, 255, 0.3)',
    transition: 'background 0.5s',

    ':hover': {
      background: 'rgba(255, 255, 255, 0.4)',
    },
  },
  sprinkles({
    padding: {
      mobile: 'medium',
      desktop: 'large',
    },
  }),
  {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
]);
