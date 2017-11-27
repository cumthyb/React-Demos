import React, { Component } from "react"

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    
    componentWillMount () {
        this.timer = setInterval(() => {
          this.setState({ date: new Date() })
        }, 1000)
      }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isRun){
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.setState({ date: new Date() })
            }, 1000)
        }
        else
            clearInterval(this.timer);
    }
    

    render() {
        var rStyle = {
            display:this.props.isShow?"block":"none"
        };
        return (
            <div style={rStyle}>
                <h2>现在时间</h2>
                <span >{this.state.date.toLocaleTimeString()}</span>
            </div>
        );
    }

}