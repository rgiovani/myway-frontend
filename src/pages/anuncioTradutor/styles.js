import { makeStyles } from '@material-ui/core/styles'

import styled from 'styled-components'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    margin: '30px 200px',
    [theme.breakpoints.down('md')]: {
      margin: '30px 50px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '30px 30px',
    },
  },
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
  title: {
    fontSize: 19,
    textAlign: 'center',
  },
  titleCurso: {
    color: '#0B3144',
    marginTop: '2rem'
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
  anuncio: {
    marginTop: '0.5rem',
    fontSize: 19,
    color: '#117090'
  },
  list: {
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gap: '2rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto auto auto',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'auto',
    },
  },
  hr: {
    margin: 'auto 40px',
    opacity: 0.1
    // border: '1.5px solid rgb(150, 200, 200)'
  },
  borderMyAnnouncements: {
    border: '1px solid ',
    color: '#D5D5D5',
    borderRadius: 5,
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)'
  },
  hrModal: {
    margin: '10px 20px',
    opacity: 0.1,
  }
}))


export const CardAnnoucement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-top: 1rem;
  box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.25), 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

export const StyledAnnoucementCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 430px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  padding: 5px;
  height: 250px;
  padding: 22px;
  &:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  }
`

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const StyledSelect = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
`;

export const StyledInfoModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  height: 440px;
  width: 440px;
  margin: 0 auto;
`
