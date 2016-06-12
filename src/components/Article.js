import React, { PropTypes, Component } from 'react'
import { deleteArticle } from '../AC/articles'
import moment from 'moment'

export default (props) => {
    const { article, isOpen, toggleOpen } = props

    if (!article) return <h3>No article</h3>

    const body = isOpen ? <section>{article.text}</section> : null

    const formatDate = (timestamp) => moment.unix(article.timestamp / 1000).format('DD/MM/YYYY')

    const handleDeleteArticle = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        deleteArticle(props.article.id)
    }

    return (
        <div>
            <h3 onClick = { toggleOpen }>
                { article.title }
                {' '}
                <a href="#"
                   onClick = { handleDeleteArticle }>
                    delete article
                </a>
            </h3>
            <div>
                { formatDate(article.timestamp) }
            </div>
            { body }
        </div>
    )
}