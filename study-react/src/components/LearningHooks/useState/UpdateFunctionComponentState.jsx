import React, { useState } from 'react'

export function UpdateFunction(){
    

    const [color, setColor] = useState();

    const changeColors ={
        background: color,
        width: '40rem',
        height: '10rem',
    }


    return (
        <div>
            <div style={changeColors}></div>
            <button onClick={()=> setColor('blue')}>blue</button>
            <button onClick={()=> setColor('red')}>red</button>
            <button onClick={()=> setColor('black')}>black</button>
            <button onClick={()=> setColor('grey')}>grey</button>
        </div>
    )
}