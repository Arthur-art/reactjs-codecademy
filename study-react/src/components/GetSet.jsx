import React from "react";
export default class GetSet extends React.Component {
  render() {
    //Não é possivel alterar o objGet.name pois o get so permite leitura da propriedade
    let objGet = {
      get name() {
        return "Arthur";
      },
    };
    //objGet.name = "Ivar";

    //objGetSet.v recebera sempre o dobro do valor recebido
    let _v=0;
    let objGetSet = {
        get v(){
            return 'Value '+_v;
        },
        set v(value){
            _v = value *2;
        }
    }
    objGetSet.v = 90;

    return <div>{objGetSet.v}</div>;
  }
}
