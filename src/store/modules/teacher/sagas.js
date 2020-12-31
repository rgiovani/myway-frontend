import { takeLatest, call, put, all } from 'redux-saga/effects'

import api from '../../../services/api'
import type from '../../types'
import { getTeacherByIdSuccess, getTeacherByIdFailure, getTeacherCourseSuccess, getTeacherCourseFailure } from "./actions";


export function* getTeacherById(teacher) {
  try {
    const response = yield call(api.get, `teachers/${teacher.payload}`)
    const data = response.data
    yield put(getTeacherByIdSuccess(data))
  } catch(error) {
    yield put(getTeacherByIdFailure())
  }
}

export function* getCourses(teacher) {
  try {
    const response = yield call(api.get, `teachers/${teacher.payload}/courses`)
    const data = response.data
    yield put(getTeacherCourseSuccess(data))
  } catch(error) {
    yield put(getTeacherCourseFailure())
  }
}


export default all([takeLatest(type.TEACHER_BY_ID_REQUEST, getTeacherById), takeLatest(type.TEACHER_COURSE_REQUEST, getCourses)])
