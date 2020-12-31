import produce from 'immer'

import type from '../../types'

const INITIAL_STATE = {
    data: [],
    announcements: [],
    status: {
        get: { error: null, pending: false },
        post: { pending: false, error: null },
        delete: { error: null, pending: false },
        put: { error: null, pending: false },
    },
}

export default function translators(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case type.TRANSLATOR_SEARCH_REQUEST: {
                draft.data = []
                draft.status.get.pending = true
                draft.status.get.error = null
                break
            }
            case type.TRANSLATOR_SEARCH_SUCCESS: {
                draft.data = action.payload
                draft.status.get.pending = false
                draft.status.get.error = null
                break
            }
            case type.TRANSLATOR_SEARCH_FAILURE: {
                break
            }
            case type.TRANSLATOR_ALL_REQUEST:
                {
                    draft.data = []
                    draft.status.get.pending = true
                    draft.status.get.error = null
                    break
                }
            case type.TRANSLATOR_ALL_SUCCESS:
                {
                    draft.data = action.payload
                    draft.status.get.pending = false
                    draft.status.get.error = null
                    break
                }
            case type.TRANSLATOR_ALL_FAILURE:
                {
                    break
                }
            case type.TRANSLATOR_BY_ID_REQUEST:
                {
                    draft.announcements = []
                    draft.status.get.pending = true
                    draft.status.get.error = null
                    break
                }
            case type.TRANSLATOR_BY_ID_SUCCESS:
                {
                    draft.announcements = action.payload
                    draft.status.get.pending = false
                    draft.status.get.error = null
                    break
                }
            case type.TRANSLATOR_BY_ID_FAILURE:
                {
                    break
                }
            case type.TRANSLATOR_CREATE_REQUEST: {
                draft.status.post.pending = true
                draft.status.post.error = null
                break
            }
            case type.TRANSLATOR_CREATE_SUCCESS: {
                draft.status.post.pending = false
                draft.status.post.error = null
                break
            }
            case type.TRANSLATOR_CREATE_FAILURE: {
                draft.status.post.pending = false
                draft.status.post.error = action.payload
                break
            }
            case type.TRANSLATOR_EDIT_REQUEST: {
                draft.status.put.pending = true
                draft.status.put.error = null
                break
            }
            case type.TRANSLATOR_EDIT_SUCCESS: {
                draft.status.put.pending = false
                draft.status.put.error = null
                break
            }
            case type.TRANSLATOR_EDIT_FAILURE: {
                break
            }
            case type.TRANSLATOR_DELETE_REQUEST: {
                draft.status.delete.pending = true
                draft.status.delete.error = null
                break
            }
            case type.TRANSLATOR_DELETE_SUCCESS: {
                draft.status.delete.pending = false
                draft.status.delete.error = null
                break
            }
            case type.TRANSLATOR_DELETE_FAILURE: {
                break
            }
            default:
        }
    })
}