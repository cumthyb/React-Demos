import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp/CommentApp';
import './CommentApp/index.css';
import ClockApp from './ClockApp/ClockApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <CommentApp />,
    document.getElementById('container')
);

/*
ReactDOM.render(
    <ClockApp/>,
    document.getElementById('container')
);
*/
registerServiceWorker();
