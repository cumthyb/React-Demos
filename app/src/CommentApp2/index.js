import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import CommentApp from "./CommentApp2/containers/commentApp"
import "./CommentApp2/styles/index.css"
import Reducer from "./CommentApp2/reducers/reducer"

const store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
    <CommentApp/>
</Provider>, document.getElementById("container"))