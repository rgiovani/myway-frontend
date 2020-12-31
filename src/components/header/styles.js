import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

export const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.primary.main,
    height: '80px',
    position: 'fixed',
    top: 0,
    zIndex: 20,
    width: '100%',
  },
}))

export const StyledItem = styled.div`
  align-items: center;
  border-bottom: 4px solid ${props => (props.active ? '#fff' : 'transparent')};
  display: inline-flex;
  margin-left: 30px;
`
