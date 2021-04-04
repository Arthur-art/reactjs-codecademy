import React from 'react'
export default class LoginContact extends React.Component{
  constructor(props){
    super(props)
    this.state={
      password:'123456',
      check: false
    }
    this.check = this.check.bind(this)
    this.newButtonCancel = this.newButtonCancel.bind(this)
  }

  check(e){
    const inputValue = e.target.querySelector('input[type="password"]').value;
    const newCheck = inputValue === this.state.password;
    this.setState({
      check: newCheck,
    })

  }
  newButtonCancel(){
    const button = this.state.check === true ? false : true;
    this.setState({
      check: button
    })
  }


  render(){

    const form = (
      <form action="#" onSubmit={this.check}>
        <h1>Digite a senha</h1>
        <input type="password"/><br/>
        <button type="submit">Abrir</button>
      </form>
    );
    const contact=(
    <div>
      <h1>Contato</h1>
      <h2>(31)98953-7539</h2>
    </div>
    );
    const buttonBack = <button onClick={this.newButtonCancel}>Fechar</button>

    return (
      <div>
        {!this.state.check && form}
        {this.state.check && contact}
        {this.state.check && buttonBack}
      </div>
    )
  }
}