import React from 'react';
export default class Oneclick extends React.Component{
    render(){
        const makeDog =(e)=> {
            e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
        };
        const cat = 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg';
        let linkCat = <img onClick={makeDog} src={cat} alt="Cat"/>;
        return (
            <div>
                {linkCat}
            </div>
        );
    };
};