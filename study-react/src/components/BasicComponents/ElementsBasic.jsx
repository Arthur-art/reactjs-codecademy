import React from "react";
export default class ElementsBasic extends React.Component {
  render() {

    const h1 = <h1 className="title">Codecademy</h1>;

    const tagA = (
      <div>
        <a href="#" className="link">
          <h1>Aprendendo React</h1>
        </a>
      </div>
    );

    const myList = (
        <ul>
            <li>Aprendendo</li>
            <li>React</li>
            <li>codecademy</li>
        </ul>
    )
    const imgGit = 'https://avatars.githubusercontent.com/u/54858003?v=4';    
    const imgShow =<div>
         <img src={imgGit} alt=""/>
    </div>

    const sum = <h1>2 + 3 é igual a {2+3}</h1>

    return (
      <div>
        {h1}
        {tagA}
        {myList}
        {sum}
        {imgShow}
      </div>
    );
  }
}
