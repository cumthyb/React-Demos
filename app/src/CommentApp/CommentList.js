import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor(props) {
        super(props);
    }

    addComment(username, commentcontent, key) {
        return <Comment
            username={username}
            commentcontent={commentcontent}
            key={key}
            index={key}
            OnDeleteComment={this
            .handleDeleteComment
            .bind(this)}></Comment>;
    }

    handleDeleteComment(index) {
        this.props.handleDeleteComment && this
            .props
            .handleDeleteComment(index);
    }

    render() {
        return (
            <div>
                <ul>
                    {this
                        .props
                        .comments
                        .map((comment, i) => this.addComment(comment.username, comment.commentcontent, i))}
                </ul>
            </div>
        );
    }
}

export default CommentList;
