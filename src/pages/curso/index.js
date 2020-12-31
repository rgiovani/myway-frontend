import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'


import { Typography, Button, IconButton, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { Delete, Edit } from '@material-ui/icons';

import { useStyles } from './styles'
import { getCourseByIdRequest, deleteContentRequest, deleteCourseRequest } from '../../store/modules/courses/actions'

import { apiURL } from '../../services/api'

export default function CriarCurso() {
  const classes = useStyles()
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()

  const [deleteId, setDeleteId] = React.useState();

  const [open, setOpen] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const handleClickOpen = content => {
    setOpen(true);
    setDeleteId(content.id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteCourseOpen = content => {
    setOpenDeleteModal(true);
    setDeleteId(content)
  };

  const handleDeleteCourseClose = () => {
    setOpenDeleteModal(false)
  }

  const course = useSelector(state => state.course.course)

  useEffect(() => {
    dispatch(getCourseByIdRequest(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleContentEdit = content => {
    history.push('/editar-aula', content)
  }

  const handleContentDelete = id => {
    dispatch(deleteContentRequest(id))
    setOpen(false)
  }

  const handleEdit = course => {
    history.push('/editar-curso', course)
  }

  const handleDelete = course => {
    dispatch(deleteCourseRequest(course.teacher?.id, course.id))
    setOpenDeleteModal(false)
    history.goBack()
  }


  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.courseInfos}>
          <img src={`${apiURL}/${course.courseImage?.link}`} alt={course.title} className={classes.courseImage} />
          <div className={classes.info}>
            <Typography variant='h5' color='primary'>{course.title}</Typography>
            <Typography color='secondary' style={{ fontWeight: 400, maxWidth: 270 }}>{course.subtitle}</Typography>
            <div className={classes.rating}>
              <Typography color='secondary' style={{ fontWeight: 100, marginRight: "0.5rem" }} variant="h6">
                {course.totalScore}
              </Typography>
              <Rating name='rating' readOnly value={course.totalScore || 0} />
              <Typography color='secondary' style={{ fontWeight: 100, marginLeft: "0.5rem" }}>
                ({course.numberOfRatings})
              {course.numberOfRatings > 1 ? ' classificações' : ' classificação'}
              </Typography>
            </div>
            <div className={classes.basic}>
              <div className={classes.rating} style={{ marginRight: '1rem' }}>
                <Typography color='secondary'>Idioma do curso: </Typography>
                <Typography color='secondary' style={{ fontWeight: 100, marginLeft: "0.5rem" }}>{course.language ? course.language[0].name : 'Não possui'}</Typography>
              </div>
              <div className={classes.rating}>
                <Typography color='secondary'>Nível do curso: </Typography>
                <Typography color='secondary' style={{ fontWeight: 100, marginLeft: "0.5rem" }}>{course.level}</Typography>
              </div>
            </div>
            <div className={classes.actions}>
              <Button disableElevation variant="outlined" className={classes.rightButton} color='secondary' startIcon={<Edit />} onClick={() => handleEdit(course)}>Editar</Button>
              <Button disableElevation startIcon={<Delete />} variant="outlined" style={{ borderColor: '#C42126', color: '#C42126' }} onClick={() => handleDeleteCourseOpen(course)} >Excluir</Button>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h5' color='secondary'>Aulas</Typography>
            {course.contents?.length > 0 && (
              <Button disableElevation variant="outlined" color='secondary' onClick={() => history.push('/criar-aula', course)}>Criar nova aula</Button>
            )}
          </div>
          {course.contents?.length > 0 ? (
            <div>
              {course.contents?.map(content => (
                <div key={content.id}>
                  <div className={classes.itens} >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant='h6' color='primary'>{content.title}</Typography>
                    </div>
                    <div>
                      <IconButton aria-label="edit" onClick={() => handleContentEdit(content)}>
                        <Edit color='secondary' />
                      </IconButton>
                      <IconButton aria-label="delete" onClick={() => handleClickOpen(content)}>
                        <Delete color='error' />
                      </IconButton>
                    </div>
                  </div>
                  <Divider style={{ marginTop: '0.5rem' }} />
                </div>
              ))}
            </div>
          ) : (
              <div className={classes.noContent}>
                <Typography style={{ color: '#847F7F', opacity: 0.7, marginBottom: '0.5rem' }}>Parece que você não possui nenhuma aula cadastrada no momento.</Typography>
                <Button disableElevation variant="outlined" color='secondary' onClick={() => history.push('/criar-aula', course)}>Criar nova aula</Button>
              </div>
            )}
        </div>


        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Deseja realmente deletar esse conteúdo ?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Uma vez deletado não será possível voltar atrás.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant='outlined' disableElevation>
              Cancelar
          </Button>
            <Button onClick={() => handleContentDelete(deleteId)} disableElevation startIcon={<Delete />} variant="outlined" style={{ borderColor: '#C42126', color: '#C42126' }}>
              Excluir
          </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openDeleteModal}
          onClose={handleDeleteCourseClose}
          aria-labelledby="alert-dialog-title-2"
          aria-describedby="alert-dialog-description-2"
        >
          <DialogTitle id="alert-dialog-title-2">Deseja realmente deletar esse curso ?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description-2">
              Uma vez deletado não será possível voltar atrás.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCourseClose} color="primary" variant='outlined' disableElevation>
              Cancelar
          </Button>
            <Button onClick={() => handleDelete(course)} disableElevation startIcon={<Delete />} variant="outlined" style={{ borderColor: '#C42126', color: '#C42126' }}>
              Excluir
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )

}