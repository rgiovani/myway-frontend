import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';

import { Typography } from '@material-ui/core'
import jwt_decode from "jwt-decode";

import Flex from '../../components/ui/Flex'
import TornarProfessorForm from './partials/forms/tornarProfessorForm'
import { useStyles, StyledCard } from './styles'

import { becomeTeacherRequest } from '../../store/modules/student/actions'
import { logOutRequest } from '../../store/modules/auth/actions'

export default function TornarProfessor() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const token = useSelector(state => state.auth.token)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])

  const handleSubmit = values => {
    dispatch(becomeTeacherRequest(userInfo.sub, values))
    dispatch(logOutRequest())
    history.push('/')
  }
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Flex justifyContent="center">
          <Typography variant="h4" color='primary'>Tornar-se Professor</Typography>
        </Flex>
        <StyledCard>
          <TornarProfessorForm onSubmit={handleSubmit} />
        </StyledCard>
      </div>
    </div>
  )

}