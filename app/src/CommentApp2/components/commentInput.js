import React, {Component} from 'react'
import "../styles/index.css"

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            content: ""
        }
    }

    handPublish()
    {
        if (this.props.SubmitComment) {
            this
                .props
                .SubmitComment({username: this.state.username, content: this.state.content, timestamp: new Date()})
        }
        this.setState({content: ''})
    }

    handBlur(type, event) {
        if (type === "username") {
            this.setState({username: event.target.value})
        } else if (type === "content") {
            this.setState({content: event.target.value})
        }

    }

    render()
    {
        return (
            <div className="comment-input">
                <div className="comment-username">
                    <span className="comment-input-label">用户名:</span><input
                        type="text"
                        placeholder="请输入用户名"
                        className="comment-input-username"
                        onBlur={this
                .handBlur
                .bind(this, "username")}/></div>
                <div className="comment-content">
                    <span className="comment-input-label">评论内容:</span>
                    <textarea
                        name=""
                        rows="5"
                        placeholder="请输入评论内容"
                        className="comment-input-content"
                        onBlur={this
                        .handBlur
                        .bind(this, "content")}></textarea>
                </div>
                <div className="comment-btn">
                    <button
                        className="comment-input-publish"
                        onClick={this
                        .handPublish
                        .bind(this)}>发表</button>
                </div>
            </div>
        )
    }

}

export default CommentInput;