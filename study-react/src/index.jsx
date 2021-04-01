import React from 'react'
import ReactDOM from 'react-dom'
import SetState from './components/State'

ReactDOM.render(
    <React.StrictMode>
        <h1>React</h1>
        <SetState />
    </React.StrictMode>,
    document.getElementById('container')
);