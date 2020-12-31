import { toast } from 'react-toastify'

import { takeLatest, call, put, all } from 'redux-saga/effects'

import api from '../../../services/api'
import type from '../../types'
import {
  studentCoursesSuccess,
  studentCoursesFailure,
  verifyEnrollmentFailure,
  verifyEnrollmentSuccess,
  enrollCourseSuccess,
  enrollCourseFailure,
  watchClassFailure,
  watchClassSucccess,
  becomeTeacherSuccess,
  becomeTeacherFailure,
  rateCourseSuccess,
  rateCourseFailure,
  rateTeacherSuccess,
  rateTeacherFailure,
  studentContentsFailure,
  studentContentsSuccess,
  studentGetRateTeacherSuccess,
  studentGetRateTeacherFailure,
  studentGetRateCourseSuccess,
  studentGetRateCourseFailure
} from "./actions";


export function* getStudentCourses(id) {
  try {
    const { payload } = id
    const response = yield call(api.get, `students/${payload}/courses`)
    const data = response.data
    yield put(studentCoursesSuccess(data))
  } catch (error) {
    yield put(studentCoursesFailure(error))
  }
}

export function* getStudentContents(id) {
  try {
    const { payload } = id
    const response = yield call(api.get, `students/${payload}`)
    const data = response.data
    yield put(studentContentsSuccess(data))
  } catch (error) {
    yield put(studentContentsFailure(error))
  }
}

export function* verifyEnrollment(payload) {
  try {
    const response = yield call(api.get, `courses/verify/${payload.payload.studentId}/${payload.payload.courseId}`)
    const data = response.data
    yield put(verifyEnrollmentSuccess(data))
  } catch (error) {
    yield put(verifyEnrollmentFailure(error))
  }
}

export function* enrollCourse(payload) {
  try {
    const { studentId, courseId } = payload
    const response = yield call(api.put, `courses/enroll/${studentId}/${courseId}`)
    const data = response.data
    yield put(enrollCourseSuccess(data))
    toast.success('Você foi matriculado com sucesso')
  } catch (error) {
    yield put(enrollCourseFailure(error))
    toast.error('Algo deu errado ao matricular-se no curso. Tente novamente')
  }
}


export function* watchClass(payload) {
  try {
    const { studentId, contentId } = payload
    const response = yield call(api.get, `contents/${contentId}/student/${studentId}`)
    const data = response.data
    yield put(watchClassSucccess(data))
  } catch (error) {
    yield put(watchClassFailure(error))
  }
}

export function* becomeTeacher({ studentId, payload }) {
  const { about, specialty, profilePhoto, donationLink } = payload
  const formData = new FormData()
  formData.append("about", about)
  formData.append("specialty", specialty)
  formData.append("profilePhoto", profilePhoto)
  formData.append('donationLink', donationLink)
  try {
    const response = yield call(api.put, `students/${studentId}/become-teacher`, formData)
    const data = response.data
    yield put(becomeTeacherSuccess(data))
    toast.success('Você se tornou um professor com sucesso. Refaça o login para aplicar as atualizações')
  } catch (error) {
    yield put(becomeTeacherFailure(error))
  }
}

export function* rateCourse({ courseId, studentId, score }) {
  try {
    yield call(api.put, `courses/${courseId}/student/${studentId}/score`, { score })
    yield rateCourseSuccess()
  } catch (error) {
    yield rateCourseFailure(error)
  }
}

export function* getStudentRateCourse({ studentId, courseId }) {
  try {
    const response = yield call(api.get, `courses/${studentId}/${courseId}/rate`)
    const data = response.data
    yield put(studentGetRateCourseSuccess(data))
  } catch (error) {
    yield put(studentGetRateCourseFailure(error))
  }
}

export function* rateTeacher({ teacherId, studentId, value }) {
  try {
    const response = yield call(api.put, `teachers/${teacherId}/${studentId}/score`, { value })
    yield put(rateTeacherSuccess(response.data))
  } catch (error) {
    yield rateTeacherFailure(error)
  }
}

export function* getStudentRateTeacher({ studentId, teacherId }) {
  try {
    const response = yield call(api.get, `teachers/${studentId}/${teacherId}/rate`)
    const data = response.data
    yield put(studentGetRateTeacherSuccess(data))
  } catch (error) {
    yield put(studentGetRateTeacherFailure(error))
  }
}

export default all([
  takeLatest(type.STUDENT_COURSES_REQUEST, getStudentCourses),
  takeLatest(type.STUDENT_CONTENTS_REQUEST, getStudentContents),
  takeLatest(type.STUDENT_VERIFY_ENROLLMENT_REQUEST, verifyEnrollment),
  takeLatest(type.STUDENT_COURSE_ENROLL_REQUEST, enrollCourse),
  takeLatest(type.STUDENT_WATCH_CLASS_REQUEST, watchClass),
  takeLatest(type.STUDENT_BECOME_TEACHER_REQUEST, becomeTeacher),
  takeLatest(type.STUDENT_RATE_COURSE_REQUEST, rateCourse),
  takeLatest(type.STUDENT_RATE_TEACHER_REQUEST, rateTeacher),
  takeLatest(type.STUDENT_GET_RATE_COURSE_REQUEST, getStudentRateCourse),
  takeLatest(type.STUDENT_GET_RATE_TEACHER_REQUEST, getStudentRateTeacher),
])
