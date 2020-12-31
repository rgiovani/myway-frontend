import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import CriarAulaForm from './partials/forms/criarAulaForm'
import { useStyles } from './styles'
import { createVideoContentRequest, createPraticalContentRequest } from '../../store/modules/courses/actions'

export default function CriarAula(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const pending = useSelector(state => state.course.status.post.pending)

  // eslint-disable-next-line react/destructuring-assignment
  const { state } = props.location

  const onSubmit = values => {
    const { title, description, link, file, contentType } = values
    if (contentType === 'VIDEO') {
      dispatch(createVideoContentRequest(file, title, contentType, description, state.teacher?.id, state.id))
    } else {
      dispatch(createPraticalContentRequest(title, contentType, description, link, state.teacher?.id, state.id))
    }
    history.goBack()
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <CriarAulaForm onSubmit={onSubmit} submitting={pending} />
      </div>
    </div>
  )

}