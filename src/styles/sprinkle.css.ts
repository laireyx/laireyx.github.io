import { defineProperties } from '@vanilla-extract/sprinkles';
import { createSprinkles } from '@vanilla-extract/sprinkles/createRuntimeSprinkles';

import { vars } from '@themes/index.css';

const responsiveProperties = defineProperties({
  conditions: {
    desktop: {},
    mobile: { '@media': 'screen and (max-width: 480px)' },
  },
  defaultCondition: 'desktop',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,

    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,

    gap: vars.space,

    border: vars.border,
    borderRadius: vars.borderRadius,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],

    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],

    placeItems: ['justifyContent', 'alignItems'],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
