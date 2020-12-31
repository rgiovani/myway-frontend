import React, { useEffect, useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { languagesGetRequest } from '../../../../store/modules/language/actions'

const schema = Yup.object().shape({
  title: Yup.string().required('Título do curso é obrigatório').max(120),
  subtitle: Yup.string().required('Subtítulo do curso é obrigatório').max(100),
  description: Yup.string().required('Descrição do curso é obrigatório').max(255),
  studentPrerequisites: Yup.string().required('Pré-requisito do curso é obrigatório').max(150),
  studentTargets: Yup.string().required('Aluno-alvo do curso é obrigatório').max(150),
  goals: Yup.string().required('Meta do curso é obrigatório').max(255),
  level: Yup.string().required('Nível do curso é obrigatório'),
  language: Yup.string().required('Idioma do curso é obrigatório').nullable().max(30),
  courseImage: Yup.mixed().required('Imagem do curso é obrigatória'),
  totalScore: Yup.number().nullable(),
  numberOfRatings: Yup.number().nullable()
})

const useStyles = makeStyles(theme => ({
  file: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '3rem'
  },
  fileGroup: {
    display: 'flex',
    alignItems: 'center'
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
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'auto  auto auto',
    marginTop: '2rem',
    columnGap: '4rem',
    rowGap: '3rem',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },
}))

export default function CriarCursoForm({ onSubmit, submitting }) {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [image, setImage] = useState()
  const formik = useFormik({
    initialValues: {
      title: '',
      subtitle: '',
      description: '',
      studentPrerequisites: '',
      studentTargets: '',
      goals: '',
      level: '',
      language: '',
      courseImage: '',
      totalScore: 0,
      numberOfRatings: 0
    },
    validationSchema: schema,
    onSubmit,
  })

  const languages = useSelector(state => state.language.data)

  const handleImageChange = event => {
    formik.setFieldValue('courseImage', event)
    setImage(URL.createObjectURL(event))
  }

  useEffect(() => {
    dispatch(languagesGetRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.grid}>
        <div>
          <TextField
            name="title"
            placeholder="Digite o título do curso"
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
            name="subtitle"
            placeholder="Digite o subtítulo do curso"
            label="Subtítulo"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subtitle}
          />
          {formik.touched.subtitle && formik.errors.subtitle ? (
            <Typography style={{ color: 'red' }}>{formik.errors.subtitle}</Typography>
          ) : null}
        </div>
      </div>
      <div>
        <TextField
          name="description"
          placeholder="Digite a descrição do curso"
          label="Descrição"
          fullWidth
          multiline
          rows={4}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <Typography style={{ color: 'red' }}>{formik.errors.description}</Typography>
        ) : null}
      </div>

      <Typography color='secondary' style={{ marginTop: '1rem', marginBottom: '1rem' }}>Informações básicas do curso</Typography>
      <div className={classes.grid}>
        <div>
          <Autocomplete id="combo-box-demo" onChange={(event, newValue) => {
            formik.setFieldValue('language', newValue);
          }} value={formik.values.language} options={languages.map(language => language.name)} freeSolo fullWidth renderInput={(params) => <TextField {...params} label="Idioma do curso" name='language' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.language} />} />
          {formik.touched.language && formik.errors.language ? (
            <Typography style={{ color: 'red' }}>{formik.errors.language}</Typography>
          ) : null}
        </div>
        <div>
          <InputLabel id="level">Nível do curso</InputLabel>
          <Select labelId="level" id="level" value={formik.values.level} name='level' onChange={formik.handleChange} fullWidth>
            <MenuItem value=''>Selecione um nível</MenuItem>
            <MenuItem value='INICIANTE'>Iniciante</MenuItem>
            <MenuItem value='INTERMEDIATE'>Intermediário</MenuItem>
            <MenuItem value='ADVANCED'>Avançado</MenuItem>
          </Select>
          {formik.touched.level && formik.errors.level ? (
            <Typography style={{ color: 'red' }}>{formik.errors.level}</Typography>
          ) : null}
        </div>
      </div>

      <div className={classes.file}>
        <p className='image-title'>Imagem do curso</p>
        <div className={classes.fileGroup}>
          {image && <img src={image} alt={formik.values.courseImage} className='image' style={{ marginRight: '2rem' }} />}
          <div>
            <label htmlFor='courseImage' className='custom-file-upload '>Fazer upload do arquivo</label>
            <input id="courseImage" name="courseImage" type="file" onChange={e => handleImageChange(e.currentTarget.files[0])} />
            {formik.touched.courseImage && formik.errors.courseImage ? (
              <Typography style={{ color: 'red' }}>{formik.errors.courseImage}</Typography>
            ) : null}
          </div>
        </div>
      </div>

      <div className={classes.grid2}>
        <div>
          <TextField
            name="studentPrerequisites"
            placeholder="Digite o pré-requisito do curso"
            label="Pré-requisito"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.studentPrerequisites}
          />
          {formik.touched.studentPrerequisites && formik.errors.studentPrerequisites ? (
            <Typography style={{ color: 'red' }}>{formik.errors.studentPrerequisites}</Typography>
          ) : null}
        </div>

        <div>
          <TextField
            name="studentTargets"
            placeholder="Digite o alvo do curso"
            label="Alunos-alvo"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.studentTargets}
          />
          {formik.touched.studentTargets && formik.errors.studentTargets ? (
            <Typography style={{ color: 'red' }}>{formik.errors.studentTargets}</Typography>
          ) : null}
        </div>

        <div>
          <TextField
            name="goals"
            placeholder="Digite a meta do curso"
            label="Meta do curso"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.goals}
          />
          {formik.touched.goals && formik.errors.goals ? (
            <Typography style={{ color: 'red' }}>{formik.errors.goals}</Typography>
          ) : null}
        </div>
      </div>


      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
        <Button variant="outlined" color="primary" disableElevation onClick={() => history.goBack()}>
          Cancelar
          </Button>

        <Button variant="contained" color="primary" disableElevation type="submit">
          {submitting ? 'Salvando...' : 'Salvar curso'}
        </Button>
      </div>
    </form>
  )
}
