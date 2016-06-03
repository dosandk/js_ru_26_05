import React, { PropTypes, Component } from 'react'
import Article from './Article'
import CommentsList from './CommentsList'

class ArticleList extends Component {
    state = {
        openedArticle: null
    }

    toggleOpen = id => ev => {
        this.setState({
            openedArticle: !this.checkIsOpenState(id) ? id : null
        })
    }

    checkIsOpenState = (id) => id === this.state.openedArticle

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
}

ArticleList.propTypes = {
    articles: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            id: PropTypes.string.isRequired
        })
    ).isRequired
};

export default ArticleList