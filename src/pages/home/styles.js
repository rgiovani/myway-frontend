import { makeStyles } from '@material-ui/core'
import styled from "styled-components";


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
  course: {
    width: '250px',
    height: 'auto',
    transform: 'scale(0.9)',
    transition: 'all ease-in-out 0.3s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1)',
    },
  },
  courseImage: {
    width: '250px',
    height: '140px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  navigateLeft: {
    position: 'absolute',
    width: '40px',
    height: '225px',
    left: 220,
    zIndex: 99,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  navigateRight: {
    position: 'absolute',
    width: '40px',
    height: '225px',
    right: 220,
    zIndex: 99,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
  },
}))

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
