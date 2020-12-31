import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';

import { Typography, withStyles, Box, LinearProgress } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import jwt_decode from "jwt-decode";

import { studentCoursesRequest } from "../../store/modules/student/actions";
import { useStyles, StyledCourseCard, StyledText } from './styles'

import { apiURL } from '../../services/api'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 3,
    borderRadius: 2,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 0.5,
    backgroundColor: '#28acd8',
  },
}))(LinearProgress);


export default function MeusCursos() {
  const classes = useStyles()
  const history = useHistory()

  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const courses = useSelector(state => state.student.studentCourses)
  const [userInfo, setUserInfo] = useState({})
  const courseAvgReadOnly = (totalScore, numberOfRatings) => Number((totalScore / numberOfRatings).toFixed(0))


  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])

  useEffect(() => {
    dispatch(studentCoursesRequest(userInfo.sub))
  }, [userInfo, dispatch])

  const goToPage = id => {
    history.push(`/cursos/${id}`)
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.titleCurso}>
          <Typography variant="h4" >Meus Cursos</Typography>
        </div>
        {courses.length > 0 ? (
          <div className={classes.coursesList}>
            {courses.map(course => (
              <StyledCourseCard key={course.id} onClick={() => goToPage(course.id)}>
                <img src={`${apiURL}/${course.courseImage?.link}`} alt={course.title} className={classes.courseImage} />
                <Typography variant="h6" style={{ color: '#0B3144' }}>
                  {course.title}
                </Typography>
                <Typography style={{ color: '#847F7F' }}>{course.teacher?.user?.firstName} {course.teacher?.user?.lastName}</Typography>
                <Box display="flex" alignItems="center">
                  <Box width="100%" mr={1}>
                    <BorderLinearProgress variant="determinate" value={course.progress || 0} />
                  </Box>
                  <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">{`${Math.round(
                      course.progress,
                    )}%`}</Typography>
                  </Box>
                </Box>

                <div className={classes.rating}>
                  <Typography
                    variant="h6"
                    style={{ color: '#847F7F', fontWeight: 100, marginRight: '0.5rem' }}
                  >
                    {isNaN(course.totalScore / course.numberOfRatings) ? 0 : `${(course.totalScore / course.numberOfRatings).toFixed(2)}`}
                  </Typography>
                  <Rating value={courseAvgReadOnly(course.totalScore, course.numberOfRatings)} readOnly precision={0.5} />
                </div>
              </StyledCourseCard>
            ))}
          </div>
        ) : (
            <StyledText>Você não possui nenhum curso matriculado</StyledText>
          )}
      </div>
    </div>
  )
}