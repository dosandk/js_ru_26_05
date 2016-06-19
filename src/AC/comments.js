import { ADD_COMMENT } from '../constants'
import AppDispatcher from '../dispatcher'
import { asyncACFactory, loadArticleCommentsCall } from './webUtils'
import { LOAD_ARTICLE_COMMENTS } from '../constants'

export function addComment(articleId, comment) {
    const id = Date.now()
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    })
}

export const loadArticleComments = asyncACFactory(loadArticleCommentsCall, LOAD_ARTICLE_COMMENTS)