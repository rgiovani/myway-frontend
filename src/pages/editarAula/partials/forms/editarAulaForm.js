import React, { useEffect, useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import { useHistory } from 'react-router'

const schema = Yup.object().shape({
  title: Yup.string().required('Título da aula é obrigatório').max(120),
  contentType: Yup.string().required('Tipo do conteúdo é obrigatório'),
  description: Yup.string().required('Descrição da aula é obrigatório').max(110),
  file: Yup.mixed().nullable(),
  link: Yup.string().nullable()
})

const useStyles = makeStyles(theme => ({
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
  file: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '3rem'
  },
  fileGroup: {
    display: 'flex',
    alignItems: 'center'
  },
}))

export default function EditarAulaForm({ onSubmit, submitting, formData }) {
  const [file, setFile] = useState()
  const history = useHistory()
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      title: '',
      contentType: '',
      description: '',
      file: '',
      link: ''
    },
    validationSchema: schema,
    onSubmit,
    formData
  })

  useEffect(() => {
    formik.setFieldValue('title', formData.title)
    formik.setFieldValue('contentType', formData.contentType)
    formik.setFieldValue('description', formData.description)
    formik.setFieldValue('file', formData.file)
    formik.setFieldValue('link', formData.link)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFileChange = event => {
    formik.setFieldValue('file', event)
    setFile(URL.createObjectURL(event))
  }

  return (
    <form onSubmit={formik.handleSubmit}>

      <div>
        <InputLabel id="contentType">Tipo do conteúdo</InputLabel>
        <Select labelId="contentType" id="contentType" value={formik.values.contentType} name='contentType' onChange={formik.handleChange} fullWidth>
          <MenuItem value=''>Selecione um tipo de conteúdo</MenuItem>
          <MenuItem value='VIDEO'>Vídeo</MenuItem>
          <MenuItem value='PRACTICAL'>Pratico</MenuItem>
        </Select>
        {formik.touched.contentType && formik.errors.contentType ? (
          <Typography style={{ color: 'red' }}>{formik.errors.contentType}</Typography>
        ) : null}
      </div>

      <div className={classes.grid}>
        <div>
          <TextField
            name="title"
            placeholder="Digite o título da aula"
            label="Título"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <Typography style={{ color: 'red' }}>{formik.errors.title}</Typography>
          ) : null}
        </div>

        <div>
          <TextField
            name="description"
            placeholder="Digite a descrição da aula"
            label="Descrição"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <Typography style={{ color: 'red' }}>{formik.errors.description}</Typography>
          ) : null}
        </div>
      </div>

      {formik.values.contentType === 'VIDEO' && (
        <div>
          <div className={classes.file}>
            <p className='image-title'>Arquivo da aula</p>
            <div className={classes.fileGroup}>
              {file && <video poster={file} alt={formik.values.file} className='image' style={{ marginRight: '2rem' }} />}
              <div>
                <label htmlFor='file' className='custom-file-upload '>Fazer upload do arquivo</label>
                <input id="file" name="file" type="file" onChange={e => handleFileChange(e.currentTarget.files[0])} />
                {formik.touched.file && formik.errors.file ? (
                  <Typography style={{ color: 'red' }}>{formik.errors.file}</Typography>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
      {formik.values.contentType === 'PRACTICAL' && (
        <div style={{ marginTop: '1rem' }}>
          <TextField
            name="link"
            placeholder="Link para um formulário ou ambiente prático"
            label="Link da aula"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.link || ''}
          />
          {formik.touched.link && formik.errors.link ? (
            <Typography style={{ color: 'red' }}>{formik.errors.link}</Typography>
          ) : null}
        </div>
      )}


      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
        <Button variant="outlined" color="primary" disableElevation onClick={() => history.goBack()}>
          Cancelar
          </Button>

        <Button variant="contained" color="primary" disableElevation type="submit">
          {submitting ? 'Salvando...' : 'Salvar aula'}
        </Button>
      </div>
    </form>
  )
}