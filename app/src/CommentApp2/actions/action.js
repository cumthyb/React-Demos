import {INIT_COMMENTS, ADD_COMMENT, DELETE_COMMENT} from "./actionTypes"

export const initComments = (comments) => ({type: INIT_COMMENTS, comments})

export const addComment = (comment) => ({type: ADD_COMMENT, comment})

export const deleteComment = (commentIndex) => ({type: DELETE_COMMENT, commentIndex})
