import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addComment(articleId, comment) {
    const id = Date.now();

    return {
        type: ADD_COMMENT,
        payload: {
            article: { id: articleId },
            comment: { ...comment, id }
        }
    }
}