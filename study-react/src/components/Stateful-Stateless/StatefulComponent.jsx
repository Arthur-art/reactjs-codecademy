import React from 'react'
import {Child} from './StatelessComponent'
import Sibling from './StatelessSibling'
//Classe de componente com estado chamada Parent.

export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Arthur',
            age: 24
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName(newName, newAge){
        this.setState({
            name: newName,
            age: newAge
        })
    }

    render(){
        return (
            <div>
               <Child onChange={this.changeName} />
               <Sibling name={this.state.name} age={this.state.age} />
            </div>
        )
    }
}