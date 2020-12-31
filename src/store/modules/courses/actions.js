import type from '../../types'

export function studentCoursesRequest(id) {
  return {
    type: type.STUDENT_COURSES_REQUEST,
    payload: id
  }
}

export function coursesGetRequest(userInput, language, order) {
  return {
    type: type.COURSES_REQUEST,
    userInput,
    language,
    order,
  }
}
export function coursesGetSuccess(data) {
  return {
    type: type.COURSES_SUCCESS,
    payload: data,
  }
}
export function coursesGetFailure() {
  return {
    type: type.COURSES_FAILURE,
  }
}

export function englishCoursesGetRequest() {
  return {
    type: type.ENGLISH_COURSES_REQUEST,
  }
}
export function englishCoursesGetSuccess(data) {
  return {
    type: type.ENGLISH_COURSES_SUCCESS,
    payload: data,
  }
}
export function englishCoursesGetFailure() {
  return {
    type: type.ENGLISH_COURSES_FAILURE,
  }
}

export function getCourseByIdRequest(course) {
  return {
    type: type.COURSE_BY_ID_REQUEST,
    payload: course
  }
}

export function getCourseByIdSuccess(data) {
  return {
    type: type.COURSE_BY_ID_SUCCESS,
    payload: data
  }
}
export function getCourseByIdFailure() {
  return {
    type: type.COURSE_BY_ID_FAILURE,
  }
}

export function getAllCourseContentRequest(courseId) {
  return {
    type: type.ALL_COURSE_CONTENT_REQUEST,
    courseId
  }
}

export function getAllCourseContentSuccess(data) {
  return {
    type: type.ALL_COURSE_CONTENT_SUCCESS,
    payload: data
  }
}

export function getAllCourseContentFailure() {
  return {
    type: type.ALL_COURSE_CONTENT_FAILURE
  }
}


export function createCourseRequest(title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, image, numberOfRatings, professorId) {
  return {
    type: type.COURSE_SAVE_REQUEST,
    payload: { title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, image, numberOfRatings },
    professorId
  }
}

export function createCourseSuccess() {
  return {
    type: type.COURSE_SAVE_SUCCESS,
  }
}

export function createCourseFailure() {
  return {
    type: type.COURSE_SAVE_FAILURE,
  }
}

export function editCourseRequest(title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, image, numberOfRatings, professorId, courseId) {
  return {
    type: type.COURSE_EDIT_REQUEST,
    payload: { title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, image, numberOfRatings },
    courseId,
    professorId
  }
}

export function editCourseSuccess() {
  return {
    type: type.COURSE_EDIT_SUCCESS,
  }
}

export function editCourseFailure() {
  return {
    type: type.COURSE_EDIT_FAILURE,
  }
}

export function deleteCourseRequest(professorId, courseId) {
  return {
    type: type.COURSE_DELETE_REQUEST,
    courseId,
    professorId
  }
}

export function deleteCourseSuccess() {
  return {
    type: type.COURSE_DELETE_SUCCESS,
  }
}

export function deleteCourseFailure() {
  return {
    type: type.COURSE_DELETE_FAILURE,
  }
}


export function createVideoContentRequest(file, title, contentType, description, professorId, courseId) {
  return {
    type: type.COURSE_SAVE_CONTENT_VIDEO_REQUEST,
    payload: { file, title, contentType, description },
    courseId,
    professorId
  }
}

export function createVideoContentSuccess() {
  return {
    type: type.COURSE_SAVE_CONTENT_VIDEO_SUCCESS,
  }
}

export function createVideoContentFailure() {
  return {
    type: type.COURSE_SAVE_CONTENT_VIDEO_FAILURE,
  }
}

export function createPraticalContentRequest(title, contentType, description, link, professorId, courseId) {
  return {
    type: type.COURSE_SAVE_CONTENT_PRATICAL_REQUEST,
    payload: { title, contentType, description, link },
    courseId,
    professorId
  }
}

export function createPraticalContentSuccess() {
  return {
    type: type.COURSE_SAVE_CONTENT_PRATICAL_SUCCESS,
  }
}

export function createPraticalContentFailure() {
  return {
    type: type.COURSE_SAVE_CONTENT_PRATICAL_FAILURE,
  }
}

export function editVideoContentRequest(file, title, contentType, description, contentId) {
  return {
    type: type.COURSE_EDIT_CONTENT_REQUEST,
    payload: { file, title, contentType, description },
    contentId
  }
}

export function editVideoContentSuccess() {
  return {
    type: type.COURSE_EDIT_CONTENT_SUCCESS,
  }
}

export function editVideoContentFailure() {
  return {
    type: type.COURSE_EDIT_CONTENT_FAILURE,
  }
}

export function editPracticalContentRequest(link, title, contentType, description, contentId, teacherId) {
  return {
    type: type.COURSE_EDIT_PRACTICAL_CONTENT_REQUEST,
    payload: { link, title, contentType, description },
    contentId,
    teacherId
  }
}

export function editPracticalContentSuccess() {
  return {
    type: type.COURSE_EDIT_PRACTICAL_CONTENT_SUCCESS,
  }
}

export function editPracticalContentFailure() {
  return {
    type: type.COURSE_EDIT_PRACTICAL_CONTENT_FAILURE,
  }
}


export function deleteContentRequest(contentId) {
  return {
    type: type.COURSE_DELETE_CONTENT_REQUEST,
    contentId
  }
}

export function deleteContentSuccess() {
  return {
    type: type.COURSE_DELETE_CONTENT_SUCCESS,
  }
}

export function deleteContentFailure() {
  return {
    type: type.COURSE_DELETE_CONTENT_FAILURE,
  }
}

export function changeStatusContentRequest(contentId, userId) {
  return {
    type: type.CONTENT_CHANGE_STATUS_REQUEST,
    contentId,
    userId
  }
}

export function changeStatusContentSuccess() {
  return {
    type: type.CONTENT_CHANGE_STATUS_SUCCESS
  }
}

export function changeStatusContentFailure() {
  return {
    type: type.CONTENT_CHANGE_STATUS_FAILURE
  }
}