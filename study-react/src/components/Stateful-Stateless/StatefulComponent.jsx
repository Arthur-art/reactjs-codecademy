import React from 'react'

//Classe de componente com estado chamada Parent.

export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Frarthur'
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}