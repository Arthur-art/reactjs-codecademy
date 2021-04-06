import React from 'react'


//Uma classe de componente escrita da maneira usual
 export default class StatelessComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello Class</h1>
            </div>
        )
    }
}


//a mesma classe de componente, escrita como um componente funcional sem estado, functions são
//importadas desta forma {StatelessFunctional}
export const StatelessFunction=(props)=>{
    return (
    <div>
         <h1>Hello Function</h1>
         <h2>{props.propsFunction}</h2>
    </div>
   )
}