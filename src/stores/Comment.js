import BasicStore from './BasicStore'
import { CREATE_COMMENT } from '../constants'

export default class CommentStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case CREATE_COMMENT:
                    this._createComment(payload.id, payload.comment)
                    break
                default:
                    return
            }

            this._emitChange()
        })
    }

    _createComment = (articleId, comment) => {
        this._items[comment.id] = comment;
    }
}