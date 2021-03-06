import Article from './Article'
import CommentStore from './Comment'
import { normalizedArticles, normalizedComments } from '../fixtures'

const stores = {}

Object.assign(stores, {
    articles: new Article(stores, normalizedArticles),
    comments: new CommentStore(stores, normalizedComments)
})

export default stores
export const articleStore = stores.articles
export const commentStore = stores.comments

window.stores = stores