import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Content from './Content';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';


 function createStore(reducer) {
    let state = null;
    let listeners = [];
    const subsribe = (lis) => listeners.push(lis);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    }
    return {getState,dispatch,subsribe}
};


function themeReducer(state, action) {
    if (!state) 
        return {themeColor: "red"};
    switch (action.type) {
        case "CHANGE_COLOR":
            state = {
                ...state,
                themeColor: action.themeColor
            };
            break;
        default:
            return state;
    }
}

const store=createStore(this.themeReducer);


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeColor: "red"
        }
    } 

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return store;
    }
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>, document.getElementById('root'));
registerServiceWorker();
