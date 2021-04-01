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



export default class SetState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'Arthur',
            age: 24,
            job: 'Developer',
            mood: 'good'
        }
        /*Sempre que você definir um manipulador de eventos que usa this,
         você precisa adicionar this.methodName = this.methodName.bind(this)à sua função de construtor. */
       this.setStateProps = this.setStateProps.bind(this)
    }
    setStateProps(){
        const newMood = this.state.mood == 'good' ? 'bad' : 'good';
        const newJob = this.state.job == 'Developer' ? 'Developer React' : 'Developer'
        this.setState({
            job: newJob,
            mood: newMood,
        })
    }
    

    render(){
   
    console.log('this.state: '+JSON.stringify(this.state))
        
        return(
            <div>
               <h2>I'm {this.state.mood}</h2> 
               <h2>I'm {this.state.job}</h2>
               <button onClick={this.setStateProps}>state</button>
            </div>
        )
    }
}