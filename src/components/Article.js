import React, { PropTypes, Component } from 'react'

export default function Article(props) {
    const { article, isOpen, toggleOpen } = props

    if (!article) return <h3>No article</h3>

    const body = isOpen ? <section>{article.text}</section> : null

    return (
        <div>
            <h3 onClick = { toggleOpen }>{ article.title }</h3>
            { body }
        </div>
    )
}