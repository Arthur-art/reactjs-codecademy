import React, {useState, useEffect} from 'react'

export default function CleaningEffects(){

    const [clickCount, setClickCount] = useState(0);

    const setClickCountFunction = ()=>{
        
        setClickCount((state)=>{
            return state +1
        })
    }

    useEffect(()=>{
        document.addEventListener('mousedown', setClickCountFunction);
        return ()=>{
            document.removeEventListener('mousedown', setClickCountFunction)
        }
        
    }, []);

    return (
        <div>
            <h1>Count {clickCount}</h1>
        </div>
    );
}
