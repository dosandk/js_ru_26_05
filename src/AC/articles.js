import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, CREATE_COMMENT } from '../constants'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }

    AppDispatcher.dispatch(action)
}

export function createComment(id, comment) {
    const action = {
        type: CREATE_COMMENT,
        payload: {
            id,
            comment
        }
    }

    AppDispatcher.dispatch(action)
}