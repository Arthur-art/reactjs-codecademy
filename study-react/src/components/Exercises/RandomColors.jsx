import React from 'react'
import Button from './Button'

export default class RandomColors extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:[190,190,190],
        }
        this.handleClick = this.handleClick.bind(this)
    }
    //atualizando this.state.color com o evento de onCLick
    handleClick(){
        this.setState({
            color: this.chooseColor()
        })
    }
    //Montando o component
    componentDidMount(){
        this.applyColor()
    }
    //Atualizando component
    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
      }
    //retornando o this.state.color para 'rgb(x,y,z)'
    applyColor(){
        const color = this.formatColor(this.state.color);
        return color;
    }
    //function para formartar dados para para 'rgb(x,y,z)'
    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }
     //Gerando array com 3 posicoes de numeros aleatorios entrem 0 e 255
     chooseColor(){
        const random = []
        for(let i=0; i<3; i++){
            random.push(Math.floor(Math.random()*256));
        }
        return random;
    }
    

    render(){
        const divColor = <div style={{background: this.applyColor() }}  id="color"></div>;
        return (
            <div>
                <h2>Clique no button para alterar as cores aleatoriamente</h2>
                {divColor}
                <h2>Sua cor é {this.formatColor(this.state.color)}</h2>
                <Button onClick={this.handleClick}/>
            </div>
        )
    }
}