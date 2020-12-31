import React from 'react'

import { Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import EditarCursoForm from './partials/forms/editarCursoForm'
import Flex from '../../components/ui/Flex'
import { useStyles, StyledCard } from './styles'
import { editCourseRequest } from '../../store/modules/courses/actions'


export default function EditarCurso(props) {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const pending = useSelector(state => state.course.status.post.pending)

  // eslint-disable-next-line react/destructuring-assignment
  const { state } = props.location
  const data = state


  const onSubmit = values => {
    const { title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, courseImage, numberOfRatings } = values
    dispatch(editCourseRequest(title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, courseImage, numberOfRatings, data.teacher?.id, data.id))
    history.goBack()
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Flex justifyContent='center'>
          <div>
            <Typography variant="h4">Editar curso</Typography>
          </div>
        </Flex>
        <StyledCard>
          <EditarCursoForm onSubmit={onSubmit} submitting={pending} formData={data} />
        </StyledCard>
      </div>
    </div>
  )

}