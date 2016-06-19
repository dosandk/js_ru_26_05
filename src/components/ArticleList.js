import React, { PropTypes, Component } from 'react'
import DateRangePicker from './DateRangePicker'
import Article from './Article'
import CommentsList from './CommentsList'
import CreateComment from './CreateComment'
import toggleItem from '../decorators/toggleItem'
import filterItemsByDate from '../decorators/filterItemsByDate'

import 'react-day-picker/lib/style.css'

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
        const { filter, articles, checkIsOpenState, toggleOpen } = this.props;

        return filter(articles).map((article) => {
            const id = article.id;

            return (
                <li key = { id }>
                    <Article article = { article }
                             isOpen = { checkIsOpenState(id) }
                             toggleOpen = { toggleOpen(id) }/>
                    <CreateComment id = { id } />
                    <CommentsList  article = { article } />
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h3>Articles</h3>
                <DateRangePicker
                    handleDayClick = { this.props.handleDayClick }
                    selectDays = { this.props.selectDays } />
                <ul>
                    { this.getArticleItems() }
                </ul>
            </div>
        )
    }
}

export default filterItemsByDate(toggleItem(ArticleList));