import React from 'react'
export default class Button extends React.Component{
    render(){
        const props = JSON.stringify(this.props);
        return (
            <div>
                <button onClick={this.props.talk}>Talk</button>
                <h1>Obj Props de PropsComponent{this.props.propsComponent}</h1>
            </div>
        )
    }
}