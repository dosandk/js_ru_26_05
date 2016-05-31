import React from 'react';

export default function Comment(props) {
    const { comment } = props;

    return (
        <div>
            <p style={ comment.title ? null : { display: 'none'} } >
                <strong>Title: { comment.title }</strong>
            </p>
            <p><ins>Name: { comment.name }</ins></p>
            <p>{ comment.text }</p>
        </div>
    );
}