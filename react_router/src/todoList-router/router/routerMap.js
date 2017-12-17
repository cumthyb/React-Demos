import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router-dom"
import App from "../containers/App";
import Detail from "../containers/Detail/Detail";
import {Header,Home} from "../containers/Home/Home";
import List from "../containers/List/List";
import NotFound from "../containers/NotFound/NotFound404";

class RouteMap extends Component {

    componentDidUpdate() {
        console.log("router变化");
    }

    render() {
        return (
            <Router history={this.props.history}>
                <div>

                    <Header/>

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/list' component={List}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RouteMap;
