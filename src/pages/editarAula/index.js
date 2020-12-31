import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import jwt_decode from 'jwt-decode'

import EditarAulaForm from './partials/forms/editarAulaForm'
import { useStyles } from './styles'
import { editVideoContentRequest, editPracticalContentRequest } from '../../store/modules/courses/actions'

export default function CriarCurso(props) {
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

  // eslint-disable-next-line react/destructuring-assignment
  const { state } = props.location
  const data = state

  const onSubmit = (values) => {
    const { file, title, contentType, description, link } = values
    if (contentType === 'VIDEO') {
      dispatch(editVideoContentRequest(file, title, contentType, description, data.id))
    } else {
      dispatch(editPracticalContentRequest(link, title, contentType, description, data.id, userInfo.sub))
    }
    history.goBack()
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <EditarAulaForm onSubmit={onSubmit} submitting={pending} formData={data} />
      </div>
    </div>
  )

}