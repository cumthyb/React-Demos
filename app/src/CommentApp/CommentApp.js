import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

class CommentApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    addComment(username, commentcontent) {
        this.setState({
            comments: [
                ...this.state.comments, {
                    username: username,
                    commentcontent: commentcontent
                }
            ]
        });
    }

    handleDeleteComment(index)
    {
        this
            .state
            .comments
            .splice(index, 1);
        this.setState({comments: this.state.comments})
    }

    render() {
        return (
            <div >
                <CommentInput
                    exportComment={this
                    .addComment
                    .bind(this)}/>
                <CommentList
                    comments={this.state.comments}
                    handleDeleteComment={this
                    .handleDeleteComment
                    .bind(this)}/>
            </div>
        );
    }

}

export default CommentApp;