import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

const commonIconStyle = style({
  verticalAlign: 'middle',
});

export const iconStyle = {
  small: style([
    commonIconStyle,
    {
      width: vars.icon.small,
      height: vars.icon.small,
    },
  ]),
  medium: style([
    commonIconStyle,
    {
      width: vars.icon.medium,
      height: vars.icon.medium,
    },
  ]),
  large: style([
    commonIconStyle,
    {
      width: vars.icon.large,
      height: vars.icon.large,
    },
  ]),
};
