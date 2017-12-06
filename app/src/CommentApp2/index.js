import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import CommentApp from './CommentApp3/containers/CommentApp'
import commentsReducer from './CommentApp3/reducers/reducer'
import './CommentApp3/index.css'

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
  <CommentApp/>
</Provider>, document.getElementById('root'));
