import React from 'react'
export default class CssComponentInline extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color: 'blue'
        }
        this.colorState = this.colorState.bind(this)
    }
    colorState(){
        let newColor = this.state.color === 'blue' ? 'black' : 'blue';
        this.setState({
            color: newColor
        })
    }

    render(){

        //Css Inline
        const divStyle = {
            color: this.state.color,
            background: 'white',
            width: '20rem',
            height: '5rem',
            display: 'flex',
            fontSize: '2rem',
            justifyContent: 'center',
            alignItems: 'center'
        }
        const divBlue = <div style={divStyle} >Azul</div>
        const divBlack = <div style={divStyle} >Preto</div>
        const buttonBlack = <button onClick={this.colorState}>Trocar para preto</button>
        const buttonBlue = <button onClick={this.colorState}>Trocar para azul</button>

        return (
            <div>
                {this.state.color === 'blue' && divBlue}
                {this.state.color === 'black' && divBlack}
                {this.state.color === 'blue' && buttonBlack}
                {this.state.color === 'black' &&  buttonBlue}
            </div>
        )
    }
}