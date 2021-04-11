import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './components/Stateful-Stateless/StatefulComponent'

ReactDOM.render(
    <React.StrictMode>
       <Parent />
    </React.StrictMode>,
    document.getElementById('app')
);