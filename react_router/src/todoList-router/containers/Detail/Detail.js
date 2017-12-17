import React, {Component} from 'react';

class Detail extends Component {
    render() {
        return (
            <div>
                <p>NotFound404...</p>
                <p>{`${this.props.match.url}`}</p>
            </div>
        )
    }
}

export default Detail;