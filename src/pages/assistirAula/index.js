import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router'

import { Typography, List, ListItem, Button, FormControlLabel, Checkbox, withStyles } from '@material-ui/core'
import jwt_decode from "jwt-decode";

import VideoPlayer from '../../components/videoPlayer'
import { changeStatusContentRequest, getAllCourseContentRequest } from '../../store/modules/courses/actions'
import { studentContentsRequest, watchClassRequest } from '../../store/modules/student/actions'
import { StyledContent, StyledListContainer, StyledDivider, StyledFlex, StyledVideoDescription } from './styles'

import { apiURL } from '../../services/api'

const GreenCheckbox = withStyles({
  root: {
    color: '#52f459',
    '&$checked': {
      color: '#52f459',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function AssistirAula() {
  const { id } = useParams()
  const history = useHistory()

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)
  const content = useSelector(state => state.student.classContent)
  const contentList = useSelector(state => state.course.contentList)
  const studentContents = useSelector(state => state.student.studentContents)

  const [userInfo, setUserInfo] = useState({})
  const [statusUpdated, setStatusUpdated] = useState(false)

  function isFinished(id) {
    return studentContents.finishedContents?.some(c => c.id === id)
  }

  useEffect(() => {
    dispatch(studentContentsRequest(userInfo.sub))
    setStatusUpdated(false)
  }, [dispatch, statusUpdated, userInfo])

  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])

  useEffect(() => {
    dispatch(watchClassRequest(id, userInfo.sub))
  }, [dispatch, id, userInfo])

  useEffect(() => {
    const courseId = content.course?.id
    dispatch(studentContentsRequest(userInfo.sub))
    dispatch(getAllCourseContentRequest(courseId))
  }, [content, dispatch, userInfo])

  const handleContentChange = (contentId) => {
    history.push(`/assistir-aula/${contentId}`)
  }

  function handleChangeStatus(id, index, isFinished) {
    dispatch(changeStatusContentRequest(id, userInfo.sub))
    const notLastContent = contentList[index + 1]
    if (notLastContent) {
      if (!isFinished) {
        handleContentChange(notLastContent.id)
      }
      setStatusUpdated(!statusUpdated)
    } else {
      if (!isFinished) {
        handleContentChange(contentList[0].id)
      }
      setStatusUpdated(!statusUpdated)
    }
  }

  return (
    <StyledContent>
      <StyledFlex>
        <div style={{ maxWidth: '1500px', flexBasis: '50%' }}>
          {content.contentType === 'VIDEO' && (
            <VideoPlayer url={`${apiURL}/${content.file?.link}`} />
          )}
          {content.contentType === 'PRACTICAL' && (
            <div style={{ margin: '2rem' }} >
              <Button variant="contained" color="primary" href={content.link} disableElevation fullWidth target="_blank">Acessar Aula</Button>
            </div>
          )}
          <StyledVideoDescription>
            <Typography variant="h4" style={{ color: '#0B3144', marginTop: '1rem' }}>{content.title}</Typography>
            <Typography variant="h6" style={{ color: '#0B3144', marginTop: '1rem' }}>
              {content.description}
            </Typography>
          </StyledVideoDescription>
        </div>
        <StyledListContainer>
          <Typography variant='h4' style={{ color: '#fff' }}>{content.course?.title} - Aulas</Typography>
          <List component="nav">
            {contentList.map((content, index) => (
              <div key={content.id}>
                <ListItem button style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div onClick={() => handleContentChange(content.id)} style={{ display: 'flex', alignItems: 'center' }}>
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={isFinished(content.id) || false}
                          name="checkedB"
                        />
                      }
                    />
                    <Typography variant='h6' style={{ color: '#fff' }}>AULA {index + 1} - {content.title}</Typography>
                  </div>
                  {id === content.id && (
                    <Button
                      onClick={() => handleChangeStatus(content.id, index, isFinished(content.id))}
                      style={{ color: '#fff' }}
                    >
                      {isFinished(content.id) ? 'Reiniciar' : 'Avançar e finalizar'}
                    </Button>
                  )}
                </ListItem>
                <StyledDivider />
              </div>
            ))}
          </List>
        </StyledListContainer>
      </StyledFlex>
    </StyledContent>
  )
}