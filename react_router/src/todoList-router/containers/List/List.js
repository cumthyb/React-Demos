import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class List extends Component {
    constructor(props) {
        super(props);
        this.hashHistory = this.props.history;
    }

    render() {
        const arr = [1, 2, 3]
        return (
            <ul>
                {arr.map((item, index) => {
                    return <li key={index}>
                   
                    <Link to={`/detail/${index}`}> js jump to {item}
                    </Link>  
                    
                    </li>
                })}
            </ul>
        )
    }
}

export default List;