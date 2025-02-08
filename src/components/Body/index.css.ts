import { style } from '@vanilla-extract/css';

import { containerStyle } from '@styles/container.css';
import { fullFlex } from '@styles/fullFlex.css';
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
  containerStyle,
  sprinkles({
    padding: {
      mobile: 'medium',
      desktop: 'medium',
    },
  }),
  {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
]);
