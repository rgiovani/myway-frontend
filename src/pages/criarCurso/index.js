import React, { useEffect, useState } from 'react'

import { Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import jwt_decode from 'jwt-decode'

import CriarCursoForm from './partials/forms/criarCursoForm'
import Flex from '../../components/ui/Flex'
import { useStyles, StyledCard } from './styles'
import { createCourseRequest } from '../../store/modules/courses/actions'


export default function CriarCurso() {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const pending = useSelector(state => state.course.status.post.pending)

  const token = useSelector(state => state.auth.token)
  const [userInfo, setUserInfo] = useState({})


  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])

  const onSubmit = values => {
    const { title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, courseImage, numberOfRatings } = values
    dispatch(createCourseRequest(title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, courseImage, numberOfRatings, userInfo.sub))
    history.goBack()
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Flex justifyContent='center'>
          <div>
            <Typography variant="h4">Criar novo curso</Typography>
          </div>
        </Flex>
        <StyledCard>
          <CriarCursoForm onSubmit={onSubmit} submitting={pending} />
        </StyledCard>
      </div>
    </div>
  )

}