import React, { useState } from "react";

const style ={
    width: '15rem'
}

export const ObjectsState = () => {

    const [state, setState] = useState({})
    const funcTarget = ({target})=>{
        const {name, value} = target;
        setState((state)=>({
            ...state,
            [name]: value,
        }))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(JSON.stringify(state, '', 3))
    }
    


    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" onChange={funcTarget} name="Name"  style={style}/><br/>
                <input type="text" onChange={funcTarget} name="SecondName"  style={style}/><br/>
                <input type="date" onChange={funcTarget} name="date"  style={style}/><br/>
                <input type="password" onChange={funcTarget} name="password"  style={style}/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};
