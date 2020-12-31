import produce from 'immer'

import type from '../../types'
import { setToken } from '../../../services/api'

const INITIAL_STATE = {
  signed: false,
  token: null,
  status: {
    post: { pending: false, error: null }
  }
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case type.AUTH_SIGNIN_REQUEST: {
        draft.signed = false
        draft.token = null
        draft.status.post.pending = true
        draft.status.post.error = null
        break
      }
      case type.AUTH_SIGNIN_SUCCESS: {
        draft.signed = true
        draft.token = action.payload
        draft.status.post.pending = false
        draft.status.post.error = null
        setToken(action.payload.access_token)
        break
      }
      case type.AUTH_SIGNIN_FAILURE: {
        draft.signed = false
        draft.token = null
        draft.status.post.pending = false
        draft.status.post.error = action.payload
        break
      }
      case type.AUTH_SIGNUP_REQUEST: {
        draft.status.post.pending = true
        draft.status.post.error = null
        break
      }
      case type.AUTH_SIGNUP_SUCCESS: {
        draft.status.post.pending = false
        draft.status.post.error = null
        break
      }
      case type.AUTH_SIGNUP_FAILURE: {
        draft.status.post.pending = false
        draft.status.post.error = action.payload
        break
      }
      case type.AUTH_LOGOUT_REQUEST: {
        break
      }
      case type.AUTH_LOGOUT_SUCCESS: {
        draft.signed = false
        draft.token = null
        break
      }
      case type.AUTH_LOGOUT_FAILURE: {
        break
      }
      default:
    }
  })
}
