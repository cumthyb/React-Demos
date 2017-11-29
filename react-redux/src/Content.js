import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SwitchBtn from "./ThemeSwitch"
export default class Content extends Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <div>
                <p>React.js 小鼠内容</p>
                <SwitchBtn/>
            </div>
        )

    }

}