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
  }
}))


export const StyledCard = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 30px;
`