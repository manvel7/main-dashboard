import { Colors } from '../theme/colors';
import {
  lightColors,
  darkColors,
  FontSizes,
  FontWeights,
  LineHeights,
  spacingUnit,
  Radius,
  Shadows,
} from '../theme/colors';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    bodySm: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    bodySm?: React.CSSProperties;
  }

  interface TypographyVariants {
    bodyLg: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    bodyLg?: React.CSSProperties;
  }
  interface TypographyVariants {
    body: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body?: React.CSSProperties;
  }
}

// Extend Typography's variant prop
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodySm: true;
    body: true;
    bodyLg: true;
  }
}

export type GeneralTheme = {
  mode: 'light' | 'dark';
  palette: typeof lightColors | typeof darkColors;
  tokens: {
    colors: typeof Colors;
    spacingUnit: number;
    radius: typeof Radius;
    shadows: { [k: number]: string };
  };
  typography: {
    fontFamily: string;
    h1: { size: string; weight: number; lineHeight: number };
    h2: { size: string; weight: number; lineHeight: number };
    h3: { size: string; weight: number; lineHeight: number };
    h4: { size: string; weight: number; lineHeight: number };
    h5: { size: string; weight: number; lineHeight: number };
    h6: { size: string; weight: number; lineHeight: number };
    bodyLg: { size: string; lineHeight: number };
    body: { size: string; lineHeight: number };
    bodySm: { size: string; lineHeight: number };
  };
};

const buildShadows = (): Record<number, string> => {
  const map: Record<number, string> = {};
  for (let i = 0; i <= 24; i += 1) {
    map[i] = (Shadows as any)[i] ?? 'none';
  }
  return map;
};

export const generalLightTheme: GeneralTheme = {
  mode: 'light',
  palette: lightColors,
  tokens: {
    colors: Colors,
    spacingUnit,
    radius: Radius,
    shadows: buildShadows(),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { size: FontSizes[48], weight: FontWeights.semibold, lineHeight: 1.2 },
    h2: { size: FontSizes[40], weight: FontWeights.semibold, lineHeight: 1.3 },
    h3: { size: FontSizes[34], weight: FontWeights.semibold, lineHeight: 1.3 },
    h4: { size: FontSizes[28], weight: FontWeights.medium, lineHeight: 1.4 },
    h5: { size: FontSizes[24], weight: FontWeights.medium, lineHeight: 1.5 },
    h6: { size: FontSizes[20], weight: FontWeights.medium, lineHeight: 1.6 },
    bodyLg: { size: FontSizes[18], lineHeight: LineHeights.line150 },
    body: { size: FontSizes[16], lineHeight: LineHeights.line150 },
    bodySm: { size: FontSizes[14], lineHeight: LineHeights.line150 },
  },
};

export const generalDarkTheme: GeneralTheme = {
  mode: 'dark',
  palette: darkColors,
  tokens: {
    colors: Colors,
    spacingUnit,
    radius: Radius,
    shadows: buildShadows(),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { size: FontSizes[48], weight: FontWeights.semibold, lineHeight: 1.2 },
    h2: { size: FontSizes[40], weight: FontWeights.semibold, lineHeight: 1.3 },
    h3: { size: FontSizes[34], weight: FontWeights.semibold, lineHeight: 1.3 },
    h4: { size: FontSizes[28], weight: FontWeights.medium, lineHeight: 1.4 },
    h5: { size: FontSizes[24], weight: FontWeights.medium, lineHeight: 1.5 },
    h6: { size: FontSizes[20], weight: FontWeights.medium, lineHeight: 1.6 },
    bodyLg: { size: FontSizes[18], lineHeight: LineHeights.line150 },
    body: { size: FontSizes[16], lineHeight: LineHeights.line150 },
    bodySm: { size: FontSizes[14], lineHeight: LineHeights.line150 },
  },
};

export default {
  generalLightTheme,
  generalDarkTheme,
};
