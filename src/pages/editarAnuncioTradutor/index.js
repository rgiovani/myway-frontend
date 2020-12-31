import React from 'react'
import { useHistory } from 'react-router'

import { Typography } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'

import Flex from '../../components/ui/Flex'
import CadastroForm from './partials/forms/editarForm'
import { useStyles, StyledCard } from './styles'
import { editTranslatorRequest } from '../../store/modules/translator/actions'


export default function EditarAnuncioTradutor(props) {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const pending = useSelector(state => state.translator.status.put.pending)

  // eslint-disable-next-line react/destructuring-assignment
  const { state } = props.location
  const data = state

  const handleSubmit = values => {
    const { title, subtitle, description, price, phone } = values
    dispatch(editTranslatorRequest(title, subtitle, description, price, phone, data.user.id, data.id))
    history.goBack()
    history.push('/editar-anuncio-tradutor')
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Flex justifyContent='center'>
          <div>
            <Typography variant="h4">Editar anúncio como tradutor</Typography>
          </div>
        </Flex>
        <StyledCard>
          <CadastroForm onSubmit={handleSubmit} submitting={pending} formData={state} />
        </StyledCard>
      </div>
    </div>
  )

}