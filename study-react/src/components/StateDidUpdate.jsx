import React from 'react';

export default class StateDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), isPrecise:true, };
    this.setStateClock = this.setStateClock.bind(this)
  }
  setStateClock(){
      const newIsPrecise = this.state.isPrecise === true ? false : true;
      this.setState({
          isPrecise: newIsPrecise
      })
  }
  render() {
    return (
      <div>
        <h1>{this.state.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}</h1>
          <button onClick={this.setStateClock}>Toggle precise mode</button>
      </div>
    );
  }
  startInterval() {
    let delay;
    if (this.state.isPrecise) {
      delay = 100;
    } else {
      delay = 1000;
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  componentDidMount() {
    this.startInterval();
  }
  
}