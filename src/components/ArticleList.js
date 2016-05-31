import React, { PropTypes } from 'react'
import Article from './Article'
import CommentsList from './CommentsList'

function ArticleList(props) {
    const { articles } = props;

    const articleItems = articles.map((article) => {
        const comments = article.comments || [];

        return (
            <li key={article.id}>
                <Article article = {article}/>
                <CommentsList comments = { comments } />
            </li>
        );
    });

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList