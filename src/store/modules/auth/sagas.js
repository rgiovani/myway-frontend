import {toast} from 'react-toastify'

import { takeLatest, call, put, all } from 'redux-saga/effects'

import api from '../../../services/api'
import type from '../../types'
import {signInSuccess, signInFailure, logOutSuccess, logOutFailure, signUpFailure, signUpSuccess} from "./actions";

export function* signIn(params) {
  const {email, password} = params.payload
  try {
    const response = yield call(api.post, '/auth/login', {email, password})
    const data = response.data
    yield put(signInSuccess(data))
  } catch(error) {
    yield put(signInFailure(error))
    toast.error('Algo deu errado ao realizar o login. Tente novamente')
  }
}

export function* signUp(params) {
  const {firstName, lastName, email, password} = params.payload
  try {
    yield call(api.post, '/auth/signup', {firstName, lastName, email, password})
    yield put(signUpSuccess())
    toast.success('Conta criada com sucesso')
  } catch(error) {
    yield put(signUpFailure(error))
    toast.error('Algo deu errado criar a sua conta. Tente novamente!')
  }
}

export function* logOut() {
  try {
    yield put(logOutSuccess())
    localStorage.removeItem('persist:auth')
  } catch (error) {
    yield put(logOutFailure(error))
    toast.error('Algo deu errado ao realizar o logout. Tente novamente')
  }
}

export default all([takeLatest(type.AUTH_SIGNIN_REQUEST, signIn),takeLatest(type.AUTH_SIGNUP_REQUEST, signUp), takeLatest(type.AUTH_LOGOUT_REQUEST, logOut)])
