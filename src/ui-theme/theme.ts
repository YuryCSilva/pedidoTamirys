const colors = {
  none: 'transparent',
  white: {
    1: '#FFF',
    2: '#fafafa',
    3: '#f1f5f9',
  },
  green: {
    1: '#4ade80',
    2: '#16a34a',
    3: '#166534',
    4: '#14532d',
  },
  blue: {
    1: '#60a5fa',
    2: '#2563eb',
    3: '#1e40af',
    4: '#1e3a8a',
  },
  black: {
    1: '#000',
    2: '#171717',
    3: '#0f172a',
  },
  yellow: {
    1: '#facc15',
    2: '#ca8a04',
    3: '#854d0e',
    4: '#713f12',
  },
  red: {
    1: '#f87171',
    2: '#dc2626',
    3: '#991b1b',
    4: '#7f1d1d',
  },
  grey: {
    1: '#e5e7eb',
    2: '#d1d5db',
    3: '#9ca3af',
    4: '#6b7280',
    5: '#4b5563',
  },
  default: '#464646',
  background: '#fafafa',
}

const alerts = {
  primary: colors.blue[2],
  secondary: colors.grey[2],
  success: colors.green[2],
  danger: colors.red[2],
  warning: colors.yellow[2],
}

const fonts = {
  family: {
    Roboto: 'Roboto',
  },
  weight: {
    normal: '400',
    medium: '500',
    bold: '700',
    extraBold: '900',
  },
  textSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xl2: '1.5rem',
    xl3: '1.75rem',
    xl4: '2rem',
    xl5: '2.25rem',
    xl6: '2.5rem',
  },
}

const sizeScreen = {
  phone: '481px',
  tablet: '769px',
  tabletLarge: '1025px',
  desktop: '1281px',
}

const sizes = {
  xs: '0.5rem',
  sm: '0.75rem',
  base: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  xl2: '1.75rem',
  xl3: '2rem',
  xl4: '2.5rem',
  xl5: '3rem',
  xl6: '4rem',
}

const grid = {
  col_1: '8.33%',
  col_2: '16.66%',
  col_3: '24.99%',
  col_4: '33.32%',
  col_5: '41.65%',
  col_6: '49.98%',
  col_7: '58.31%',
  col_8: '66.64%',
  col_9: '74.97%',
  col_10: '83.30%',
  col_11: '91.63%',
  col_12: '100%',
}

const theme = {
  colors: colors,
  alerts: alerts,
  font: fonts,
  sizeScreen: sizeScreen,
  sizes: sizes,
  grid: grid,
};

export default theme;
