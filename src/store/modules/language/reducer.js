import produce from 'immer'

import type from '../../types'

const INITIAL_STATE = {
  data: [],
  languages: [],
  status: {
    get: { error: null, pending: false },
  },
}

export default function languages(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case type.LANGUAGE_REQUEST: {
        draft.data = []
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.LANGUAGE_SUCCESS: {
        draft.data = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.LANGUAGE_FAILURE: {
        break
      }

      case type.TRANSLATOR_LANGUAGE_REQUEST: {        // TRANSLATORS
        draft.languages = []
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.TRANSLATOR_LANGUAGE_SUCCESS: {
        draft.languages = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.TRANSLATOR_LANGUAGE_FAILURE: {
        break
      }
      default:
    }
  })
}
