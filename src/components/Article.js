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

    render() {
        const { article, isOpen, toggleOpen } = this.props

        const formatDate = (timestamp) => moment.unix(article.timestamp / 1000).format('DD/MM/YYYY')

        const getBody = () => {
            let body = null

            if (isOpen) {
                if (article.loading) {
                    body = <h3>Loading...</h3>
                }
                else {
                    body = <section>{article.text}</section>
                }
            }

            return body;
        }

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
                    { formatDate(article.timestamp) }
                </div>
                { getBody() }
            </div>
        )
    }
}