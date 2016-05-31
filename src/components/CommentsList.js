import React, { Component, PropTypes } from 'react';
import Comment from  './Comment'

class CommentsList extends Component {
    state = {
        isOpen: false
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    render() {
        const { comments } = this.props;

        const commentsItems = comments.map((comment) => {
            return (
                <li key={ comment.id }>
                    <Comment comment={ comment } />
                </li>
            );
        });

        if (commentsItems.length) {
            const { isOpen } = this.state;

            return (
                <div>
                    <i onClick={ this.toggleOpen } >
                        { isOpen ? 'Hide Comments' : 'Show comments' }
                    </i>
                    { isOpen ? <ul>{ commentsItems }</ul> : null }
                </div>
            );
        }
        else {
            return <i>No comments!</i>
        }
    }
}

CommentsList.propTypes = {
    comments: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CommentsList;