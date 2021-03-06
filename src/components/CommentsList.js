import React, { Component, PropTypes } from 'react';
import Comment from  './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentsList extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string,
                name: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            })
        ).isRequired
    };

    render() {
        const commentsItems = this.getCommentsItems();

        return commentsItems.length
            ? this.getCommentsList({commentsItems})
            : this.getNoCommentsMsg()
    }

    getCommentsItems() {
        const { comments } = this.props;

        return comments.map((comment) => {
            return (
                <li key={ comment.id }>
                    <Comment comment={ comment } />
                </li>
            );
        });
    }

    getCommentsList({commentsItems, hMsg, sMsg}) {
        const { isOpen, toggleOpen } = this.props;
        const hideMsg = hMsg || 'Hide Comments';
        const showMsg = sMsg || 'Show Comments';

        return (
            <div>
                <i onClick={ toggleOpen } >
                    { isOpen ? hideMsg : showMsg }
                </i>
                { isOpen ? <ul>{ commentsItems }</ul> : null }
            </div>
        );
    }

    getNoCommentsMsg(msg) {
        const noCommentsMsg = msg || 'No comments!';

        return <i>{ noCommentsMsg }</i>
    }
}

export default toggleOpen(CommentsList);