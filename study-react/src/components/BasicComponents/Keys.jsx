import React from "react";

export default class Keys extends React.Component {
  render() {
    /*A keyé um atributo JSX. O nome do atributo é key. O valor do atributo deve ser algo único, semelhante a um idatributo.

keysnão faça nada que você possa ver! O React os usa internamente para controlar as listas. 
Se você não usar as teclas quando deveria, o React pode acidentalmente embaralhar os itens da lista na ordem errada.

Nem todas as listas precisam ter keys. É necessária uma lista keysse uma das seguintes condições for verdadeira:

Os itens da lista têm memória de uma renderização para a próxima. Por exemplo, quando uma lista de tarefas é 
renderizada, cada item deve “lembrar” se foi desmarcado. Os itens não devem ficar com amnésia ao serem processados.

A ordem de uma lista pode ser embaralhada. Por exemplo, uma lista de resultados de pesquisa pode ser 
embaralhada de uma renderização para a próxima.

Se nenhuma dessas condições for verdadeira, você não precisa se preocupar keys. Se você não tem certeza,
 nunca é demais usá-los! */
    

    const users = ["Arthur","Mateus","Vitu","Louis"];
    const listUsers = users.map((value, i)=>{
        return <li key={'users_'+i}>{value}</li>
    })
    const listKeys = <ul>{listUsers}</ul>


    return <div>
        {listKeys}
    </div>;
  }
}
