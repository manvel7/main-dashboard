import { createTheme } from '@mui/material';
import { lightColors, darkColors } from './colors';

// Extend the Material-UI theme to include custom general colorse
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      background: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
      shadow: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      border: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      gradient: {
        primary: string;
        secondary: string;
        accent: string;
      };
    };
  }
  interface PaletteOptions {
    custom?: {
      background: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
      shadow: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      border: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      gradient: {
        primary: string;
        secondary: string;
        accent: string;
      };
    };
  }
}

// Common typography configuration
const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2.5rem',
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
};

// Common shape configuration
const shape = {
  borderRadius: 8,
};

// Create light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: lightColors.primary,
    secondary: lightColors.secondary,
    background: lightColors.background,
    text: lightColors.text,
    custom: lightColors.custom,
  },
  typography,
  spacing: 8,
  shape,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid #e0e0e0',
        },
      },
    },
  },
});

// Create dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: darkColors.primary,
    secondary: darkColors.secondary,
    background: darkColors.background,
    text: darkColors.text,
    custom: darkColors.custom,
  },
  typography,
  spacing: 8,
  shape,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid rgba(255, 255, 255, 0.12)',
        },
      },
    },
  },
});
