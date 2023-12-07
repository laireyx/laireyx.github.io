import { style } from '@vanilla-extract/css';

import { fullFlex } from '@styles/fullFlex.css';
import { glassStyle } from '@styles/glassmorph.css';
import { sprinkles } from '@styles/sprinkles.css';

import { vars } from '@themes/index.css';

export const bodyStyle = style([
  fullFlex,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',

    padding: vars.space.medium,
  },
  glassStyle,
  sprinkles({
    margin: 'large',
    padding: {
      mobile: 'medium',
      desktop: 'medium',
    },
  }),
]);
