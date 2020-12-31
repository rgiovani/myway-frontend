import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { TextField, Typography, Button } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useStyles } from './styles'
import './styles.css'

const schema = Yup.object().shape({
  specialty: Yup.string().required('Especialidades é obrigatório').max(75),
  about: Yup.string().required('Sobre é obrigatório').max(255),
  profilePhoto: Yup.mixed().required('Arquivo é obrigatório'),
  donationLink: Yup.string().nullable().max(255)
})

export default function TornarProfessorForm({ onSubmit, submitting }) {
  const classes = useStyles()
  const history = useHistory()
  const [image, setImage] = useState()

  const formik = useFormik({
    initialValues: {
      specialty: '',
      about: '',
      profilePhoto: '',
      donationLink: ''
    },
    validationSchema: schema,
    onSubmit
  })

  const handleImageChange = event => {
    formik.setFieldValue('profilePhoto', event)
    setImage(URL.createObjectURL(event))
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.grid}>
        <div>
          <TextField
            name="specialty"
            placeholder="Quais são as suas especialidades?"
            label="Especialidade"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classes.input}
            value={formik.values.specialty}
          />
          {formik.touched.specialty && formik.errors.specialty ? (
            <Typography className={classes.error}>{formik.errors.specialty}</Typography>
          ) : null}
        </div>

        <div>
          <TextField
            name="about"
            placeholder="Nos conte um pouco sobre você"
            label="Sobre você"
            fullWidth
            multiline
            rows={2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classes.input}
            value={formik.values.about}
          />
          {formik.touched.about && formik.errors.about ? (
            <Typography className={classes.error}>{formik.errors.about}</Typography>
          ) : null}
        </div>

        <div>
          <TextField
            name="donationLink"
            label="Link para doação"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classes.input}
            value={formik.values.donationLink}
          />
          {formik.touched.donationLink && formik.errors.donationLink ? (
            <Typography className={classes.error}>{formik.errors.donationLink}</Typography>
          ) : null}
        </div>

      </div>

      <div className={classes.file}>
        <p className='image-title'>Imagem de Perfil</p>
        <div className={classes.fileGroup}>
          {image && <img src={image} alt={formik.values.profilePhoto} className='image' style={{ marginRight: '2rem' }} />}
          <div>
            <label htmlFor='profilePhoto' className='custom-file-upload '>Fazer upload do arquivo</label>
            <input id="profilePhoto" name="profilePhoto" type="file" onChange={e => handleImageChange(e.currentTarget.files[0])} />
            {formik.touched.profilePhoto && formik.errors.profilePhoto ? (
              <Typography className={classes.error}>{formik.errors.profilePhoto}</Typography>
            ) : null}
          </div>
        </div>
      </div>


      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
        <Button variant="outlined" color="primary" disableElevation onClick={() => history.push('/')}>
          Cancelar
          </Button>

        <Button variant="contained" color="primary" disableElevation type="submit">
          {submitting ? 'Salvando...' : 'Tornar-se Professor'}
        </Button>
      </div>
    </form >
  )
}