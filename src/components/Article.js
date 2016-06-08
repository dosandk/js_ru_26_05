import React, { PropTypes, Component } from 'react'
import moment from 'moment'

export default (props) => {
    const { article, isOpen, toggleOpen } = props

    if (!article) return <h3>No article</h3>

    const body = isOpen ? <section>{article.text}</section> : null

    const formatDate = (timestamp) => moment.unix(article.timestamp / 1000).format('DD/MM/YYYY')

    return (
        <div>
            <h3 onClick = { toggleOpen }>
                { article.title }
            </h3>
            <div>
                { formatDate(article.timestamp) }
            </div>
            { body }
        </div>
    )
}