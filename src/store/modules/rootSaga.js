import { all } from 'redux-saga/effects'

import auth from './auth/sagas'
import courses from './courses/sagas'
import student from './student/sagas'
import teacher from './teacher/sagas'
import language from './language/sagas'
import translator from './translator/sagas'

export default function* rootSaga() {
    return yield all([courses, teacher, auth, student, language, translator])
}