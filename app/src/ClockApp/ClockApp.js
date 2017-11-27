import React, { Component } from 'react'
import Clock from "./Clock"

export default class ClockApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRun: true,
            isShow: true
        }
    }

    onValueChange(event){
        if(event.target.name==="run") this.setState({
            isRun:!this.state.isRun
        })
        else if(event.target.name==="show") this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
            <div>
            
                <input type="checkbox" onChange={this.onValueChange.bind(this)} name="run"/><span>{this.state.isRun?"开启":"停止"}</span><br/>
                <input type="checkbox" onChange={this.onValueChange.bind(this)} name="show"/><span>{this.state.isShow?"显示":"隐藏"}</span><br/>
                <Clock isShow={this.state.isShow}  isRun={this.state.isRun}/>
            </div>

        );
    }


}