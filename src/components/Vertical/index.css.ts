import { style } from '@vanilla-extract/css';

export const verticalStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const scrollableVerticalStyle = style([
  verticalStyle,
  {
    overflowY: 'auto',
  },
]);
