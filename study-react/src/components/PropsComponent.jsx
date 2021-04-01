import React from "react";
import Button from "./Button";
/*props é o nome do objeto que armazena as informações transmitidas. 
this.propsrefere-se a esse objeto de armazenamento. Ao mesmo tempo, 
cada informação transmitida é chamada de suporte. Isso significa que propspode se referir 
a duas informações transmitidas ou ao objeto que armazena essas informações */
class PropsComponent extends React.Component {
  render() {
    //this.props é um objeto de um component
    const myProps = JSON.stringify(this.props);
    //destructuring
    let { age } = this.props;

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

//usando props para passar em condicoes
class PropsComponentIf extends React.Component {
  talk() {
    alert("Talk");
  }
  render() {
    let title;
    let login;
    if (this.props.name === "React") {
      title = <h1>Estudando React</h1>;
    }

    if (this.props.name === "JavaScript") {
      title = <h1>Estudando JavaScript</h1>;
    }

    if (this.props.userlogged === false) {
      login = "Voce esta offline";
    } else {
      login = "Voce esta online";
    }
    let propsChildren = JSON.stringify(this.props.children);
    const props = () => console.log(propsChildren);

    return (
      <div>
        {title}
        <h2>{login}</h2>
        <Button talk={this.talk} propsComponent={props} />
      </div>
    );
  }
}

export default class DefaultProps extends React.Component {
  /*
    Se ninguém passar nenhum text para DefaultProps , DefaultProps o display ficará em branco. 
    Seria melhor se DefaultProps pudesse exibir uma mensagem padrão.

    Você pode fazer isso acontecer fornecendo à sua classe de componente uma propriedade chamada defaultProps:

    DefaultProps.defaultProps = {text:"Nenhum texto foi passado"}

    ReactDOM.render(
  <DefaultProps />, 
  document.getElementById('app')
);

  */

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
