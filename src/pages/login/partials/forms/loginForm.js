import React from 'react'
import { useHistory } from 'react-router'

import { TextField, Divider, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatório'),
})

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  text: {
    fontSize: '14px',
    marginBottom: '0.5rem',
    color: theme.palette.secondary.main,
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
}))

export default function LoginForm({ onSubmit, submitting }) {
  const classes = useStyles()
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit,
  })

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="email"
          id="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          fullWidth
        />
        {formik.touched.email && formik.errors.email ? (
          <Typography className={classes.error}>{formik.errors.email}</Typography>
        ) : null}
        <TextField
          name="password"
          id="password"
          placeholder="Digite sua senha"
          label="Senha"
          fullWidth
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          style={{ marginTop: '2rem' }}
        />
        {formik.touched.password && formik.errors.password ? (
          <Typography className={classes.error}>{formik.errors.password}</Typography>
        ) : null}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Button variant="contained" color="primary" disableElevation fullWidth type="submit">
            {submitting ? 'Entrando...' : 'Entrar'}
          </Button>
        </div>
        <Divider style={{ marginTop: '1rem' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
          <Typography className={classes.text} align="center">
            Ainda não possui uma conta? Clique aqui para realizar seu cadastro.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            fullWidth
            onClick={() => history.push('/cadastro')}
          >
            Realizar cadastro
          </Button>
        </div>
      </form>
    </div>
  )
}

LoginForm.defaultProps = {
  onSubmit: () => { },
  submitting: false,
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
}
