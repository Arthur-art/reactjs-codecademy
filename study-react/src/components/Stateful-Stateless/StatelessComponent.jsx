import React from 'react'

//Classe de componente sem estado chamada Child.

export class Child extends React.Component{
    render(){
        return (
            <h1>Hey my name is {this.props.name}</h1>
        )
    }
}