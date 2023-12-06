import { style } from '@vanilla-extract/css';

import { boxStyle } from '@components/Box/index.css';

import { fullFlex } from '@styles/fullFlex.css';
import { sprinkles } from '@styles/sprinkles.css';

export const bodyStyle = style([
  fullFlex,
  boxStyle,
  sprinkles({
    margin: 'large',
    padding: {
      mobile: 'medium',
      desktop: 'medium',
    },
  }),
]);
