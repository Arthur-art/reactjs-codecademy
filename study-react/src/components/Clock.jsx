import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date: new Date(),
            stop: false,
        }
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
        this.stopClock = this.stopClock.bind(this)
    }
    stopClock(){
        const newClock = this.state.stop == false ? true : false;
        this.setState({
            stop: newClock,
        })
    }
    render(){

        const clock = this.state.stop == false ? this.state.date.toLocaleTimeString() : '';
        const change = this.state.stop == false ? 'Stop' : 'Init';
        return (
            <div>
                <h1>Time</h1>
                <h2>{clock}</h2>
                <button onClick={this.stopClock}>{change} time</button>
            </div>
        )
    }

    componentDidMount(){
        const oneSecond = 1000;
       this.intervalID =  setInterval(()=>{
            this.setState({
                date: new Date()
            })
        }, oneSecond)
        
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }
}
export default Clock