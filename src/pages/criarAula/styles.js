import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    margin: '30px 250px',
    [theme.breakpoints.down('md')]: {
      margin: '30px 50px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '30px 30px',
    },
  },
  paper:{
    marginTop:'2rem',
    marginLeft: '5rem',
    margin: theme.spacing(1),
    width: theme.spacing(150),
    height: theme.spacing(80),
  },
  escolha:{
    marginTop: '6rem',  
    marginLeft: '17rem',
    width: theme.spacing(30),
    height: theme.spacing(40),
    borderColor: '#0B3144'
  },
  escolha2:{
    marginTop: '6rem',  
    marginRight: '17rem',
    width: theme.spacing(30),
    height: theme.spacing(40),
    borderColor: '#0B3144'
  },
}))
