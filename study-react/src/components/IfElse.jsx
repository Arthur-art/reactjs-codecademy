import React from "react";

 export default class IfElse extends React.Component {
  render() {
   
    const pics = {
      kitty:
        "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
      doggy:
        "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
    };
    
    const imgDog = <img src={pics.doggy} alt=""/>

    const MathCalc = Math.random() < 0.5;
    let message;
    if(MathCalc){
      message = <h2>Eu amo JavaScript</h2>
    }else{
      message = <h2>Eu amo React</h2>
    }

    return <div>
      {message}
      {imgDog}
      </div>;
  }
}
