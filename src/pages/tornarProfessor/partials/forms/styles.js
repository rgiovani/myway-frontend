import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  text: {
    fontSize: '14px',
    marginBottom: '0.5rem',
    color: theme.palette.secondary.main,
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'auto  auto',
    marginTop: '2rem',
    columnGap: '4rem',
    rowGap: '3rem',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },
  input: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  file: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '3rem'
  },
  fileGroup: {
    display: 'flex',
    alignItems: 'center'
  }
}))