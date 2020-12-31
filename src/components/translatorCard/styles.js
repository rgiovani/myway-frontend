import { makeStyles } from '@material-ui/core/styles'

import styled from 'styled-components'


export const useStyles = makeStyles(theme => ({
  translator: {
    width: '250px',
    height: 'auto',
    transform: 'scale(0.9)',
    transition: 'all ease-in-out 0.3s',
    translator: 'pointer',
    '&:hover': {
      transform: 'scale(0.94)',
    },
  },
  noAnnouncements: {
    width: '929px',
    height: '229px',
    translator: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15
  },
  title: {
    fontSize: 19,
    textAlign: 'center',
  },
  card: {
    flexGrow: 1,
    marginTop: '1rem',
    height: theme.spacing(40),
    color: '#FFFFFF'
  },
  paper: {
    marginTop: '1rem',
    width: theme.spacing(27),
    height: theme.spacing(17),
    backgroundColor: '#847F7F'
  },
  hr: {
    opacity: 0.15,
    marginTop: 15
    // border: '1.5px solid rgb(150, 200, 200)'
  }
}))

export const MyStyledAnnoucementCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 430px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  padding: 5px;
  height: 185px;
  width: 200px;
  padding: 22px;
  &:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  }
`