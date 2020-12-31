import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router'

import jwt_decode from "jwt-decode";
import { Typography, Button, Paper } from '@material-ui/core'

import Flex from '../../components/ui/Flex'
import { useStyles, CourseItem, CourseList, CourseInfoGroup, CourseInfoDetails } from './styles'
import { getTeacherCourseRequest } from '../../store/modules/teacher/actions';

import { apiURL } from '../../services/api'

export default function PerfilProfessor() {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const changePage = (path) => { history.push(path) }

  const courses = useSelector(state => state.teacher.courses)

  const token = useSelector(state => state.auth.token)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])


  useEffect(() => {
    dispatch(getTeacherCourseRequest(userInfo.sub))
  }, [dispatch, userInfo])


  const goToPage = id => {
    history.push(`/professor/curso/${id}`)
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div>
          <Typography variant="h4" style={{ color: '#0B3144' }}>Meus Cursos</Typography>
        </div>

        <Paper elevation={3} className={classes.paper}>
          <div style={{ marginLeft: '1rem' }}>
            <Typography variant="h5" className={classes.texto}>Iniciar a criação do curso</Typography>
            <Typography style={{ color: '#847F7F' }}>Prepare seu curso para o sucesso, conquistando seu público. (seu curso irá aparecer na tela de cursos depois de 2 minutos)</Typography>
          </div>
          <div>
            <Button variant="contained" color="primary" size="large" onClick={() => { changePage('/criar-curso') }} style={{ marginRight: '1rem' }}>
              Crie seu Curso
              </Button>
          </div>
        </Paper>

        <Paper elevation={3} className={classes.paper2}>
          <Flex justifyContent='center'>
            {courses.coursesTaught?.length === 0 ? (
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="h5" style={{ color: '#847F7F' }}>Prepare seu curso para o sucesso, conquistando seu público.</Typography>
                <Button variant="outlined" color="primary" size="large" style={{ marginTop: '1rem' }} onClick={() => { changePage('/criar-curso') }}>
                  Criar novo Curso
                </Button>
              </div>
            ) : (
                <CourseList>
                  {courses.coursesTaught?.map(course => {
                    return (
                      <CourseItem key={course.id} onClick={() => goToPage(course.id)}>
                        <img src={`${apiURL}/${course.courseImage}`} alt={course.title} className={classes.courseImage} />
                        <CourseInfoGroup>
                          <Typography variant="h6" color='secondary'>{course.title}</Typography>
                          <CourseInfoDetails>
                            <Typography style={{ minWidth: '250px' }} color='secondary'>
                              <strong>Idioma do curso: </strong>{course?.language[0].name}
                            </Typography>
                            <Typography color='secondary'>
                              <strong>Nível do curso: </strong>{course.level}
                            </Typography>
                          </CourseInfoDetails>
                        </CourseInfoGroup>
                      </CourseItem>
                    )
                  })}
                </CourseList>
              )}
          </Flex>
        </Paper>
      </div>
    </div >
  )

}