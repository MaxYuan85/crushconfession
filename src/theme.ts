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
    }
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

export default theme
