import React, { createClass, PropTypes } from 'react'
import Article from './Article'
import CommentsList from './CommentsList'

const ArticleList = createClass({
    propTypes: {
        articles: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                title: PropTypes.string.isRequired,
                text: PropTypes.string,
                id: PropTypes.string.isRequired
            })
        ).isRequired
    },
    getInitialState() {
        return {
            openedArticle: null
        }
    },
    toggleOpen(id) {
        return (ev) => {
            this.setState({
                openedArticle: !this.checkIsOpenState(id) ? id : null
            })
        }
    },
    checkIsOpenState(id) {
        return id === this.state.openedArticle
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