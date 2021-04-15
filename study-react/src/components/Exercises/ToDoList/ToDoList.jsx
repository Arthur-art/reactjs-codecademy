import React, { useState, Fragment } from "react";

const task = [{ task: "task1" }, { task: "task2" }, { task: "task3" }];

export const ToDoList = () => {

    const [newTask, setNewTask] = useState({})
    const handleChange = ({target})=>{
        const {name, value} = target;
        setNewTask((prev)=>({
            ...prev,
            id:Date.now(),
            [name]:value
        }))
    }

    const [allTasks, setAllTasks] = useState([])
    const handleSubmit = (event)=>{
        event.preventDefault()
        setAllTasks((prev)=>([
            newTask,
            ...prev
        ]))
        setNewTask({})
    }

    const handleDelete = (taskId)=>{
        setAllTasks((prev)=>prev.filter((task)=>{
            return task.id !== taskId;
        }))
    }

  const form = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newTask.task || ""} name="task" />
      <button type="submit">Adicionar</button>
    </form>
  );
  const showData = (
    <ul>
      {allTasks.map(({ task,id }) => {
        return (
          <li>
            <h3 key={id}>{task}</h3>
            <button onClick={()=>handleDelete(id)}>X</button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Fragment>
      {form}
      {showData}
    </Fragment>
  );
};
