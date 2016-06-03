import React, { createClass, PropTypes } from 'react'
import Article from './Article'
import CommentsList from './CommentsList'
import toggleItem from '../mixins/toggleItem'

const ArticleList = createClass({
    mixins: [toggleItem],
    propTypes: {
        articles: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                title: PropTypes.string.isRequired,
                text: PropTypes.string,
                id: PropTypes.string.isRequired
            })
        ).isRequired
    },
    render() {
        const { articles } = this.props;
        const articleItems = articles.map((article) => {
            const comments = article.comments || [];
            const id = article.id;
            
            return (
                <li key = { id }>
                    <Article article = { article }
                             isOpen = { this.checkIsOpenState(id) }
                             toggleOpen = { this.toggleOpen(id) }/>
                    <CommentsList comments = { comments } />
                </li>
            );
        });
        return (
            <ul>
                { articleItems }
            </ul>
        )
    }
});

export default ArticleList;