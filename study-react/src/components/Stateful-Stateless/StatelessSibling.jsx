import React from 'react'

export default class Sibling extends React.Component{
    render(){
        const name = this.props.name;
        const age = this.props.age;

        return (
            <div>
                <h1>Hey my name is {name}, i have {age} years</h1>
            </div>
        )
    }
}