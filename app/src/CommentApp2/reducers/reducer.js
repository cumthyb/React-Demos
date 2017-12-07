import {INIT_COMMENTS, ADD_COMMENT, DELETE_COMMENT} from "../actions/actionTypes"
import {initComments, addComment, deleteComment} from "../actions/action"

export default function (state, action) {

    if (!state) {
        state = {
            comments: []
        }
    }

    switch (action.type) {
        case INIT_COMMENTS:
            return {comments: state.comments}
        case ADD_COMMENT:
            return {
                comments: [
                    ...state.comments,
                    action.comment
                ]
            }
        case DELETE_COMMENT:
            return {
                comments: [
                    ...state
                        .comments
                        .slice(0, action.commentIndex),
                    ...state
                        .comments
                        .slice(action.commentIndex + 1)
                ]
            }
        default:
            return state
    }

}