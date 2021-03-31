import React from 'react'
import ReactDOM from 'react-dom'
import PropsComponent from './components/PropsComponent'
ReactDOM.render(
    <React.StrictMode>
        <PropsComponent firstName="Arthur" secondName="Teixeira" age={24}/>
    </React.StrictMode>,
    document.getElementById('container')
);