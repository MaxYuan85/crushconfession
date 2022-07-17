import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

// https://mui.com/customization/theming/#themes

const theme = createTheme({
  // palette: {
  //   primary: primaryColor
  // }
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: grey[50]
        }
      }
    },
  },
  typography: {
    fontFamily: 'Raleway',
  }
})

theme.typography.h1 = {
  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};

theme.typography.body2 = {
  fontSize: '14pt',
  '@media (min-width:600px)': {
    fontSize: '18pt',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24pt',
  },
};

theme.typography.h5 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
};


theme.typography.subtitle1 = {
  fontWeight: 400,
  textDecoration: 'underline',
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};

export default theme
