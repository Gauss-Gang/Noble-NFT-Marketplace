import { createTheme, darken, lighten } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    skewed: true;
    dark: true;
  }
}

const LIGHT_DARK_COEFFICIENT = 0.3;

export const nobleStyles = {
  colors: {
    pink: '#DB2456',
    violet: '#833CFF',
    purple: '#873AF9',
    darkBlue: '#001463',
    lightBlue: '#42D8E2',
    red: '#E13F48',
    yellow: '#FFD302',
    black: '#07002F',
    white: '#FFF',
    gray: '#DCDCDC',
  },
  borderRadius: {
    default: '5px',
    skewed: '20px 0',
  },
};

export default createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'radial-gradient(#0235BE,#001463)',
        },
        ':disabled': {
          cursor: 'not-allowed',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderRadius: nobleStyles.borderRadius.default,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'skewed' },
          style: {
            color: nobleStyles.colors.white,
            background: `linear-gradient(90deg, ${nobleStyles.colors.pink},${nobleStyles.colors.purple})`,
            borderRadius: nobleStyles.borderRadius.skewed,
          },
        },
        {
          props: { variant: 'dark' },
          style: {
            py: 2,
            backgroundColor: nobleStyles.colors.black,
            border: `1px solid ${nobleStyles.colors.gray}`,
            color: nobleStyles.colors.white,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: nobleStyles.borderRadius.default,
          boxShadow: 'none',
          ':hover': {
            filter: 'contrast(1.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: nobleStyles.colors.black,
          color: nobleStyles.colors.white,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          fontWeight: 600,
        },
        h5: {
          fontWeight: 600,
        },
        h4: {
          fontWeight: 600,
        },
        h3: {
          fontWeight: 600,
        },
        h2: {
          fontWeight: 600,
        },
        h1: {
          fontWeight: 600,
        },
      },
    },
  },
  palette: {
    divider: nobleStyles.colors.gray,
    background: {
      default: nobleStyles.colors.darkBlue,
      paper: nobleStyles.colors.black,
    },
    common: {
      black: nobleStyles.colors.black,
    },
    action: {
      disabled: nobleStyles.colors.darkBlue,
      disabledBackground: nobleStyles.colors.gray,
      disabledOpacity: 0.8,
    },
    text: {
      primary: nobleStyles.colors.white,
      secondary: nobleStyles.colors.purple,
      disabled: nobleStyles.colors.gray,
    },
    primary: {
      light: lighten(nobleStyles.colors.purple, LIGHT_DARK_COEFFICIENT),
      main: nobleStyles.colors.purple,
      dark: darken(nobleStyles.colors.purple, LIGHT_DARK_COEFFICIENT),
    },
    secondary: {
      light: lighten(nobleStyles.colors.lightBlue, LIGHT_DARK_COEFFICIENT),
      main: nobleStyles.colors.lightBlue,
      dark: darken(nobleStyles.colors.lightBlue, LIGHT_DARK_COEFFICIENT),
    },
    error: {
      main: lighten(nobleStyles.colors.red, LIGHT_DARK_COEFFICIENT),
      light: nobleStyles.colors.red,
      dark: darken(nobleStyles.colors.red, LIGHT_DARK_COEFFICIENT),
    },
    info: {
      light: lighten(nobleStyles.colors.yellow, LIGHT_DARK_COEFFICIENT),
      main: nobleStyles.colors.yellow,
      dark: darken(nobleStyles.colors.yellow, LIGHT_DARK_COEFFICIENT),
    },
    success: {
      main: '#36AB47',
    },
  },
});
