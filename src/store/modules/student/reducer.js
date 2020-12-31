import produce from 'immer'

import type from '../../types'

const INITIAL_STATE = {
  studentCourses: [],
  studentContents: [],
  isEnrolled: false,
  classContent: {},
  rate: 0,
  status: {
    get: { pending: false, error: null },
    put: { pending: false, error: null }
  }
}

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case type.STUDENT_COURSES_REQUEST: {
        draft.studentCourses = []
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.STUDENT_COURSES_SUCCESS: {
        draft.studentCourses = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.STUDENT_COURSES_FAILURE: {
        break
      }
      case type.STUDENT_CONTENTS_REQUEST: {
        draft.studentContents = []
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.STUDENT_CONTENTS_SUCCESS: {
        draft.studentContents = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.STUDENT_CONTENTS_FAILURE: {
        break
      }
      case type.STUDENT_VERIFY_ENROLLMENT_REQUEST: {
        draft.isEnrolled = false
        break
      }
      case type.STUDENT_VERIFY_ENROLLMENT_SUCCESS: {
        draft.isEnrolled = action.payload
        break
      }
      case type.STUDENT_VERIFY_ENROLLMENT_FAILURE: {
        break
      }
      case type.STUDENT_COURSE_ENROLL_REQUEST: {
        draft.status.put.pending = true
        draft.status.put.error = null
        break
      }
      case type.STUDENT_COURSE_ENROLL_SUCCESS: {
        draft.status.put.pending = false
        draft.status.put.error = null
        draft.isEnrolled = true
        break
      }
      case type.STUDENT_COURSE_ENROLL_FAILURE: {
        break
      }
      case type.STUDENT_WATCH_CLASS_REQUEST: {
        draft.status.get.pending = true
        draft.status.get.error = null
        break
      }
      case type.STUDENT_WATCH_CLASS_SUCCESS: {
        draft.classContent = action.payload
        draft.status.get.pending = false
        draft.status.get.error = null
        break
      }
      case type.STUDENT_WATCH_CLASS_FAILURE: {
        break
      }
      case type.STUDENT_BECOME_TEACHER_REQUEST: {
        draft.status.put.pending = true
        draft.status.put.error = null
        break
      }
      case type.STUDENT_BECOME_TEACHER_SUCCESS: {
        draft.status.put.pending = false
        draft.status.put.error = null
        break
      }
      case type.STUDENT_BECOME_TEACHER_FAILURE: {
        break
      }
      case type.STUDENT_RATE_COURSE_REQUEST: {
        draft.status.put.pending = true
        draft.status.put.error = null
        break
      }
      case type.STUDENT_RATE_COURSE_SUCCESS: {
        draft.status.put.pending = false
        draft.status.put.error = null
        break
      }
      case type.STUDENT_RATE_COURSE_FAILURE: {
        break
      }

      case type.STUDENT_GET_RATE_COURSE_REQUEST: {
        draft.rate = 0
        draft.status.put.pending = true
        draft.status.put.error = null
        break
      }
      case type.STUDENT_GET_RATE_COURSE_SUCCESS: {
        draft.rate = action.payload
        draft.status.put.pending = false
        draft.status.put.error = null
        break
      }
      case type.STUDENT_GET_RATE_COURSE_FAILURE: {
        break
      }

      case type.STUDENT_RATE_TEACHER_REQUEST: {
        draft.rate = 0
        draft.status.put.pending = true
        draft.status.put.error = null
        break
      }
      case type.STUDENT_RATE_TEACHER_SUCCESS: {
        draft.rate = action.payload
        draft.status.put.pending = false
        draft.status.put.error = null
        break
      }
      case type.STUDENT_RATE_TEACHER_FAILURE: {
        break
      }

      case type.STUDENT_GET_RATE_TEACHER_REQUEST: {
        draft.rate = 0
        draft.status.put.pending = true
        draft.status.put.error = null
        break
      }
      case type.STUDENT_GET_RATE_TEACHER_SUCCESS: {
        draft.rate = action.payload
        draft.status.put.pending = false
        draft.status.put.error = null
        break
      }
      case type.STUDENT_GET_RATE_TEACHER_FAILURE: {
        break
      }
      default:
    }
  })
}
