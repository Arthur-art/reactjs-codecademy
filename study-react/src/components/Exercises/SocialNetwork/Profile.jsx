import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { UserList } from './UserList';

export class Profile extends React.Component {
  //Armazenando dados
  constructor(props){
    super(props)
    this.state={
      userData:null
    }
  }
  //Carregando dados, define o userData como null enquanto os dados estao sendo atualizados
  loadUserData(){
    fetchUserData(this.props.username, (userData)=>{
      this.setState({
        userData
      })
    })
  }
  componentDidMount(){
    this.loadUserData()
  }

  render() {
    const isLoading = true;

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    return (
      <div className={className}>
        <div className="profile-picture"></div>
        <div className="profile-body">
          <h2>Name goes here</h2>
          <h3>@{this.props.username}</h3>
          <p>Bio goes here</p>
          <h3>My friends</h3>
          <UserList usernames={[]} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}