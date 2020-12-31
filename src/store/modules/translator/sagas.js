import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import type from '../../types'
import {
    createAnnouncementFailure,
    createAnnouncementSuccess,
    getTranslatorByIdFailure,
    getTranslatorByIdSuccess,
    getAlltranslatorsFailure,
    getAlltranslatorsSuccess,
    getTranslatorsBySearchSuccess,
    getTranslatorsBySearchFailure,
    editTranslatorSuccess,
    editTranslatorFailure,
    deleteTranslatorSuccess,
    deleteTranslatorFailure
} from "./actions";

export function* getTranslatorsBySearch(params) {
    const { userInput = '' } = params
    try {
        const response = yield call(api.get, `translatorAnnouncements/search?field=${userInput}&filter=`)
        const data = response.data
        yield put(getTranslatorsBySearchSuccess(data.result))
    } catch (error) {
        yield put(getTranslatorsBySearchFailure(error))
    }
}

export function* getTranslators() {
    try {
        const response = yield call(api.get, `translatorAnnouncements`)
        const data = response.data
        yield put(getAlltranslatorsSuccess(data))
    } catch (error) {
        yield put(getAlltranslatorsFailure(error))
    }
}

export function* getTranslatorById(translator) {
    try {
        const response = yield call(api.get, `translatorAnnouncements/user/${translator.payload}`)
        const data = response.data
        yield put(getTranslatorByIdSuccess(data))
    } catch (error) {
        yield put(getTranslatorByIdFailure())
    }
}

export function* createTranslatorAnnouncement({ payload, userId }) {
    const { title, subtitle, description, price, phone } = payload

    try {
        yield call(api.post, '/translatorAnnouncements', { title, subtitle, description, price, phone, user: { id: userId } })
        yield put(createAnnouncementSuccess())
        toast.success('Anúncio criado com sucesso')
    } catch (error) {
        yield put(createAnnouncementFailure(error))
        toast.error('Algo deu errado na criação do seu anúncio. Porfavor, tente novamente!')
    }
}

export function* editTranslator({ payload, userId, translatorId, }) {
    const { title, subtitle, description, price, phone } = payload
    try {
        yield call(api.put, `/translatorAnnouncements/${translatorId}`, { id: translatorId, title, subtitle, description, price, phone, user: { id: userId } })
        yield put(editTranslatorSuccess())
        toast.success('Anúncio editado com sucesso')
    } catch (error) {
        yield put(editTranslatorFailure())
        toast.error('Não foi possível editar o curso, tente novamente')
    }
}

export function* deleteTranslator({ translatorId }) {
    try {
        yield call(api.delete, `/translatorAnnouncements/${translatorId}`)
        yield put(deleteTranslatorSuccess())
        toast.success('Anúncio excluido com sucesso')
    } catch (error) {
        yield put(deleteTranslatorFailure())
        toast.error('Não foi possível excluir o curso, tente novamente.')
    }
}

export default all([
    takeLatest(type.TRANSLATOR_ALL_REQUEST, getTranslators),
    takeLatest(type.TRANSLATOR_BY_ID_REQUEST, getTranslatorById),
    takeLatest(type.TRANSLATOR_SEARCH_REQUEST, getTranslatorsBySearch),
    takeLatest(type.TRANSLATOR_CREATE_REQUEST, createTranslatorAnnouncement),
    takeLatest(type.TRANSLATOR_EDIT_REQUEST, editTranslator),
    takeLatest(type.TRANSLATOR_DELETE_REQUEST, deleteTranslator)
])