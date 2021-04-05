import React from "react";

export default class Operator extends React.Component {
  render() {

/*Condicionais JSX: &&
Vamos cobrir uma forma final de escrever condicionais no React: o &&operador.

Como o operador ternário, &&não é específico do React, mas aparece no React com uma frequência surpreendente.

&&funciona melhor em condicionais que às vezes farão uma ação, mas outras vezes não farão absolutamente nada .

Aqui está um exemplo: */


    const judgmental = Math.random() < 0.5;
    const Shushi = Math.random() < 0.5;

    const favoriteFoods = (
      <div>
        <h1>My Favorite Foods</h1>
        <ul>
          {Shushi && <li>Sushi Burrito</li>}
          <li>Rhubarb Pie</li>
          {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
          <li>Broiled Grapefruit</li>
        </ul>
      </div>
    );

    return <div>{favoriteFoods}</div>;
  }
}
