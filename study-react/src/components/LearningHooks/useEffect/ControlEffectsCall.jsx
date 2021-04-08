import React, {useState, useEffect} from 'react'

export const ControlEffectsCall = ()=>{

    const [time, setTime] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime((time)=> time +1)
        }, 1000)

        return ()=> clearInterval(intervalId)
    }, [])

    const handleChange = ({target})=>{
        setName((name)=> target.value)
    }

    return (
        <div>
            <h1>Time: [{time}]</h1>
            <input type="text" value={name} onChange={handleChange}/>
        </div>
    )
}