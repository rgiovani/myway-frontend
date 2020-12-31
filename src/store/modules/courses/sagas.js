import { toast } from 'react-toastify'

import { takeLatest, call, put, all } from 'redux-saga/effects'

import api from '../../../services/api'
import type from '../../types'
import {
  coursesGetSuccess,
  coursesGetFailure,
  englishCoursesGetSuccess,
  englishCoursesGetFailure,
  getCourseByIdFailure,
  getCourseByIdSuccess,
  getAllCourseContentSuccess,
  getAllCourseContentFailure,
  createVideoContentSuccess,
  createVideoContentFailure,
  deleteContentSuccess,
  deleteContentFailure,
  deleteCourseSuccess,
  deleteCourseFailure,
  createPraticalContentSuccess,
  createPraticalContentFailure,
  editVideoContentSuccess,
  editVideoContentFailure,
  editPracticalContentSuccess,
  editPracticalContentFailure,
  createCourseSuccess,
  createCourseFailure,
  editCourseSuccess,
  editCourseFailure,
  changeStatusContentFailure,
  changeStatusContentSuccess
} from "./actions";

function removeSpecialCharactersInString(text) {
  text = text.replace('ç', 'c').replace('ê', 'e')
    .replace('é', 'e').replace('á', 'a')
    .replace('ã', 'a').replace('â', 'a')
    .replace('í', 'i').replace('ó', 'o')
    .replace('ô', 'o').replace('ú', 'u');
  return text;
}

export function* getCourses(params) {
  const { userInput = '', language = '', order = '' } = params
  try {
    const response = yield call(api.get, `courses/search?f=${userInput}&l=${language}&s=${order}`)
    const data = response.data
    yield put(coursesGetSuccess(data.result))
  } catch (error) {
    yield put(coursesGetFailure(error))
  }
}

export function* getEnglishCourses() {
  try {
    const response = yield call(api.get, 'courses/INGLES/search')
    const data = response.data
    yield put(englishCoursesGetSuccess(data))
  } catch (error) {
    yield put(englishCoursesGetFailure(error))
  }
}

export function* getCourseById(course) {
  try {
    const response = yield call(api.get, `courses/${course.payload}`)
    const data = response.data
    yield put(getCourseByIdSuccess(data))
  } catch (error) {
    yield put(getCourseByIdFailure())
  }
}

export function* getAllClassContent(payload) {
  try {
    const { courseId } = payload
    const response = yield call(api.get, `contents/course/${courseId}`)
    const data = response.data
    yield put(getAllCourseContentSuccess(data))
  } catch (error) {
    yield put(getAllCourseContentFailure(error))
  }
}

export function* deleteCourseContent({ contentId }) {
  try {
    yield call(api.delete, `contents/${contentId}`)
    yield put(deleteContentSuccess())
    toast.success('Conteudo excluido com sucesso')
  } catch (error) {
    yield put(deleteContentFailure())
    toast.error('Não foi possível excluir o conteudo do curso, tente novamente.')
  }
}

export function* deleteCourse({ professorId, courseId }) {
  try {
    yield call(api.delete, `courses/delete/${professorId}/${courseId}`)
    yield put(deleteCourseSuccess())
    toast.success('Curso excluido com sucesso')
  } catch (error) {
    yield put(deleteCourseFailure())
    toast.error('Não foi possível excluir o curso, tente novamente.')
  }
}

export function* createContentVideo({ payload, courseId, professorId }) {
  const { title, description, file = '', contentType } = payload
  const formData = new FormData()
  formData.append("title", title)
  formData.append("description", description)
  formData.append("file", file)
  formData.append("contentType", contentType)
  try {
    yield call(api.post, `contents/course/${courseId}/teacher/${professorId}`, formData)
    yield put(createVideoContentSuccess())
    toast.success('Aula criada com sucesso')
  } catch (error) {
    yield put(createVideoContentFailure())
    toast.error('Não foi possível criar a aula, tente novamente')
  }
}

export function* createContentPratical({ payload, courseId, professorId }) {
  const { title, description, link, contentType } = payload
  const id = courseId
  try {
    yield call(api.post, `contents/course/${courseId}/teacher/${professorId}/practical`, {
      title, description, link, contentType, course: {
        id
      }
    })
    yield put(createPraticalContentSuccess())
    toast.success('Aula criada com sucesso')
  } catch (error) {
    yield put(createPraticalContentFailure())
    toast.error('Não foi possível criar a aula, tente novamente')
  }
}


export function* editVideoContent({ payload, contentId }) {
  const { title, description, file, contentType } = payload
  const formData = new FormData()
  formData.append("title", title)
  formData.append("description", description)
  formData.append("file", file)
  formData.append("contentType", contentType)
  try {
    yield call(api.put, `contents/${contentId}`, formData)
    yield put(editVideoContentSuccess())
    toast.success('Aula editada com sucesso')
  } catch (error) {
    yield put(editVideoContentFailure())
    toast.error('Não foi possível editar a aula, tente novamente')
  }
}

export function* editContentPratical({ payload, contentId, teacherId }) {
  const { title, description, link, contentType } = payload
  const id = contentId
  try {
    yield call(api.put, `contents/${contentId}/teacher/${teacherId}/practical`, {
      title, description, link, contentType, id
    })
    yield put(editPracticalContentSuccess())
    toast.success('Aula editada com sucesso')
  } catch (error) {
    yield put(editPracticalContentFailure())
    toast.error('Não foi possível editar a aula, tente novamente')
  }
}

export function* createCourse({ payload, professorId }) {
  const { title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, image, numberOfRatings } = payload
  const formData = new FormData()
  formData.append("title", title)
  formData.append("subtitle", subtitle)
  formData.append("description", description)
  formData.append("studentPrerequisites", studentPrerequisites)
  formData.append("studentTargets", studentTargets)
  formData.append("goals", goals)
  formData.append("totalScore", totalScore)
  formData.append("level", level)
  formData.append("language", removeSpecialCharactersInString(language))
  formData.append("image", image)
  formData.append("numberOfRatings", numberOfRatings)
  formData.append("teacher", professorId)

  try {
    yield call(api.post, `courses/add/${professorId}`, formData)
    yield put(createCourseSuccess())
    toast.success('Curso criado com sucesso')
  } catch (error) {
    yield put(createCourseFailure())
    toast.error('Não foi possível criar o curso, tente novamente')
  }
}

export function* editCourse({ payload, professorId, courseId }) {
  const { title, subtitle, description, studentPrerequisites, studentTargets, goals, totalScore, level, language, image, numberOfRatings } = payload
  const formData = new FormData()
  formData.append("title", title)
  formData.append("subtitle", subtitle)
  formData.append("description", description)
  formData.append("studentPrerequisites", studentPrerequisites)
  formData.append("studentTargets", studentTargets)
  formData.append("goals", goals)
  formData.append("totalScore", totalScore)
  formData.append("level", level)
  formData.append("language", removeSpecialCharactersInString(language))
  formData.append("image", image)
  formData.append("numberOfRatings", numberOfRatings)
  formData.append("teacher", professorId)
  formData.append("idCourse", courseId)

  try {
    yield call(api.put, `courses/edit/${professorId}/${courseId}`, formData)
    yield put(editCourseSuccess())
    toast.success('Curso editado com sucesso')
  } catch (error) {
    yield put(editCourseFailure())
    toast.error('Não foi possível editar o curso, tente novamente')
  }
}

export function* changeStatusContent(payload) {
  const { userId, contentId } = payload
  try {
    if (contentId && userId) {
      yield call(api.put, `contents/${contentId}/student/${userId}`, { finished: true })
      yield put(changeStatusContentSuccess())
    }
  } catch (error) {
    yield put(changeStatusContentFailure())
  }
}

export default all([
  takeLatest(type.COURSES_REQUEST, getCourses),
  takeLatest(type.COURSE_EDIT_REQUEST, editCourse),
  takeLatest(type.ENGLISH_COURSES_REQUEST, getEnglishCourses),
  takeLatest(type.COURSE_BY_ID_REQUEST, getCourseById),
  takeLatest(type.ALL_COURSE_CONTENT_REQUEST, getAllClassContent),
  takeLatest(type.COURSE_DELETE_CONTENT_REQUEST, deleteCourseContent),
  takeLatest(type.COURSE_DELETE_REQUEST, deleteCourse),
  takeLatest(type.COURSE_SAVE_CONTENT_VIDEO_REQUEST, createContentVideo),
  takeLatest(type.COURSE_SAVE_CONTENT_PRATICAL_REQUEST, createContentPratical),
  takeLatest(type.COURSE_EDIT_CONTENT_REQUEST, editVideoContent),
  takeLatest(type.COURSE_EDIT_PRACTICAL_CONTENT_REQUEST, editContentPratical),
  takeLatest(type.COURSE_SAVE_REQUEST, createCourse),
  takeLatest(type.CONTENT_CHANGE_STATUS_REQUEST, changeStatusContent)])