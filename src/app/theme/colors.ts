// Define custom colors for light mode
export const lightColors = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#dc004e',
    light: '#ff5983',
    dark: '#9a0036',
    contrastText: '#ffffff',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
  },
  custom: {
    background: {
      100: '#ffffff', // White background
      200: 'rgba(0, 0, 0, 0.05)', // Very light gray
      300: 'transparent', // Transparent
      400: 'rgba(0, 0, 0, 0.1)', // Light gray
      500: '#f8f9fa', // Light background
    },
    shadow: {
      100: 'rgba(0, 0, 0, 0.1)', // Light shadow
      200: 'rgba(102, 126, 234, 0.2)', // Colored shadow
      300: 'rgba(0, 0, 0, 0.15)', // Medium shadow
      400: 'rgba(0, 0, 0, 0.25)', // Darker shadow
    },
    border: {
      100: 'rgba(0, 0, 0, 0.12)', // Light border
      200: 'rgba(0, 0, 0, 0.08)', // Lighter border
      300: 'rgba(0, 0, 0, 0.06)', // Very light border
      400: 'rgba(0, 0, 0, 0.2)', // Medium border
    },
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  },
};

// Define custom colors for dark mode
export const darkColors = {
  primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#42a5f5',
    contrastText: '#000000',
  },
  secondary: {
    main: '#f48fb1',
    light: '#fce4ec',
    dark: '#f06292',
    contrastText: '#000000',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b0b0b0',
  },
  custom: {
    background: {
      100: '#1a1a1a', // Dark background
      200: 'rgba(255, 255, 255, 0.05)', // Very light overlay
      300: 'transparent', // Transparent
      400: 'rgba(255, 255, 255, 0.08)', // Light overlay
      500: '#2d2d2d', // Medium dark background
    },
    shadow: {
      100: 'rgba(0, 0, 0, 0.3)', // Dark shadow
      200: 'rgba(102, 126, 234, 0.4)', // Colored shadow
      300: 'rgba(0, 0, 0, 0.5)', // Medium dark shadow
      400: 'rgba(0, 0, 0, 0.7)', // Very dark shadow
    },
    border: {
      100: 'rgba(255, 255, 255, 0.12)', // Light border
      200: 'rgba(255, 255, 255, 0.08)', // Lighter border
      300: 'rgba(255, 255, 255, 0.06)', // Very light border
      400: 'rgba(255, 255, 255, 0.2)', // Medium border
    },
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  },
};

// Material UI-like color hashes to use without importing from MUI
export const Colors = {
  red: {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  pink: {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162',
  },
  purple: {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  deepPurple: {
    50: '#ede7f6',
    100: '#d1c4e9',
    200: '#b39ddb',
    300: '#9575cd',
    400: '#7e57c2',
    500: '#673ab7',
    600: '#5e35b1',
    700: '#512da8',
    800: '#4527a0',
    900: '#311b92',
    A100: '#b388ff',
    A200: '#7c4dff',
    A400: '#651fff',
    A700: '#6200ea',
  },
  indigo: {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe',
  },
  blue: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  lightBlue: {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  cyan: {
    50: '#e0f7fa',
    100: '#b2ebf2',
    200: '#80deea',
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#00bcd4',
    600: '#00acc1',
    700: '#0097a7',
    800: '#00838f',
    900: '#006064',
    A100: '#84ffff',
    A200: '#18ffff',
    A400: '#00e5ff',
    A700: '#00b8d4',
  },
  teal: {
    50: '#e0f2f1',
    100: '#b2dfdb',
    200: '#80cbc4',
    300: '#4db6ac',
    400: '#26a69a',
    500: '#009688',
    600: '#00897b',
    700: '#00796b',
    800: '#00695c',
    900: '#004d40',
    A100: '#a7ffeb',
    A200: '#64ffda',
    A400: '#1de9b6',
    A700: '#00bfa5',
  },
  green: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  lightGreen: {
    50: '#f1f8e9',
    100: '#dcedc8',
    200: '#c5e1a5',
    300: '#aed581',
    400: '#9ccc65',
    500: '#8bc34a',
    600: '#7cb342',
    700: '#689f38',
    800: '#558b2f',
    900: '#33691e',
    A100: '#ccff90',
    A200: '#b2ff59',
    A400: '#76ff03',
    A700: '#64dd17',
  },
  lime: {
    50: '#f9fbe7',
    100: '#f0f4c3',
    200: '#e6ee9c',
    300: '#dce775',
    400: '#d4e157',
    500: '#cddc39',
    600: '#c0ca33',
    700: '#afb42b',
    800: '#9e9d24',
    900: '#827717',
    A100: '#f4ff81',
    A200: '#eeff41',
    A400: '#c6ff00',
    A700: '#aeea00',
  },
  yellow: {
    50: '#fffde7',
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    400: '#ffee58',
    500: '#ffeb3b',
    600: '#fdd835',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17',
    A100: '#ffff8d',
    A200: '#ffff00',
    A400: '#ffea00',
    A700: '#ffd600',
  },
  amber: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
    A100: '#ffe57f',
    A200: '#ffd740',
    A400: '#ffc400',
    A700: '#ffab00',
  },
  orange: {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  deepOrange: {
    50: '#fbe9e7',
    100: '#ffccbc',
    200: '#ffab91',
    300: '#ff8a65',
    400: '#ff7043',
    500: '#ff5722',
    600: '#f4511e',
    700: '#e64a19',
    800: '#d84315',
    900: '#bf360c',
    A100: '#ff9e80',
    A200: '#ff6e40',
    A400: '#ff3d00',
    A700: '#dd2c00',
  },
  brown: {
    50: '#efebe9',
    100: '#d7ccc8',
    200: '#bcaaa4',
    300: '#a1887f',
    400: '#8d6e63',
    500: '#795548',
    600: '#6d4c41',
    700: '#5d4037',
    800: '#4e342e',
    900: '#3e2723',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },
  blueGrey: {
    50: '#eceff1',
    100: '#cfd8dc',
    200: '#b0bec5',
    300: '#90a4ae',
    400: '#78909c',
    500: '#607d8b',
    600: '#546e7a',
    700: '#455a64',
    800: '#37474f',
    900: '#263238',
  },
  black: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.12)',
    400: 'rgba(0, 0, 0, 0.16)',
    500: 'rgba(0, 0, 0, 0.24)',
    600: 'rgba(0, 0, 0, 0.38)',
    700: 'rgba(0, 0, 0, 0.54)',
    800: 'rgba(0, 0, 0, 0.87)',
    900: '#000000',
  },
  white: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.12)',
    400: 'rgba(255, 255, 255, 0.16)',
    500: 'rgba(255, 255, 255, 0.24)',
    600: 'rgba(255, 255, 255, 0.38)',
    700: 'rgba(255, 255, 255, 0.54)',
    800: 'rgba(255, 255, 255, 0.87)',
    900: '#ffffff',
  },
} as const;

// Material UI-like elevation shadows (0-24)
export const Shadows = {
  0: 'none',
  1: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  2: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  3: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  4: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  5: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  6: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  7: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  8: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
  9: '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
  10: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
  11: '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
  12: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
  13: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  14: '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
  15: '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
  16: '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
  17: '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
  18: '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
  19: '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
  20: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
  21: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
  22: '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
  23: '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  24: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
} as const;

// Material UI-like spacing (base 8px)
export const spacingUnit = 8 as const;

// Base values
// 1rem = 16px
// Spacing unit = 4px

export const Spacing = {
  0: '0', // 0px
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
} as const;

// Convenience aliases
export const Margin = Spacing;
export const Padding = Spacing;

// Font sizes (12px → 68px, step 2)
export const FontSizes = {
  12: '0.75rem', // 12px
  14: '0.875rem', // 14px
  16: '1rem', // 16px
  18: '1.125rem', // 18px
  20: '1.25rem', // 20px
  22: '1.375rem', // 22px
  24: '1.5rem', // 24px
  26: '1.625rem', // 26px
  28: '1.75rem', // 28px
  30: '1.875rem', // 30px
  32: '2rem', // 32px
  34: '2.125rem', // 34px
  36: '2.25rem', // 36px
  38: '2.375rem', // 38px
  40: '2.5rem', // 40px
  42: '2.625rem', // 42px
  44: '2.75rem', // 44px
  46: '2.875rem', // 46px
  48: '3rem', // 48px
  50: '3.125rem', // 50px
  52: '3.25rem', // 52px
  54: '3.375rem', // 54px
  56: '3.5rem', // 56px
  58: '3.625rem', // 58px
  60: '3.75rem', // 60px
  62: '3.875rem', // 62px
  64: '4rem', // 64px
  66: '4.125rem', // 66px
  68: '4.25rem', // 68px
} as const;

// Font weights
export const FontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// Line heights
export const LineHeights = {
  line100: 1,
  line125: 1.25,
  line150: 1.5,
  line175: 1.75,
} as const;

// Letter spacing
export const LetterSpacing = {
  tight: '-0.01em',
  normal: '0em',
  wide: '0.02em',
} as const;

// Breakpoints and container widths
export const Breakpoints = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

export const ContainerWidths = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

// Z-index scale
export const ZIndex = {
  base: 1,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500,
} as const;

// Radii
export const Radius = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  round: '9999px',
} as const;

// Border widths
export const BorderWidths = {
  1: '1px',
  2: '2px',
  3: '3px',
} as const;

// Opacity tokens
export const Opacity = {
  disabled: 0.38,
  muted: 0.6,
  overlay: 0.8,
} as const;

// Transitions and easings
export const Transitions = {
  fast: '150ms',
  normal: '250ms',
  slow: '350ms',
} as const;

export const Easings = {
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
  accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
} as const;

// Focus ring
export const FocusRing = {
  width: '3px',
  color: Colors.blue[500],
  shadow: '0 0 0 3px rgba(33, 150, 243, 0.25)',
} as const;

// Blur and backdrop
export const Blur = {
  0: '0px',
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
} as const;

export const Backdrop = {
  0: 'blur(0px)',
  2: 'blur(2px)',
  4: 'blur(4px)',
  8: 'blur(8px)',
  12: 'blur(12px)',
} as const;

// Elevation overlays (for dark surfaces)
export const Overlays = {
  1: 'rgba(255, 255, 255, 0.02)',
  2: 'rgba(255, 255, 255, 0.04)',
  3: 'rgba(255, 255, 255, 0.06)',
  4: 'rgba(255, 255, 255, 0.08)',
  6: 'rgba(255, 255, 255, 0.11)',
  8: 'rgba(255, 255, 255, 0.12)',
  12: 'rgba(255, 255, 255, 0.14)',
  16: 'rgba(255, 255, 255, 0.15)',
  24: 'rgba(255, 255, 255, 0.16)',
} as const;

// Component heights
export const ComponentHeights = {
  input: '40px',
  button: '40px',
  navbar: '64px',
} as const;

// Gaps and container padding
export const Gaps = {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
} as const;

export const ContainerPadding = {
  x: '16px',
  y: '16px',
} as const;

// Semantic colors mapped to palette
export const Semantic = {
  info: {
    50: Colors.lightBlue[50],
    500: Colors.lightBlue[500],
    700: Colors.lightBlue[700],
  },
  success: {
    50: Colors.green[50],
    500: Colors.green[500],
    700: Colors.green[700],
  },
  warning: {
    50: Colors.amber[50],
    500: Colors.amber[500],
    700: Colors.amber[700],
  },
  error: {
    50: Colors.red[50],
    500: Colors.red[500],
    700: Colors.red[700],
  },
} as const;

// Surface layers
export const Surface = {
  1: '#ffffff',
  2: '#fafafa',
  3: '#f5f5f5',
} as const;
