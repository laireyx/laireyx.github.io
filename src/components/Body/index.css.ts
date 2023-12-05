import { style } from '@vanilla-extract/css';

import { fullFlex } from '@styles/fullFlex.css';
import { sprinkles } from '@styles/sprinkle.css';

export const bodyStyle = style([
  fullFlex,
  sprinkles({
    padding: {
      mobile: 'medium',
      desktop: 'medium',
    },
  }),
]);
