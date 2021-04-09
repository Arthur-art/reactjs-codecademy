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
  componentDidUpdate(prevProps, prevState){
    if(this.props.username !== prevProps.username){
      cancelFetch(this.fetchID)
      this.loadUserData()
    }
  }

  render() {
    const isLoading = this.state.userData === null ? true : false;
    let name = isLoading === true ? 'Loading...' : this.state.userData.name;
    let bio = isLoading === true ? 'ok... ' : this.state.userData.bio;
    let friends = isLoading === true ? [] : this.state.userData.friends;

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    return (
      <div className={className}>
        {!isLoading && <div className="profile-picture">
        <img src={this.state.userData.profilePictureUrl} alt="" />
        </div>}
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <UserList usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
  componentWillUnmount(){
    cancelFetch(this.fethcID)
  }
}