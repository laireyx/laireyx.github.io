import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  icon: {
    small: '48px',
    medium: '96px',
    large: '192px',
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
    white: '#fffc',
  },

  border: {
    none: 'none',
    transparent: '1px solid transparent',
  },

  borderRadius: {
    none: '0px',
    small: '8px',
    medium: '12px',
    large: '16px',
  },
});
