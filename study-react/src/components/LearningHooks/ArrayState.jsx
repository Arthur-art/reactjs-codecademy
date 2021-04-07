import React, { useState } from "react";

const options = ["Calabresa", "Catupiry", " a Moda", "4 queijos"];

export const ArrayState = () => {
  const [sabor, setSabor] = useState([]);

  const selectSabores = ({ target }) => {
    const valueSabores = target.value;
    setSabor((sabor)=>{
        if(sabor.includes(valueSabores)){
            return sabor.filter((value)=>{
                return value !== valueSabores
            })
        }else{
            return [...sabor, valueSabores]
        }
    })
    
  };

  return (
    <div>
      {options.map((value) => {
        return (
          <button key={value} onClick={selectSabores} value={value}>
            {sabor.includes(value) ? 'Delete ' : 'Add '}
            {value}
          </button>
        );
      })}
      <h2>- Pizza, {sabor.join(', ')} </h2>
    </div>
  );
};
