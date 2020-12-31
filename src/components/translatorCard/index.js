import React from 'react';
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { Typography, Button, DialogTitle, DialogContent, DialogActions, DialogContentText, Dialog } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Delete } from '@material-ui/icons';
import { deleteTranslatorRequest } from '../../store/modules/translator/actions';

import {
    useStyles,
    MyStyledAnnoucementCard,
} from './styles';

SwiperCore.use([Navigation]);

export default function TranslatorCard({ items, slidesPerView, spaceBetween }) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch()

    const [deleteId, setDeleteId] = React.useState();

    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);


    const handleDeleteCourseOpen = content => {
        setOpenDeleteModal(true);
        setDeleteId(content)
    };

    const handleDeleteCourseClose = () => {
        setOpenDeleteModal(false)
    }

    const handleDelete = item => {
        dispatch(deleteTranslatorRequest(item))
        setOpenDeleteModal(false)
        window.location.reload(false);
    }

    const handleEdit = item => {
        history.push('/editar-anuncio-tradutor', item);
    }

    return (
        <Swiper breakpoints={{
            320: {
                width: 320,
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                width: 768,
                slidesPerView: 3,
            },
        }} spaceBetween={spaceBetween} slidesPerView={slidesPerView} navigation>
            {items.length > 0 ? (
                items.map(item => (
                    <SwiperSlide key={item.id} className={classes.translator}>
                        <MyStyledAnnoucementCard key={item.id}>
                            <Typography variant="h6" color="secondary" className={classes.title}>
                                {item.title}
                            </Typography>
                            <div className={classes.price}>
                                <Typography color="primary">{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.price)}
                                </Typography>
                            </div>

                            <div style={{ flexDirection: 'row' }}>
                                <hr className={classes.hr} />
                                <Button style={{ marginTop: 15, marginRight: 20 }} onClick={() => handleEdit(item)}>
                                    <EditIcon style={{ color: '#0B3144', fontSize: '30px' }} />
                                </Button>
                                <Button style={{ marginTop: 15, marginLeft: 20 }} onClick={() => handleDeleteCourseOpen(item.id)}>
                                    <DeleteOutlineIcon style={{ color: '#C42126', fontSize: '30px' }} />
                                </Button>
                            </div>

                            <Dialog
                                open={openDeleteModal}
                                onClose={handleDeleteCourseClose}
                                aria-labelledby="alert-dialog-title-2"
                                aria-describedby="alert-dialog-description-2"
                            >
                                <DialogTitle id="alert-dialog-title-2">Deseja realmente deletar este anúncio ?</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description-2">
                                        Uma vez deletado não será possível voltar atrás.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleDeleteCourseClose} color="primary" variant='outlined' disableElevation>
                                        Cancelar
          </Button>
                                    <Button onClick={() => handleDelete(deleteId)} disableElevation startIcon={<Delete />} variant="outlined" style={{ borderColor: '#C42126', color: '#C42126' }}>
                                        Excluir
          </Button>
                                </DialogActions>
                            </Dialog>

                        </MyStyledAnnoucementCard>
                    </SwiperSlide>
                ))
            ) : (
                    <div className={classes.noAnnouncements}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Parece que você não possui nenhum anúncio no momento
                            </Typography>
                    </div>
                )
            }
        </Swiper >
    )
}

TranslatorCard.defaultProps = {
    items: [],
    slidesPerView: 5,
    spaceBetween: 20,
}

TranslatorCard.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
            price: PropTypes.number,
        })
    ),
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number,
}
