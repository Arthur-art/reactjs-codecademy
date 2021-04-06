import React, {useState} from 'react'

export const QuizNavaBar=()=>{

   const [num, setNum] = useState(0);
   const increment = ()=> setNum(num => num+=1)
   

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}