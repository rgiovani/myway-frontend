import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import { TextField, Typography, makeStyles, Button } from '@material-ui/core'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import * as Yup from 'yup'


const schema = Yup.object().shape({
  title: Yup.string().required('Título do anúncio é obrigatório'),
  subtitle: Yup.string().required('Subtitulo do anúncio é obrigatório'),
  description: Yup.string().required('Descrição do anúncio é obrigatório'),
  price: Yup.number().required('Valor é obrigatório').min(0, 'Valor não pode ser negativo').max(500, 'Valor não pode ser maior que 500'),
  phone: Yup.string().required('Número de telefone é obrigatório'),
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
    marginTop: '2rem',
    columnGap: '4rem',
    rowGap: '3rem',
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

export default function EditarForm({ onSubmit, submitting, formData }) {
  const classes = useStyles()
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      title: '',
      subtitle: '',
      description: '',
      price: 0,
      phone: ''
    },
    validationSchema: schema,
    onSubmit,
    formData
  })

  useEffect(() => {
    formik.setFieldValue('title', formData.title)
    formik.setFieldValue('subtitle', formData.subtitle)
    formik.setFieldValue('description', formData.description)
    formik.setFieldValue('price', formData.price)
    formik.setFieldValue('phone', formData.phone)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.grid}>
          <div>
            <TextField
              name="title"
              placeholder="Digite o titulo do anúncio"
              label="Título"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.input}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <Typography className={classes.error}>{formik.errors.title}</Typography>
            ) : null}
          </div>

          <div>
            <TextField
              name="subtitle"
              placeholder="Digite o subtitulo do anúncio"
              label="Subtitulo"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.input}
              value={formik.values.subtitle}
            />
            {formik.touched.subtitle && formik.errors.subtitle ? (
              <Typography className={classes.error}>{formik.errors.subtitle}</Typography>
            ) : null}
          </div>

          <div>
            <TextField
              name="description"
              placeholder="Digite a descrição do anúncio"
              label="Descrição"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.input}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <Typography className={classes.error}>{formik.errors.description}</Typography>
            ) : null}
          </div>

          <div>
            <TextField
              name="price"
              placeholder="Digite o valor do anúncio"
              label="Valor"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.input}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <Typography className={classes.error}>{formik.errors.price}</Typography>
            ) : null}
          </div>

          <div>
            <TextField
              name="phone"
              placeholder="Digite o telefone para contanto"
              label="Telefone"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.input}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <Typography className={classes.error}>{formik.errors.phone}</Typography>
            ) : null}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
          <Button variant="outlined" color="primary" disableElevation onClick={() => history.push('/anuncio-tradutor')}>
            Cancelar
          </Button>

          <Button variant="contained" color="primary" disableElevation type="submit" >
            {submitting ? 'Salvando...' : 'Editar e salvar anúncio'}
          </Button>
        </div>
      </form>
    </div>
  )
}


EditarForm.defaultProps = {
  onSubmit: () => { },
  submitting: false,
}

EditarForm.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
}