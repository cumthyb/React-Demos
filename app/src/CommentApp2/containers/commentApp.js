import React, {Component} from 'react'
import CommentInput from "./commentInputContainer"
import CommentList from "./commentListContainer"

export default class CommentApp extends Component {
    render() {
        return (
            <div>
                <CommentInput/>
                <CommentList/>
            </div>

        )
    }
}