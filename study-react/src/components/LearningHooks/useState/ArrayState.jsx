import React, { useState } from 'react'

const options = ['calabresa', 'sorvete', 'quatro queijos', 'moda']

export const ArrayState = ()=>{

    const [state, setState] = useState([]);
    const setSabor = ({target})=>{
        const option = target.value;
        setState((state)=>{
            if(state.includes(option)){
                return state.filter((value)=>{
                    return value !== option;
                })
            }else{
                return [...state, option]
            }
        })
    }


    return (
        <div>
            {options.map((value)=>{
                return <button value={value} onClick={setSabor} key={value }>
                {state.includes(value) ? 'Delete ' : 'Add '}
                {value}
                </button>
            })}
            <h1>- Pizza: {state.join(', ')}</h1>
        </div>
    )
}