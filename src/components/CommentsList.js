    import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import { loadArticleComments } from '../AC/comments'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    componentWillReceiveProps(newProps) {
        const { isOpen, article } = newProps
        const { id, commentsLoaded } = article

        if (isOpen && commentsLoaded === undefined) loadArticleComments({ id })
    }

    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
            </div>
        )
    }

    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { isOpen, article } = this.props
        const { commentsLoaded } = article
        const comments = article.getRelation('comments')
        if (!isOpen) return null
        if (!comments || !comments.length || comments.some((comment) => comment === undefined)) {
            return <h3>{commentsLoaded ? 'No comments yet' : 'Loading...'}</h3>
        }
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>
            {items}
        </ul>
    }
}

export default toggleOpen(CommentList)