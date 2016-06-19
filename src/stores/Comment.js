import BasicStore from './BasicStore'
import { ADD_COMMENT, LOAD_ALL_COMMENTS, LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL } from '../constants'

export default class CommentStore extends BasicStore {
    constructor(...args) {
        super(...args)
        
        this._subscribe((action) => {
            const { type, payload, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    break

                case LOAD_ARTICLE_COMMENTS + START:
                    break

                case LOAD_ARTICLE_COMMENTS + SUCCESS:
                    response.forEach((comment) => {
                        if(!this.getById(comment.id)) {
                            this._add(comment)
                        }
                    })
                    break

                case LOAD_ARTICLE_COMMENTS + FAIL:
                    break
                
                default:
                    return
            }

            this._emitChange()
        })
    }
}