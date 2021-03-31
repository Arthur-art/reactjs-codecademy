import React from 'react'
import ReactDOM from 'react-dom'
import IfElse from './IfElse'
import NavBar from './NavBar'
//components reenderizando outros components
export default class RenderComponent extends React.Component{
    render(){
        return (
            <div>
                <h2>Importando component dentro de um component</h2>
                <NavBar/>
                <h3>Component:{<IfElse/>}</h3>
            </div>
        )
    }
}

ReactDOM.render(<RenderComponent/>, document.getElementById('container'))