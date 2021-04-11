import React from 'react'
import {Child} from './StatelessComponent'
//Classe de componente com estado chamada Parent.

export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Arthur'
        }
    }

    render(){
        return (
            <div>
               <Child name={this.state.name} />
            </div>
        )
    }
}