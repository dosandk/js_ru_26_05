import BasicStore from './BasicStore'
import { DELETE_ARTICLE, CREATE_COMMENT } from '../constants'

export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break

                case CREATE_COMMENT:
                    this._createComment(payload.id, payload.comment)

                    break
                default:
                    return
            }

            this._emitChange()
        })
    }

    _createComment = (id, comment) => {
        this._items[id].comments = this._items[id].comments.concat([comment.id])
    }
}