import React from 'react'
import {Child} from './StatelessComponent'
//Classe de componente com estado chamada Parent.

export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Arthur'
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName(newName){
        this.setState({
            name: newName
        })
    }

    render(){
        return (
            <div>
               <Child onChange={this.changeName} name={this.state.name} />
            </div>
        )
    }
}