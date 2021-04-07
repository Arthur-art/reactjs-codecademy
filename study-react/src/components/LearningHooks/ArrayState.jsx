import React, { useState } from 'react'

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

export const ArrayState = ()=>{

    const [selected, setSelected] = useState([]);

    const toggleTopping = ({target})=>{
        const clickedTopping = target.value;

        setSelected((prev)=>{
            if(prev.includes(clickedTopping)){
                // filtra a cobertura clicada para fora do estado
                return prev.filter((value)=> value !== clickedTopping)
            }else{
                return [clickedTopping, ...prev]
            }
        })
    }
console.log(selected)

    return (
        <div>
            {options.map((value)=>(
                    <button key={value} value={value} onClick={toggleTopping}>
                    {selected.includes(value) ? 'Delete ' : 'Add '}
                    {value}
                </button>
            ))}
            <p>- Pizza, {selected.join(", ")}</p>
        </div>
    )
}