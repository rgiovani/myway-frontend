import produce from 'immer'

import type from '../../types'

const INITIAL_STATE = {
  data: [],
  course: {},
  contentList: [],
  englishCourses: [],
  finishedContents: [],
  status: {
    get: { error: null, pending: false },
    post: { error: null, pending: false },
    delete: { error: null, pending: false },
    put: { error: null, pending: false },
  },
}

export default function courses(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case type.COURSES_REQUEST: {
        draft.data = []
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.COURSES_SUCCESS: {
        draft.data = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.COURSES_FAILURE: {
        break
      }
      case type.ENGLISH_COURSES_REQUEST: {
        draft.englishCourses = []
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.ENGLISH_COURSES_SUCCESS: {
        draft.englishCourses = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.ENGLISH_COURSES_FAILURE: {
        break
      }
      case type.COURSE_BY_ID_REQUEST: {
        draft.course = {}
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.COURSE_BY_ID_SUCCESS: {
        draft.course = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.COURSE_BY_ID_FAILURE: {
        break
      }
      case type.ALL_COURSE_CONTENT_REQUEST: {
        draft.contentList = []
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.ALL_COURSE_CONTENT_SUCCESS: {
        draft.contentList = action.payload
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.ALL_COURSE_CONTENT_FAILURE: {
        break
      }
      case type.COURSE_SAVE_REQUEST: {
        draft.status.post.pending = true
        draft.status.post.error = null
        break
      }
      case type.COURSE_SAVE_SUCCESS: {
        draft.status.post.pending = false
        draft.status.post.error = null
        break
      }
      case type.COURSE_SAVE_FAILURE: {
        break
      }
      case type.COURSE_EDIT_REQUEST: {
        draft.status.put.pending = true
        draft.status.put.error = null
        break
      }
      case type.COURSE_EDIT_SUCCESS: {
        draft.status.put.pending = false
        draft.status.put.error = null
        break
      }
      case type.COURSE_EDIT_FAILURE: {
        break
      }
      case type.COURSE_DELETE_REQUEST: {
        draft.status.delete.pending = true
        draft.status.delete.error = null
        break
      }
      case type.COURSE_DELETE_SUCCESS: {
        draft.status.delete.pending = false
        draft.status.delete.error = null
        break
      }
      case type.COURSE_DELETE_FAILURE: {
        break
      }
      case type.COURSE_SAVE_CONTENT_VIDEO_REQUEST: {
        draft.status.post.pending = true
        draft.status.post.error = null
        break
      }
      case type.COURSE_SAVE_CONTENT_VIDEO_SUCCESS: {
        draft.status.post.pending = false
        draft.status.post.error = null
        break
      }
      case type.COURSE_SAVE_CONTENT_VIDEO_FAILURE: {
        break
      }
      case type.COURSE_SAVE_CONTENT_PRATICAL_REQUEST: {
        draft.status.post.pending = true
        draft.status.post.error = null
        break
      }
      case type.COURSE_SAVE_CONTENT_PRATICAL_SUCCESS: {
        draft.status.post.pending = false
        draft.status.post.error = null
        break
      }
      case type.COURSE_SAVE_CONTENT_PRATICAL_FAILURE: {
        break
      }
      case type.COURSE_EDIT_CONTENT_REQUEST: {
        draft.status.put.pending = true
        draft.status.put.error = null
        break
      }
      case type.COURSE_EDIT_CONTENT_SUCCESS: {
        draft.status.put.pending = false
        draft.status.put.error = null
        break
      }
      case type.COURSE_EDIT_CONTENT_FAILURE: {
        break
      }
      case type.COURSE_EDIT_PRACTICAL_CONTENT_REQUEST: {
        draft.status.put.pending = true
        draft.status.put.error = null
        break
      }
      case type.COURSE_EDIT_PRACTICAL_CONTENT_SUCCESS: {
        draft.status.put.pending = false
        draft.status.put.error = null
        break
      }
      case type.COURSE_EDIT_PRACTICAL_CONTENT_FAILURE: {
        break
      }
      case type.COURSE_DELETE_CONTENT_REQUEST: {
        draft.status.delete.pending = true
        draft.status.delete.error = null
        break
      }
      case type.COURSE_DELETE_CONTENT_SUCCESS: {
        draft.status.delete.pending = false
        draft.status.delete.error = null
        break
      }
      case type.COURSE_DELETE_CONTENT_FAILURE: {
        break
      }
      case type.CONTENT_CHANGE_STATUS_REQUEST: {
        draft.finishedContents = []
        draft.status.post.pending = true
        draft.status.post.error = null
        break
      }
      case type.CONTENT_CHANGE_STATUS_SUCCESS: {
        draft.finishedContents = action.payload
        draft.status.post.pending = false
        draft.status.post.error = null
        break
      }
      case type.CONTENT_CHANGE_STATUS_FAILURE: {
        break
      }
      default:
    }
  })
}
