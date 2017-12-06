import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addComment} from "../actions/action"
import CommentInput from "../components/commentInput"

class CommentInputContainer extends Component {
    constructor(props)
    {
        super(props)
    }

    handleSubmitComment(comment) {
        if (!comment) 
            return
        if (!comment.username) 
            return alert('请输入用户名')
        if (!comment.content) 
            return alert('请输入评论内容')
        if (this.props.onSubmit) {
            this
                .props
                .onSubmit(comment)
        }
    }

    render() {
        return (<CommentInput
            SubmitComment={this
            .handleSubmitComment
            .bind(this)}/>)
    }

}

const mapStateToProps = (state) => {
    return {comment: state.comment}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer)