import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { Button, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { TiUserOutline, TiPhone, TiMail } from "react-icons/ti";
import SearchIcon from '@material-ui/icons/Search';

import jwt_decode from "jwt-decode";

import { useStyles, StyledAnnoucementCard, StyledFilter } from './styles'
import { getAlltranslatorsRequest, getTranslatorByIdRequest, getTranslatorsBySearchRequest } from '../../store/modules/translator/actions';
import TranslatorCard from '../../components/translatorCard';
import { getTranslatorlanguageRequest } from '../../store/modules/language/actions';

export default function AnuncioTradutor() {
  const translators = useSelector(state => state.translator.data)
  const announcements = useSelector(state => state.translator.announcements)
  const dispatch = useDispatch();
  const classes = useStyles()
  const history = useHistory()
  // const languages = useSelector(state => state.language.languages)

  const token = useSelector(state => state.auth.token)
  const [userInfo, setUserInfo] = useState({})
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const handleAnnouncementOpen = translator => {
    setTitle(translator.title)
    setSubtitle(translator.subtitle)
    setPrice(translator.price)
    setDescription(translator.description)
    setUser(translator.user)
    setPhone(translator.phone)
    setEmail(translator.user?.email)
    setOpenModal(true)
  };

  const handleClose = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])

  useEffect(() => {
    dispatch(getAlltranslatorsRequest())
    dispatch(getTranslatorByIdRequest(userInfo.sub))
    dispatch(getTranslatorsBySearchRequest())
    dispatch(getTranslatorlanguageRequest())
  }, [userInfo, dispatch])

  const [value, setValue] = useState('')
  // const [language, setLanguage] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSearch = () => {
    dispatch(getTranslatorsBySearchRequest(value))
  }

  // const handleLanguageChange = e => {
  //   setLanguage(e.target.value)
  // }

  return (
    <div className={classes.root}>
      <div className={classes.content}>

        <div className={classes.titleCurso}>
          <Typography variant="h4">Meus Anúncios</Typography>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 5 }} >
          < Button variant="outlined" color="primary" onClick={() => history.push('/cadastro-tradutor')}>
            Criar um novo anúncio
          </Button>
        </div>
        <div className={classes.borderMyAnnouncements}>
          <TranslatorCard items={announcements} />
        </div>

        <StyledFilter style={{ marginTop: 50 }}>
          <TextField
            name="tradutor"
            id="tradutor"
            label="Pesquisar por anúncios de tradutores"
            onChange={handleChange}
            value={value}
            fullWidth
          />
          <Button onClick={handleSearch} style={{ marginTop: '1rem', padding: '1px' }} variant="contained" color="primary" disableElevation>
            Buscar Idioma<SearchIcon />
          </Button>
        </StyledFilter>

        <div className={classes.titleCurso}>
          <Typography variant="h4" style={{ marginTop: '2rem' }}>Anúncios de Tradutores</Typography>
        </div>

        <div className={classes.list}>
          {
            (translators?.length > 0) ? translators.map(translator => (
              <StyledAnnoucementCard key={translator.id} onClick={() => handleAnnouncementOpen(translator)}>

                <Typography color="secondary" className={classes.title} variant="h5">
                  {translator.title}
                </Typography>

                <hr className={classes.hr} />

                <Typography style={{ color: "#8C8C8C" }}>
                  {translator.subtitle}
                </Typography>


                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography color="primary"><TiPhone />
                    {translator.phone}
                  </Typography>
                </div>

                <div style={{ alignItems: 'center' }}>
                  <Typography color="primary" >
                    <TiUserOutline />
                    {translator.user?.firstName} {translator.user?.lastName}
                  </Typography>
                </div>


                <hr className={classes.hr} />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography color="secondary">{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(translator.price)}/hr</Typography>
                </div>
              </StyledAnnoucementCard>
            )) : (<div>Nada foi encontrado</div>)
          }
          <Dialog
            open={openModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title-2"
            aria-describedby="alert-dialog-description-2"
          >
            <DialogTitle id="alert-dialog-title-2">{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description-2" style={{ color: '#000' }}>
                {subtitle}
              </DialogContentText>
              <DialogContentText id="alert-dialog-description-2">
                {description}
              </DialogContentText>
              <DialogContentText>
                <Typography color="primary"><TiPhone />
                  {phone}
                </Typography>
              </DialogContentText>
              <DialogContentText>
                <Typography color="primary"><TiMail />
                  {email}
                </Typography>
              </DialogContentText>

              <DialogContentText style={{ alignItems: 'center' }}>
                <Typography color="primary" >
                  <TiUserOutline />
                  {user?.firstName} {user?.lastName}
                </Typography>
              </DialogContentText>
              <Typography variant="body1" color="secondary">{Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(price)}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" variant='outlined' disableElevation>
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div >
    </div >
  )

}