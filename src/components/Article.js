import React, { PropTypes, Component } from 'react'
import { deleteArticle, loadArticleById } from '../AC/articles'
import moment from 'moment'

export default class Article extends Component {
    componentWillReceiveProps({ isOpen, article : { id, text, loading } }) {
        if (isOpen && !text && !loading) loadArticleById({ id })
    }

    handleDeleteArticle = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        deleteArticle(this.props.article.id)
    }

    formatDate = (timestamp) => moment.unix(timestamp / 1000).format('DD/MM/YYYY')

    getBody = () => {
        const { article, isOpen } = this.props
        let body = null

        if (isOpen) {
            if (article.loading) {
                body = <h3>Loading...</h3>
            }
            else {
                body = <section>{ article.text }</section>
            }
        }

        return body;
    }

    render() {
        const { article, toggleOpen } = this.props

        return (
            <div>
                <h3 onClick = { toggleOpen }>
                    { article.title }
                    {' '}
                    <a href="#"
                       onClick = { this.handleDeleteArticle }>
                        delete article
                    </a>
                </h3>
                <div>
                    { this.formatDate(article.timestamp) }
                </div>
                { this.getBody() }
            </div>
        )
    }
}