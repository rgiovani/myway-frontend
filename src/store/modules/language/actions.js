import type from '../../types'

export function languagesGetRequest() {
  return {
    type: type.LANGUAGE_REQUEST,
  }
}
export function languagesGetSuccess(data) {
  return {
    type: type.LANGUAGE_SUCCESS,
    payload: data,
  }
}
export function languagesGetFailure() {
  return {
    type: type.LANGUAGE_FAILURE,
  }
}

export function getTranslatorlanguageRequest() {      // TRANSLATORS
  return {
    type: type.TRANSLATOR_LANGUAGE_REQUEST,
  }
}
export function getTranslatorlanguageSuccess(data) {
  return {
    type: type.TRANSLATOR_LANGUAGE_SUCCESS,
    payload: data,
  }
}
export function getTranslatorlanguageFailure() {
  return {
    type: type.TRANSLATOR_LANGUAGE_FAILURE,
  }
}