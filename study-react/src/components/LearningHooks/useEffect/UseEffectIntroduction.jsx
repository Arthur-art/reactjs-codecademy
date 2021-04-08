import React, { useState, useEffect } from 'react'

export const UseEffectIntroduction = ()=>{

    const [name, setName] = useState('');

  useEffect(()=>{
      document.title = `Hi, ${name}`
  }, [name])


    return (
        <div>
            <h1>{name}</h1>
            { <input type="text" value={name} onChange={({target})=> setName(name => target.value)}/> }
        </div>
    )
}