import React, { useState, useEffect, Fragment } from "react";

export const Tarefas = () => {

    const [newTask, setNewTask] = useState({});
    const handleChange = ({target})=>{
            const {name, value} = target;
            setNewTask((prev)=>({...prev, id: Date.now(), [name]: value}));
    }

    const [allTasks, setAllTasks] = useState([]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        
        setAllTasks((prev)=>[newTask, ...prev]);
        setNewTask({})
    }
console.log(allTasks)

 return (
     <Fragment>
         <h1>to do list</h1>
         <form action="#" onSubmit={handleSubmit}>
             <input type="text" name="title" onChange={handleChange} value={newTask.title || ""}/>
             <button type="submit">Adicionar</button>
         </form>
         <ul>
             {allTasks.map(({title, id})=>{
                return <li key={id}>
                     <div>
                         <h2>{title}</h2>
                     </div>
                 </li>
             })}
         </ul>
     </Fragment>
 )
};


