import type from '../../types'

export function studentCoursesRequest(id) {
  return {
    type: type.STUDENT_COURSES_REQUEST,
    payload: id
  }
}

export function studentCoursesSuccess(data) {
  return {
    type: type.STUDENT_COURSES_SUCCESS,
    payload: data
  }
}

export function studentCoursesFailure() {
  return {
    type: type.STUDENT_COURSES_FAILURE,
  }
}

export function studentContentsRequest(id) {
  return {
    type: type.STUDENT_CONTENTS_REQUEST,
    payload: id
  }
}

export function studentContentsSuccess(data) {
  return {
    type: type.STUDENT_CONTENTS_SUCCESS,
    payload: data
  }
}

export function studentContentsFailure() {
  return {
    type: type.STUDENT_CONTENTS_FAILURE,
  }
}

export function studentGetRateCourseRequest(studentId, courseId) {
  return {
    type: type.STUDENT_GET_RATE_COURSE_REQUEST,
    studentId, courseId
  }
}

export function studentGetRateCourseSuccess(data) {
  return {
    type: type.STUDENT_GET_RATE_COURSE_SUCCESS,
    payload: data
  }
}

export function studentGetRateCourseFailure() {
  return {
    type: type.STUDENT_GET_RATE_COURSE_FAILURE,
  }
}

export function studentGetRateTeacherRequest(studentId, teacherId) {
  return {
    type: type.STUDENT_GET_RATE_TEACHER_REQUEST,
    studentId, teacherId
  }
}

export function studentGetRateTeacherSuccess(data) {
  return {
    type: type.STUDENT_GET_RATE_TEACHER_SUCCESS,
    payload: data
  }
}

export function studentGetRateTeacherFailure() {
  return {
    type: type.STUDENT_GET_RATE_TEACHER_FAILURE,
  }
}


export function verifyEnrollmentRequest(studentId, courseId) {
  return {
    type: type.STUDENT_VERIFY_ENROLLMENT_REQUEST,
    payload: { studentId, courseId }
  }
}

export function verifyEnrollmentSuccess(data) {
  return {
    type: type.STUDENT_VERIFY_ENROLLMENT_SUCCESS,
    payload: data
  }
}

export function verifyEnrollmentFailure() {
  return {
    type: type.STUDENT_VERIFY_ENROLLMENT_FAILURE,
  }
}

export function enrollCourseRequest(studentId, courseId) {
  return {
    type: type.STUDENT_COURSE_ENROLL_REQUEST,
    studentId,
    courseId
  }
}

export function enrollCourseSuccess(data) {
  return {
    type: type.STUDENT_COURSE_ENROLL_SUCCESS,
    payload: data
  }
}

export function enrollCourseFailure() {
  return {
    type: type.STUDENT_COURSE_ENROLL_FAILURE,
  }
}

export function watchClassRequest(contentId, studentId) {
  return {
    type: type.STUDENT_WATCH_CLASS_REQUEST,
    contentId,
    studentId
  }
}

export function watchClassSucccess(data) {
  return {
    type: type.STUDENT_WATCH_CLASS_SUCCESS,
    payload: data
  }
}

export function watchClassFailure() {
  return {
    type: type.STUDENT_WATCH_CLASS_FAILURE
  }
}


export function becomeTeacherRequest(studentId, payload) {
  return {
    type: type.STUDENT_BECOME_TEACHER_REQUEST,
    studentId,
    payload
  }
}

export function becomeTeacherSuccess(data) {
  return {
    type: type.STUDENT_BECOME_TEACHER_SUCCESS,
    payload: data
  }
}

export function becomeTeacherFailure() {
  return {
    type: type.STUDENT_BECOME_TEACHER_FAILURE,
  }
}


export function rateCourseRequest(courseId, studentId, score) {
  return {
    type: type.STUDENT_RATE_COURSE_REQUEST,
    courseId,
    studentId,
    score
  }
}

export function rateCourseSuccess() {
  return {
    type: type.STUDENT_RATE_COURSE_SUCCESS,
  }
}

export function rateCourseFailure() {
  return {
    type: type.STUDENT_RATE_COURSE_REQUEST,
  }
}

export function rateTeacherRequest(teacherId, studentId, value) {
  return {
    type: type.STUDENT_RATE_TEACHER_REQUEST,
    teacherId,
    studentId,
    value
  }
}

export function rateTeacherSuccess(data) {
  return {
    type: type.STUDENT_RATE_TEACHER_SUCCESS,
    payload: data
  }
}

export function rateTeacherFailure() {
  return {
    type: type.STUDENT_RATE_TEACHER_REQUEST,
  }
}