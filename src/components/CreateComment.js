import React, { Component } from 'react';
import { createComment } from '../AC/articles'

class CreateComment extends Component {
    state = {
        comment: ''
    }

    handleCommentChange = (e) => {
        const textArea = e.target;

        this.setState({
            comment: textArea.value
        });
    }

    handleCreateComment = (e) => {
        e.preventDefault()

        const commentObj = {
            id: Date.now(),
            name: 'Unknown name',
            text: this.state.comment
        }

        createComment(this.props.id, commentObj)

        this._resetTextArea();
    }

    _resetTextArea = () => this.setState({comment: '' });

    render() {
        return (
            <div>
                <form>
                    <div>
                        <textarea className="create-comment"
                                  refs="createComment"
                                  name="comment"
                                  onChange = { this.handleCommentChange }
                                  value = { this.state.comment }
                                  placeholder="Please, add your comment to article"></textarea>
                    </div>
                    <input onClick = { this.handleCreateComment } type="submit" />
                </form>
            </div>
        );
    }
}

export default CreateComment;