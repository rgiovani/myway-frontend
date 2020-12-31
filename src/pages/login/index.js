import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Typography } from '@material-ui/core'

import { signInRequest } from "../../store/modules/auth/actions";
import LoginForm from './partials/forms/loginForm'
import { useStyles } from './styles'

import Logo from '../../assets/images/logo_light.svg'

export default function Login() {
  const classes = useStyles()
  const dispatch = useDispatch();

  const pending = useSelector(state => state.auth.status.post.pending)

  function handleSubmit(params) {
    const { email, password } = params
    dispatch(signInRequest(email, password))
  }

  return (
    <div className={classes.root}>
      <div className={classes.painelRight}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={Logo} alt='logo' className={classes.logoTitle} />
          <Typography variant='h4' color='primary'>My Way</Typography>
        </div>
        <LoginForm onSubmit={handleSubmit} submitting={pending} />
      </div>
    </div>
  )
}
