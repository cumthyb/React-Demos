import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteComment} from "../actions/action"
import CommentList from "../components/commentList"

class commentListContainer extends Component {
    constructor(props) {
        super(props)
    }

    handDeleteComment(commentIndex) {
        this
            .props
            .onDeleteComment(commentIndex);
    }

    render() {
        return (<CommentList
            comments={this.props.comments}
            onDeleteComment={this
            .handDeleteComment
            .bind(this)}/>)
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteComment: (commentIndex) => {
            dispatch(deleteComment(commentIndex))
        }
    }
}

const mapStateToProps = (state) => {
    return {comments: state.comments}
}

export default connect(mapStateToProps, mapDispatchToProps)(commentListContainer)