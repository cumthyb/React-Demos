import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

class CommentApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    addComment(username, commentcontent) {
        this.setState({ comments: [...this.state.comments, { username: username, commentcontent: commentcontent }] });
    }

    render() {
        return (
            <div >
                <CommentInput exportComment={this.addComment.bind(this)} />
                <CommentList comments={this.state.comments} />
            </div>
        );
    }


}

export default CommentApp;