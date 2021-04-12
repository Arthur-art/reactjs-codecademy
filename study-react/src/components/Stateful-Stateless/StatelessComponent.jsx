import React from 'react'

const style={
    width: '20rem',
    height: '2rem',
    fontSize: '1.5rem'
}

//Classe de componente sem estado chamada Child.

export class Child extends React.Component{
    constructor(props){
        super(props);   
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange(e){
        const name = e.target.value;
        this.props.onChange(name)
    }
    render(){
        return (
            <div>
            <h1>Hey my name is {this.props.name}</h1>
            <select onChange={this.handleChange} style={style} id="great-names">
                <option>Select a name</option>
                <option value="Arthur">
                    Arthur
                </option>
                <option value="Ivar">
                    Ivar
                </option>
                <option value="Tyler">
                    Tyler
                </option>
            </select>
            </div>
        )
    }
}