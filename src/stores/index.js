import Article from './Article'
import CommentStore from './Comment'

const stores = {}

Object.assign(stores, {
    articles: new Article(stores),
    comments: new CommentStore(stores)
})

export default stores
export const articleStore = stores.articles
export const commentStore = stores.comments

window.stores = stores