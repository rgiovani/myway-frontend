import type from '../../types'

export function getAlltranslatorsRequest() {
    return {
        type: type.TRANSLATOR_ALL_REQUEST,
    }
}
export function getAlltranslatorsSuccess(data) {
    return {
        type: type.TRANSLATOR_ALL_SUCCESS,
        payload: data,
    }
}
export function getAlltranslatorsFailure() {
    return {
        type: type.TRANSLATOR_ALL_FAILURE,
    }
}

export function getTranslatorsBySearchRequest(userInput) {
    return {
        type: type.TRANSLATOR_SEARCH_REQUEST,
        userInput
    }
}

export function getTranslatorsBySearchSuccess(data) {
    return {
        type: type.TRANSLATOR_SEARCH_SUCCESS,
        payload: data,
    }
}
export function getTranslatorsBySearchFailure() {
    return {
        type: type.TRANSLATOR_SEARCH_FAILURE,
    }
}

export function getTranslatorByIdRequest(translator) {
    return {
        type: type.TRANSLATOR_BY_ID_REQUEST,
        payload: translator
    }
}

export function getTranslatorByIdSuccess(data) {
    return {
        type: type.TRANSLATOR_BY_ID_SUCCESS,
        payload: data
    }
}
export function getTranslatorByIdFailure() {
    return {
        type: type.TRANSLATOR_BY_ID_FAILURE,
    }
}

export function createAnnouncementRequest(title, subtitle, description, price, phone, userId) {
    return {
        type: type.TRANSLATOR_CREATE_REQUEST,
        payload: { title, subtitle, description, price, phone, userId },
        userId
    }
}

export function createAnnouncementSuccess() {
    return {
        type: type.TRANSLATOR_CREATE_SUCCESS,
    }
}

export function createAnnouncementFailure(error) {
    return {
        type: type.TRANSLATOR_CREATE_FAILURE,
        payload: error
    }
}

export function editTranslatorRequest(title, subtitle, description, price, phone, userId, translatorId) {
    return {
        type: type.TRANSLATOR_EDIT_REQUEST,
        payload: { title, subtitle, description, price, phone },
        userId,
        translatorId
    }
}

export function editTranslatorSuccess() {
    return {
        type: type.TRANSLATOR_EDIT_SUCCESS,
    }
}

export function editTranslatorFailure() {
    return {
        type: type.TRANSLATOR_EDIT_FAILURE,
    }
}

export function deleteTranslatorRequest(translatorId) {
    return {
        type: type.TRANSLATOR_DELETE_REQUEST,
        translatorId
    }
}

export function deleteTranslatorSuccess() {
    return {
        type: type.TRANSLATOR_DELETE_SUCCESS,
    }
}

export function deleteTranslatorFailure() {
    return {
        type: type.TRANSLATOR_DELETE_FAILURE,
    }
}

