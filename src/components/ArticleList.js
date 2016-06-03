import React, { PropTypes, Component } from 'react'
import Article from './Article'
import CommentsList from './CommentsList'
import toggleItem from '../decorators/toggleItem'

class ArticleList extends Component {
    static propTypes = {
        articles: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                title: PropTypes.string.isRequired,
                text: PropTypes.string,
                id: PropTypes.string.isRequired
            })
        ).isRequired
    }

    getArticleItems = () => {
        const { articles, checkIsOpenState, toggleOpen } = this.props;

        return articles.map((article) => {
            const comments = article.comments || [];
            const id = article.id;

            return (
                <li key = { id }>
                    <Article article = { article }
                             isOpen = { checkIsOpenState(id) }
                             toggleOpen = { toggleOpen(id) }/>
                    <CommentsList comments = { comments } />
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                { this.getArticleItems() }
            </ul>
        )
    }
}

export default toggleItem(ArticleList);