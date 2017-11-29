import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeColor: ''
        }
    }

    static contexTypes = {
        store: PropTypes.object
    }
    componentWillMount() {
        this._updateThemeColor()
    }

    _updateThemeColor() {
        const {store} = this.context
        const state = store.getState()
        this.setState({themeColor: state.themeColor})
    }

    render() {
        return (
            <h1 style={{ color: this.state.themeColor }}>React.js小鼠</h1>
        )
    }

}