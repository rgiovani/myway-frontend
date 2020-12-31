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
    }
  },
  courseInfos: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  courseImage: {
    maxWidth: '280px',
    maxHeight: '180px',
    marginRight: '2rem',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: 5
  },
  info: {
    display: 'flex',
    flexDirection: 'column'
  },
  rating: {
    display: 'flex',
  },
  basic: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  actions: {
    display: 'flex',
    marginTop: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  rightButton: {
    marginRight: '1rem',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      marginBottom: '1rem'
    },
  },
  card: {
    boxShadow: '-1px -1px 4px rgba(0, 0, 0, 0.25), 2px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    padding: 20,
    marginTop: '2rem'
  },
  noContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  itens: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contentImage: {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: 5,
    maxHeight: 60,
    maxWidth: 100,
    marginRight: '1rem'
  }
}))

