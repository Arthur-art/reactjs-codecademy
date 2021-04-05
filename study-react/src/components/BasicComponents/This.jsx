import React from 'react'

export default class This extends React.Component{
    get Name(){
        return 'This - Arthur';
    }

    CreateAlert(){
        alert('Alert')
    }

    render(){
        
        let name = 'Tesla';

        return (
            <div>
                <h1>{this.Name}</h1>
                <button onClick={this.CreateAlert}>Alert</button>
            </div>
        )
    }
}