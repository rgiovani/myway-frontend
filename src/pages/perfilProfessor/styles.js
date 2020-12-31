import { makeStyles } from '@material-ui/core/styles'
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
  paper: {
    marginTop: '1rem',
    height: theme.spacing(15),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper2: {
    marginTop: '1rem',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  edit: {
    marginTop: '2rem',
  },
  texto: {
    color: '#0B3144',
  },
  botao: {
    marginTop: '7rem'
  },
  courseImage: {
    width: '160px',
    height: '100px',
    borderRadius: '5px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
  },
}))

export const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px;
`;

export const CourseItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid #c2c2c2;

  :hover {
    background: #EEEEEE;
    cursor: pointer
  }
`;

export const CourseInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const CourseInfoDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;