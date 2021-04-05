import React from "react";
class State extends React.Component {
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


const blue = '#6495ED';
const yellow = '#FFFF00';
export default class SetState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'Arthur',
            age: 24,
            job: 'Developer React',
            mood: 'good',
            color: blue,
        }
        /*Sempre que você definir um manipulador de eventos que usa this,
         você precisa adicionar this.methodName = this.methodName.bind(this)à sua função de construtor. */
       this.setStateProps = this.setStateProps.bind(this)
    }
    setStateProps(){
        const newMood = this.state.mood == 'good' ? 'fine' : 'good';
        const newJob = this.state.job == 'Developer React' ? 'Developer JavaScript' : 'Developer React'
        const newColor = this.state.color == blue ? yellow : blue;
        this.setState({
            job: newJob,
            mood: newMood,
            color: newColor
        })
    }

    render(){
   
    console.log('this.state: '+JSON.stringify(this.state))
        
        return(
            <div style={{background: this.state.color}}>
               <h2>I'm {this.state.mood}</h2> 
               <h2>I'm {this.state.job}</h2>
               <button onClick={this.setStateProps}>state</button>
            </div>
        )
    }
}