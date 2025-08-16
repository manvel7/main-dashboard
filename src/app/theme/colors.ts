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
