import React from "react";
export default class State extends React.Component {
    constructor(props){
        super(props);
        this.state = {text: "Aprendendo react"}
    }
  render() {
    return <div>
        <h1>{this.state.text} na codecademy</h1>
    </div>;
  }
}
