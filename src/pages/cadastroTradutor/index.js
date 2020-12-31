import React, { useEffect, useState } from 'react'

import { Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'


import jwt_decode from 'jwt-decode'

import CadastroForm from './partials/forms/cadastroForm'
import Flex from '../../components/ui/Flex'
import { useStyles, StyledCard } from './styles'
import { createAnnouncementRequest } from '../../store/modules/translator/actions'


export default function CadastroTradutor() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const pending = useSelector(state => state.translator.status.post.pending)

  const token = useSelector(state => state.auth.token)
  const [userInfo, setUserInfo] = useState({})


  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])


  const onSubmit = values => {
    const { title, subtitle, description, price, phone } = values
    dispatch(createAnnouncementRequest(title, subtitle, description, price, phone, userInfo.sub))
    history.goBack()
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Flex justifyContent='center'>
          <div>
            <Typography variant="h4">Publicar um novo anúncio como tradutor</Typography>
          </div>
        </Flex>
        <StyledCard>
          <CadastroForm onSubmit={onSubmit} submitting={pending} />
        </StyledCard>
      </div>
    </div>
  )

}