import React, { Component } from 'react';

class Comment extends Component {
    constructor (props) {
        super(props);
        this.state={
            timeString:"1秒前",
            createtime:Date.now()
        }
    }

    componentWillMount(){
        this.timer=setInterval(
            ()=>this.setState({timeString:this._calTimeStr()})
            ,5000)
    }

    _calTimeStr()
    {
        let duration=(Date.now()-this.state.createtime)/1000;
        let str;
        duration > 60
            ? str=`${Math.round(duration / 60)} 分钟前`
            : str=`${Math.round(Math.max(duration, 1))} 秒前`;
        return str;
    }

    render () {
        return (
            <li className="comment" key={this.props.key}>
                <div className="comment-user"><span>{this.props.username}</span>:</div>
                <span className="comment-content">{this.props.commentcontent}</span>
                <p className="comment-time">{this.state.timeString}</p>
                <hr/>
            </li>

        );

    }

}

export default Comment;
