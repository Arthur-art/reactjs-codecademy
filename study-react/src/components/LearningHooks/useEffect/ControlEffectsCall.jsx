import React, {useState, useEffect} from 'react'

export const ControlEffectsCall = ()=>{

    const [time, setTime] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime((time)=> time +1)
        }, 1000)

        return ()=> clearInterval(intervalId)
    })

    return (
        <div>
            <h1>Time: [{time}]</h1>
        </div>
    )
}