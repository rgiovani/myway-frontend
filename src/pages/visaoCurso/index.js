import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdExpandMore } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";


import { Button, Typography, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import jwt_decode from "jwt-decode";


import { getCourseByIdRequest } from "../../store/modules/courses/actions";
import { verifyEnrollmentRequest, enrollCourseRequest, rateCourseRequest, studentGetRateCourseRequest } from "../../store/modules/student/actions";
import {
  StyledBackground,
  StyledBreadcrumb,
  StyledContainer,
  StyledCourseImage,
  StyledCourseInfo,
  StyledRating,
  StyledContent,
  StyledLearn,
  StyledCourseContent,
  StyledCourseDescription,
  StyledCourseRequisites,
  StyledCourseFocus
} from "./styles";

import { apiURL } from '../../services/api'

export default function VisaoCurso() {
  const { id } = useParams()
  const history = useHistory();

  const dispatch = useDispatch();
  const course = useSelector(state => state.course.course)
  const isEnrolled = useSelector(state => state.student.isEnrolled)
  const rate = useSelector(state => state.student.rate)

  const token = useSelector(state => state.auth.token)
  const [userInfo, setUserInfo] = useState({})

  const avg = course.totalScore / course.numberOfRatings;
  const courseAvgReadOnly = avg;

  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])

  const goToPage = path => {
    history.push(`/professor/${path}`);
  };

  useEffect(() => {
    dispatch(verifyEnrollmentRequest(userInfo.sub, id))
  }, [dispatch, id, userInfo])

  useEffect(() => {
    dispatch(studentGetRateCourseRequest(userInfo.sub, course.id))
  }, [dispatch, course.id, userInfo.sub])

  useEffect(() => {
    dispatch(getCourseByIdRequest(id))
  }, [dispatch, id])

  const handleClick = () => {
    dispatch(enrollCourseRequest(userInfo.sub, id))
  }

  const rateCourse = score => {
    if (isEnrolled) dispatch(rateCourseRequest(id, userInfo.sub, score))
  }

  return (
    <div>
      <StyledBackground>
        <StyledBreadcrumb>
          <Typography>Cursos</Typography>
          <MdKeyboardArrowRight size={30} />
          <Typography>{course.title}</Typography>
        </StyledBreadcrumb>
        <StyledContainer>
          <StyledCourseInfo style={{ alignSelf: 'center' }}>
            <Typography variant="h4">{course.title}</Typography>
            <Typography style={{ fontWeight: 100 }} variant="h6">
              {course.subtitle}
            </Typography>
            {isEnrolled ? (
              <StyledRating>
                <Typography style={{ color: "#ffb400", fontWeight: 100, marginRight: "0.5rem" }} variant="h6">
                  {rate || 0}
                </Typography>
                <Rating name='rating' value={avg || 0} onChange={(event, newValue) => {
                  rateCourse(newValue);
                }} />
                <Typography style={{ color: "#ffb400", fontWeight: 'bold', marginRight: "0.5rem", marginLeft: "5px", }} variant="h6">
                  {isNaN(avg) ? 0 : `${avg.toFixed(2)}`}
                </Typography>
              </StyledRating>
            ) : (
                <StyledRating>
                  <Rating name='rating' value={courseAvgReadOnly} precision={0.5} readOnly />
                  <Typography style={{ color: "#ffb400", fontWeight: 'bold', marginRight: "0.5rem", marginLeft: "5px", }} variant="h6">
                    {isNaN(avg) ? 0 : `${avg.toFixed(2)}`}
                  </Typography>
                </StyledRating>
              )}

            <Typography onClick={() => goToPage(course.teacher?.id)} style={{ fontWeight: 100, marginTop: "1rem", cursor: "pointer" }}
              variant="h6">{course.teacher?.user?.firstName} {course.teacher?.user?.lastName}</Typography>
          </StyledCourseInfo>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StyledCourseImage src={`${apiURL}/${course.courseImage?.link}`} alt={course.title} />
            {isEnrolled ? (
              <Button variant="contained"
                // disabled
                disableElevation
                style={{ marginTop: "1rem" }}>Você já esta matriculado</Button>)
              :
              (
                <Button variant="contained"
                  color="secondary"
                  disableElevation
                  onClick={handleClick}
                  style={{ marginTop: "1rem" }}>Matricular-se</Button>
              )}
          </div>
        </StyledContainer>
      </StyledBackground>
      <StyledContent>
        <StyledLearn>
          <Typography color="secondary" variant="h5">O que você aprenderá</Typography>
          <Typography color="secondary" variant="h6" style={{ fontWeight: 100 }}>{course.goals}</Typography>
        </StyledLearn>
        <StyledCourseContent>
          <Typography color="secondary" variant="h5">Conteúdo do curso</Typography>
          {course.contents?.map(content => (
            <Accordion key={content.id} style={{ marginTop: '1rem', width: '100%' }} >
              <AccordionSummary
                expandIcon={<MdExpandMore />}
              >
                <Typography>{content.title}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{ fontWeight: 100 }}>
                  {content.description}
                </Typography>
                {isEnrolled && (
                  <Button color="secondary" variant="contained"
                    disableElevation onClick={() => history.push(`/assistir-aula/${content.id}`)}>Assistir aula</Button>
                )
                }
              </AccordionDetails>
            </Accordion>
          ))}
        </StyledCourseContent>
        <StyledCourseDescription>
          <Typography color="secondary" variant="h5">Descrição</Typography>
          {course.description}
        </StyledCourseDescription>
        <StyledCourseRequisites>
          <Typography color="secondary" variant="h5">Requisitos</Typography>
          {course.studentPrerequisites}
        </StyledCourseRequisites>
        <StyledCourseFocus>
          <Typography color="secondary" variant="h5">Para quem é o curso</Typography>
          {course.studentTargets}
        </StyledCourseFocus>
      </StyledContent>

    </div>
  );
}
