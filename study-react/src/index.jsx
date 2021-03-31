import React from 'react'
import ReactDOM from 'react-dom'
import PropsComponentIf from './components/PropsComponent'
ReactDOM.render(
    <React.StrictMode>
        <PropsComponentIf name="JavaScript" userlogged={true}/>
    </React.StrictMode>,
    document.getElementById('container')
);