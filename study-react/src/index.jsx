import React from 'react'
import ReactDOM from 'react-dom'
import DefaultProps from './components/PropsComponent'

DefaultProps.defaultProps = {text:"Nenhum texto foi passado"}

ReactDOM.render(
    <React.StrictMode>
        <DefaultProps name="React" text="Texto" userlogged={true}>Hello World</DefaultProps>
    </React.StrictMode>,
    document.getElementById('container')
);