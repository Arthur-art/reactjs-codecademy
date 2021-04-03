import React from "react";
export default class LoginContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "123456",
      check: false,
    };
    this.check = this.check.bind(this);
  }
  check(e) {
    const valuePass = e.target.querySelector('input[type="password"]').value;
    const checkPass = valuePass === this.state.password;
    this.setState({
      check: checkPass,
    });
  }
  render() {
    const form = (
      <form action="#" onSubmit={this.check}>
          <h1>Digite a senha para ver o contato</h1>
        <input type="password" />
        <input type="submit"  value="login" />
      </form>
    );

    const contactInfo = (
      <div>
        <h1>Contato</h1>
        <h2>(31)98953-7539</h2>
      </div>
    );
    return (
      <div>
        {this.state.check && contactInfo}
        {!this.state.check && form}
      </div>
    );
  }
}
