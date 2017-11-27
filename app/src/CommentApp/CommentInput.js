import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            commentcontent : '',
        };
    }

    static propTypes = {
        exportComment : PropTypes.func
    };

    componentWillMount(){
        this._loadUsername();
    }


    componentDidMount(){
        this.textarea.focus();
    }

    handSubmit(){
        if(this.state.username.match(/^\s*$/)) return alert("用户名不能为空");
        if(this.state.commentcontent.match(/^\s*$/)) return alert("评论内容不能为空");
        this.props.exportComment(this.state.username, this.state.commentcontent);
    }

    handUserNameChange(event){
        this.setState({
            username : event.target.value,
        });
    }

    handContentChange(event){
        this.setState({
            commentcontent : event.target.value,
        });
    }

    handUserNameBler(event){
        this._saveUsername(event.target.value);
    }

    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }

    _saveUsername(username){
        localStorage.setItem('username', username)
    }

    render(){
        return (
            <div>
                <div className="comment-field"><label htmlFor="uername">用户名：</label>
                    <input type="text" className="comment-field-username" placeholder="输入用户名" value={this.state.username} onChange={this.handUserNameChange.bind(this)} onBlur={this.handUserNameBler.bind(this)}/>
                </div>
                <div className="comment-field"><label htmlFor="commentContent">评论内容：</label>
                    <textarea name="" id="" cols="30" rows="10" className="comment-field-content" value={this.state.commentcontent} onChange={this.handContentChange.bind(this)} placeholder="输入评论内容" ref={(textarea) => this.textarea = textarea}></textarea>
                </div>
                <div className="comment-field">
                    <button className="comment-field-btn" onClick={this.handSubmit.bind(this)}>发布</button>
                </div>
            </div>
        );
    }
}

export default CommentInput;
