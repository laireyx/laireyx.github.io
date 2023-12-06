import { style } from '@vanilla-extract/css';

import { vars } from '@themes/index.css';

import spotifyIcon from '@assets/spotify.png';

export const spotifyPlaylistWrapperStyle = style({
  width: '563px',
  height: '352px',

  background: `url(${spotifyIcon}) no-repeat`,
  backgroundColor: 'black',
  backgroundSize: vars.icon.medium,
  backgroundPosition: 'center',

  borderRadius: vars.borderRadius.medium,

  position: 'relative',

  '@media': {
    'screen and (max-width: 480px)': {
      width: '304px',
      height: '152px',
    },
  },
});

export const spotifyPlaylistStyle = style({
  border: vars.border.none,

  width: '100%',
  height: '100%',

  position: 'absolute',
  top: 0,
  left: 0,
});

export const spotifyPlaylistLoadingStyle = style([
  spotifyPlaylistStyle,
  {
    visibility: 'hidden',
  },
]);
