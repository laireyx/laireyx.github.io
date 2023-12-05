import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  image: {
    small: '64px',
    medium: '128px',
    large: '256px',
  },

  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    auto: 'auto',
  },

  color: {
    container: '#444',
    box: '#22222270',
  },

  border: {
    transparent: '1px solid transparent',
  },

  borderRadius: {
    medium: '8px',
    large: '16px',
  },
});
