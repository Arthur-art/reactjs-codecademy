import React from "react";

export default class StateDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), isPrecise: true, clock: true };
    this.setStateClock = this.setStateClock.bind(this);
    this.setStateClockInit = this.setStateClockInit.bind(this);
  }
  setStateClock() {
    const newIsPrecise = this.state.isPrecise === true ? false : true;

    this.setState({
      isPrecise: newIsPrecise,
    });
  }
  setStateClockInit() {
    const clockInit = this.state.clock === true ? false : true;
    this.setState({
      clock: clockInit,
    });
  }
  render() {
    const Show = this.state.clock === true ? "Hidden" : "Show";
    const ClockPrecise = this.state.isPrecise
      ? this.state.date.toISOString()
      : this.state.date.toLocaleTimeString();
    return (
      <div>
        <h1>{this.state.clock === true ? ClockPrecise : ""}</h1>
        <button onClick={this.setStateClock}>Toggle precise mode</button>
        <button onClick={this.setStateClockInit}>{Show}Clock</button>
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
  componentWillUnmount() {}
}
