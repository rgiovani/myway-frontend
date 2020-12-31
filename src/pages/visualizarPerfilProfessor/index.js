import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import jwt_decode from "jwt-decode";
import { Typography, Button } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import ProfileNotFoundImage from '../../assets/images/user.svg'
import Flex from '../../components/ui/Flex'
import { getTeacherById, getTeacherCourseRequest } from "../../store/modules/teacher/actions";
import { rateTeacherRequest, studentGetRateTeacherRequest } from "../../store/modules/student/actions";
import { useStyles } from './styles'

import { apiURL } from '../../services/api'

export default function PerfilProfessor() {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams();

  const teacher = useSelector(state => state.teacher.professorInfo)
  const courses = useSelector(state => state.teacher.courses)
  const avg = teacher.rating?.totalScore / teacher.rating?.numberOfRatings

  const token = useSelector(state => state.auth.token)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])


  useEffect(() => {
    dispatch(getTeacherById(id))
    dispatch(getTeacherCourseRequest(id))
  }, [dispatch, id])

  useEffect(() => {
    dispatch(studentGetRateTeacherRequest(userInfo.sub, teacher.id))
  }, [dispatch, teacher.id, userInfo.sub])

  const goToPage = id => {
    history.push(`/cursos/${id}`)
  }

  const rateTeacher = score => {
    dispatch(rateTeacherRequest(id, userInfo.sub, score))
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Flex justifyContent="space-between">
          <div className={classes.professorInfo}>
            <Typography style={{ color: '#847F7F', fontWeight: 100, textTransform: 'uppercase' }}>
              Professor
            </Typography>
            <Typography variant="h4" style={{ color: '#312E2E', fontWeight: 500 }}>
              {teacher.user?.firstName} {teacher.user?.lastName}
            </Typography>
            <Typography style={{ color: '#847F7F', fontWeight: 100 }}>{teacher.specialty}</Typography>
            <div className={classes.rating}>
              <Rating name='rating' value={avg || 0} onChange={(event, newValue) => {
                rateTeacher(newValue);
              }} />
              <Typography style={{ color: "#ffb400", fontWeight: 'bold', marginRight: "0.5rem", marginLeft: "5px", }} variant="h6">
                {isNaN(avg) ? 0 : `${avg.toFixed(2)}`}
              </Typography>
            </div>

            <div>
              <Typography variant="h5">Sobre</Typography>
              <Typography style={{ color: '#847F7F', fontWeight: 100, marginTop: '2px' }}>
                {teacher.about}
              </Typography>
            </div>
            <div className={classes.courses}>
              <Typography variant="h6">Meus cursos</Typography>
              <div className={classes.coursesList}>
                {courses.coursesTaught?.map(course => (
                  <div key={course.id} onClick={() => goToPage(course.id)} style={{ cursor: 'pointer', maxWidth: 200, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', padding: 5 }}>
                    <img src={`${apiURL}/${course.courseImage}`} alt={course.title} className={classes.courseImage} />
                    <Typography variant="h6" style={{ color: '#0B3144' }}>
                      {course.title}
                    </Typography>
                    <div className={classes.rating}>
                      <Typography
                        variant="h6"
                        style={{ color: '#847F7F', fontWeight: 100, marginRight: '0.5rem' }}
                      >
                        {course.average}
                      </Typography>
                      <Rating value={course.average} readOnly precision={0.5} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.professorImageBlock}>
            <img src={`${apiURL}/${teacher.profilePhoto?.link}` || ProfileNotFoundImage} alt={teacher.firstName} className={classes.professorImage} />
            <Button variant="contained" color="primary" disableElevation style={{ marginTop: '2rem' }} href={teacher.donationLink} target='_blank'>
              Realizar Doação
            </Button>
          </div>
        </Flex>
      </div>
    </div >
  )
}
