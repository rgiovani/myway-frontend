import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Signika, sans-serif',
  },
  palette: {
    primary: {
      main: '#28ACD8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0B3144',
      contrastText: '#fff',
    }
  },
})

export default theme
