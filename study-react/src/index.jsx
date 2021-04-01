import React from 'react'
import ReactDOM from 'react-dom'
import PropsComponent from './components/PropsComponent'

ReactDOM.render(
    <React.StrictMode>
        <PropsComponent name="React" userlogged={true}>Hello World</PropsComponent>
    </React.StrictMode>,
    document.getElementById('container')
);