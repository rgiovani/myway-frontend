import produce from 'immer'

import type from '../../types'

const INITIAL_STATE = {
  professorInfo: {},
  courses: [],
  status: {
    get: { error: null, pending: false },
  },
}

export default function teacher(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case type.TEACHER_BY_ID_REQUEST: {
        draft.professorInfo = {}
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.TEACHER_BY_ID_SUCCESS: {
        draft.professorInfo = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.TEACHER_BY_ID_FAILURE: {
        break
      }
      case type.TEACHER_COURSE_REQUEST: {
        draft.courses = []
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.TEACHER_COURSE_SUCCESS: {
        draft.courses = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.TEACHER_COURSE_FAILURE: {
        break
      }
      default:
    }
  })
}
