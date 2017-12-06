import React, {Component} from 'react'
import "../styles/index.css"

class CommentItem extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            timelag: "1s前",
            createtime: new Date()
        }
    }

    componentWillMount()
    {
        this.timer = setInterval(() => this.setState({
            timelag: this._calTimeStr()
        }), 5000)
    }

    componentWillUnmount()
    {
        clearInterval(this.timer);
    }

    handDelete()
    {
        this
            .props
            .DeleteComment(this.props.index);
        clearInterval(this.timer)
    }

    _calTimeStr()
    {
        let duration = (Date.now() - this.state.createtime) / 1000;
        let str;
        duration > 60
            ? str = `${Math.round(duration / 60)} 分钟前`
            : str = `${Math.round(Math.max(duration, 1))} 秒前`;
        return str;
    }

    render()
    {
        return (
            <li className="comment-item" key={this.props.key} index="this.props.index">
                <span className="username">{this.props.username}</span>
                <span className="content">{this.props.content}</span>
                <p className="timelag">{this.state.timelag}</p>
                <span
                    className="comment-btn-delete"
                    onClick={this
                    .handDelete
                    .bind(this)}>删除</span>
                <hr/>
            </li>
        )
    }

}

export default CommentItem;
