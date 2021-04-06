import React, {useState} from 'react'

export const QuizNavaBar=({questions})=>{
/*
   const [num, setNum] = useState(0);
   const increment = ()=> setNum(num => num+=1)
   

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
    */

        const [firstQuestion, setQuestion] = useState(0);
        const goNext = () => setQuestion((question)=> question +1)
        const goBack = () => setQuestion((question)=> question -1)
        const checkMin = firstQuestion === 0 ? true : false;
        const checkMax = firstQuestion === 10 ? true : false;
        

        return (
            <div>
                <h1>Question#{firstQuestion}</h1>
                <button onClick={goNext} disabled={checkMax} >Next</button>
                <button onClick={goBack} disabled={checkMin}>Back</button>
            </div>
        )

}