import type from '../../types'



export function getTeacherById(teacher) {
  return {
    type: type.TEACHER_BY_ID_REQUEST,
    payload: teacher
  }
}

export function getTeacherByIdSuccess(data) {
  return {
    type: type.TEACHER_BY_ID_SUCCESS,
    payload: data
  }
}
export function getTeacherByIdFailure() {
  return {
    type: type.TEACHER_BY_ID_FAILURE,
  }
}

export function getTeacherCourseRequest(teacher) {
  return {
    type: type.TEACHER_COURSE_REQUEST,
    payload: teacher
  }
}

export function getTeacherCourseSuccess(data) {
  return {
    type: type.TEACHER_COURSE_SUCCESS,
    payload: data
  }
}

export function getTeacherCourseFailure() {
  return {
    type: type.TEACHER_COURSE_FAILURE
  }
}
