import { combineReducers } from 'redux'

import auth from './auth/reducer'
import course from './courses/reducer'
import student from './student/reducer'
import teacher from './teacher/reducer'
import language from './language/reducer'
import translator from './translator/reducer'


export default combineReducers({ course, teacher, auth, student, language, translator })