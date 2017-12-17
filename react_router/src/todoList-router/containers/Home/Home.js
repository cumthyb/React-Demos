import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/list">to list</Link>
            </div>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <p>React-Router Demo</p>
        )
    }
}


export  {Header,Home};