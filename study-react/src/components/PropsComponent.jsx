import React from "react";
/*propsé o nome do objeto que armazena as informações transmitidas. 
this.propsrefere-se a esse objeto de armazenamento. Ao mesmo tempo, 
cada informação transmitida é chamada de suporte. Isso significa que propspode se referir 
a duas informações transmitidas ou ao objeto que armazena essas informações */

export default class PropsComponent extends React.Component {
  render() {
     //this.props é um objeto de um component
    const myProps = JSON.stringify(this.props);
    //destructuring
    let {age} = this.props; 
    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{myProps}</h2>
        <h2>{this.props.firstName}</h2>
        <h2>{this.props.secondName}</h2>
        <h2>Idade {age}</h2>
      </div>
    );
  }
}
