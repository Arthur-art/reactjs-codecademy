import React from 'react'
import ReactDOM from 'react-dom'
import PropsComponent from './components/PropsComponent'

ReactDOM.render(
    <React.StrictMode>
        <PropsComponent name="JavaScript" userlogged={true}/>
    </React.StrictMode>,
    document.getElementById('container')
);