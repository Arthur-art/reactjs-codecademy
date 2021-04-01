import React from 'react'
export default class Button extends React.Component{
    render(){
        const props = JSON.stringify(this.props);
        return (
            <div>
                <button onClick={this.props.talk}>Talk</button>
               <button onClick={this.props.propsComponent}>PropsComponentChildren</button>
            </div>
        )
    }
}