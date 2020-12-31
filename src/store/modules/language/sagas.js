import { takeLatest, call, put, all } from 'redux-saga/effects'

import api from '../../../services/api'
import type from '../../types'
import { languagesGetSuccess, languagesGetFailure, getTranslatorlanguageSuccess, getTranslatorlanguageFailure } from "./actions";

export function* getLanguages() {
  try {
    const response = yield call(api.get, `languages/courses`)
    const data = response.data
    yield put(languagesGetSuccess(data))
  } catch (error) {
    yield put(languagesGetFailure(error))
  }
}

export function* getTranslatorLanguages() {
  try {
    const response = yield call(api.get, `languages/translators`)
    const data = response.data
    yield put(getTranslatorlanguageSuccess(data))
  } catch (error) {
    yield put(getTranslatorlanguageFailure(error))
  }
}

export default all(
  [takeLatest(type.LANGUAGE_REQUEST, getLanguages),
  takeLatest(type.TRANSLATOR_LANGUAGE_REQUEST, getTranslatorLanguages)])
