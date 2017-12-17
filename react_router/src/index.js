import React from 'react';
import ReactDOM from "react-dom"
import RouteMap from "../src/todoList-router/router/routerMap"
import createBrowserHistory from 'history/createBrowserHistory';

const hashHistory = createBrowserHistory();
ReactDOM.render(
    <RouteMap history={hashHistory}/>,
    document.getElementById("root")
);