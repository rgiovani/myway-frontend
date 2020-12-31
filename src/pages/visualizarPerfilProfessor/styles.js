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
  professorInfo: {
    maxWidth: '800px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '500px',
    },
  },
  professorImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',
    },
  },
  courses: {
    marginTop: '1rem',
  },
  coursesList: {
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto auto',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'auto',
    },
  },
  courseImage: {
    width: '200px',
    height: '140px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  professorImageBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

