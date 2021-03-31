import React from 'react'
import ReactDOM from 'react-dom'
import This from './components/This'
import IfElse from './components/IfElse'

ReactDOM.render(
    <React.StrictMode>
        <This/>
        <IfElse/>
    </React.StrictMode>,
    document.getElementById('container')
);