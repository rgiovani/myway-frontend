import React from 'react'

import { TextField, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  firstName: Yup.string().required('Nome é obrigatório'),
  lastName: Yup.string().required('Sobrenome é obrigatório'),
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'auto  auto',
    columnGap: '1rem',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },
  input: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

export default function SignupForm({ onSubmit, submitting }) {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit,
  })

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.grid}>
          <div>
            <TextField
              name="firstName"
              id="firstName"
              placeholder="Digite seu nome"
              label="Nome"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.input}
              value={formik.values.firstName}
              style={{ marginTop: '2rem' }}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Typography className={classes.error}>{formik.errors.firstName}</Typography>
            ) : null}
          </div>
          <div>
            <TextField
              name="lastName"
              id="lastName"
              fullWidth
              placeholder="Digite seu sobrenome"
              label="Sobrenome"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              style={{ marginTop: '2rem' }}
              className={classes.input}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <Typography className={classes.error}>{formik.errors.lastName}</Typography>
            ) : null}
          </div>
        </div>
        <TextField
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          label="E-mail"
          type="email"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{ marginTop: '2rem' }}
        />
        {formik.touched.email && formik.errors.email ? (
          <Typography className={classes.error}>{formik.errors.email}</Typography>
        ) : null}
        <TextField
          name="password"
          id="password"
          placeholder="Digite sua senha"
          label="Senha"
          type="password"
          fullWidth
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
            {submitting ? 'Salvando...' : 'Finalizar cadastro'}
          </Button>
        </div>
      </form>
    </div>
  )
}

SignupForm.defaultProps = {
  onSubmit: () => {},
  submitting: false,
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
}
