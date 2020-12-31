import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router'

import { Typography } from '@material-ui/core'

import { signUpRequest } from "../../store/modules/auth/actions";
import SignupForm from './forms/partials/signupForm'
import { useStyles } from './styles'

import Logo from '../../assets/images/logo_light.svg'

export default function Signup() {
  const classes = useStyles()
  const history = useHistory()

  const dispatch = useDispatch()
  const pending = useSelector(state => state.auth.status.post.pending)

  function handleSubmit(params) {
    const { firstName, lastName, email, password } = params

    dispatch(signUpRequest(firstName, lastName, email, password))
    history.push('/')
  }
  return (
    <div className={classes.root}>
      <div className={classes.painelRight}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={Logo} alt='logo' className={classes.logoTitle} />
          <Typography variant='h4' color='primary'>My Way</Typography>
        </div>
        <SignupForm onSubmit={handleSubmit} submitting={pending} />
      </div>
    </div>
  )
}
