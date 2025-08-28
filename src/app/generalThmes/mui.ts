import { createTheme, Theme } from '@mui/material/styles';
import { generalLightTheme, generalDarkTheme } from './index';

const toMuiTheme = (g: typeof generalLightTheme): Theme => {
  // Build shadows array 0..24
  const muiShadows: string[] = Array(25).fill('none');
  for (let i = 0; i <= 24; i += 1) {
    muiShadows[i] = g.tokens.shadows[i] ?? 'none';
  }

  return createTheme({
    palette: {
      mode: g.mode,
      primary: g.palette.primary,
      secondary: g.palette.secondary,
      background: g.palette.background,
      text: g.palette.text,
      // @ts-ignore custom is extended in project
      custom: (g.palette as any).custom,
    },
    spacing: g.tokens.spacingUnit,
    shape: { borderRadius: parseInt(g.tokens.radius.md, 10) },
    shadows: muiShadows as any,
    typography: {
      fontFamily: g.typography.fontFamily,
      h1: { fontSize: g.typography.h1.size, fontWeight: g.typography.h1.weight, lineHeight: g.typography.h1.lineHeight },
      h2: { fontSize: g.typography.h2.size, fontWeight: g.typography.h2.weight, lineHeight: g.typography.h2.lineHeight },
      h3: { fontSize: g.typography.h3.size, fontWeight: g.typography.h3.weight, lineHeight: g.typography.h3.lineHeight },
      h4: { fontSize: g.typography.h4.size, fontWeight: g.typography.h4.weight, lineHeight: g.typography.h4.lineHeight },
      h5: { fontSize: g.typography.h5.size, fontWeight: g.typography.h5.weight, lineHeight: g.typography.h5.lineHeight },
      h6: { fontSize: g.typography.h6.size, fontWeight: g.typography.h6.weight, lineHeight: g.typography.h6.lineHeight },
      body1: { fontSize: g.typography.body.size, lineHeight: g.typography.body.lineHeight },
      body2: { fontSize: g.typography.bodySm.size, lineHeight: g.typography.bodySm.lineHeight },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: parseInt(g.tokens.radius.md, 10),
            padding: `${g.tokens.spacingUnit}px ${g.tokens.spacingUnit * 2}px`,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: muiShadows[8],
            borderRadius: parseInt(g.tokens.radius.lg, 10),
          },
        },
      },
    },
  });
};

export const muiLightTheme = toMuiTheme(generalLightTheme);
export const muiDarkTheme = toMuiTheme(generalDarkTheme);


