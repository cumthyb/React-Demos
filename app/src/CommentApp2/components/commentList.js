import React, {Component} from 'react';
import CommentItem from './commentItem';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments
        }
    }

    handDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this
                .props
                .onDeleteComment(index)
        }
    }

    render()
    {
        return (
            <ul>
                {this
                    .props
                    .comments
                    .map((comment, index) => {

                        return < CommentItem
                        key = {
                            index
                        }
                        index = {
                            index
                        }
                        username = {
                            comment.username
                        }
                        content = {
                            comment.content
                        }
                        createtime = {
                            comment.createtime
                        }
                        DeleteComment = {
                            this
                                .handDeleteComment
                                .bind(this, index)
                        } />
                })}
            </ul>
        )
    }
}

export default CommentList;