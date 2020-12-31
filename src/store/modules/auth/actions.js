import type from '../../types'

export function signInRequest(email, password) {
  return {
    type: type.AUTH_SIGNIN_REQUEST,
    payload: { email, password }
  }
}

export function signInSuccess(data) {
  return {
    type: type.AUTH_SIGNIN_SUCCESS,
    payload: data
  }
}

export function signInFailure(error) {
  return {
    type: type.AUTH_SIGNIN_FAILURE,
    payload: error
  }
}


export function signUpRequest(firstName, lastName, email, password) {
  return {
    type: type.AUTH_SIGNUP_REQUEST,
    payload: { firstName, lastName, email, password }
  }
}

export function signUpSuccess() {
  return {
    type: type.AUTH_SIGNUP_SUCCESS,
  }
}

export function signUpFailure(error) {
  return {
    type: type.AUTH_SIGNUP_FAILURE,
    payload: error
  }
}

export function logOutRequest() {
  return {
    type: type.AUTH_LOGOUT_REQUEST,
  }
}

export function logOutSuccess() {
  return {
    type: type.AUTH_LOGOUT_SUCCESS,
  }
}

export function logOutFailure(error) {
  return {
    type: type.AUTH_LOGOUT_FAILURE,
    payload: error
  }
}

