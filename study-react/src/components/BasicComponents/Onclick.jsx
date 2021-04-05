import React from 'react';
export default class Onclick extends React.Component{
    talk(){
        alert('3 segundos se passou')
    }
    render(){

        const makeDog =(e)=> {
            e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
        };
        
        const cat = 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg';

        const AppInit = ()=>{
            setTimeout(this.talk, 2000)
        }

        let linkCat = <img  onClick={AppInit} src={cat} alt="Cat"/>;

        return (
            <div>
                {linkCat}
            </div>
        );
    };
};