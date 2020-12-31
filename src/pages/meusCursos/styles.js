import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

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
  titleCurso: {
    color: '#0B3144'
  },
  coursesList: {
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gap: '2rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto auto',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'auto',
    },
  },
  courseImage: {
    width: '100%',
    height: '140px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
}))

export const StyledCourseCard = styled.div`
  cursor: pointer;
  width: 230px;
  height: 254px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all ease-in-out 0.3s;
  padding: 10px;

  &:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  }
`

export const StyledText = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  color: #847F7F;
  font-weight: 100;
`