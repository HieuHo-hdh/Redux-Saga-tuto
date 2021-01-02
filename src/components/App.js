import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsersRequest, createUserRequest, deleteUserRequest, usersError} from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import {Alert} from 'reactstrap';

//Connect App components to redux-store

class App extends Component {
  //constructor of App
  constructor (props)
  {
    super(props);
    this.props.getUsersRequest();   //access to getUsersRequest on Props
  }

  handleSubmit = ({firstName,lastName}) =>
  {
    console.log(firstName,lastName);
    this.props.createUserRequest({
        firstName,
        lastName
      });
  };

  handleDeleteUserClick = (userId) =>
  {
    this.props.deleteUserRequest(userId);
  ;}

  handleCloseAlert=() =>
  {
    this.props.usersError({
      error:''
    })
  };
  render(){
    const users = this.props.users;
    return (
      <div style= {{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
          {this.props.users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit}/>
        <UsersList onDeleteUser={this.handleDeleteUserClick} users ={users.items}/>
      </div>
    );
  }
}


export default connect(({users}) => ({users}),{
//connect is used to map states to props here, map users state -> props by {{users state}} return {users} prop
//=> users is accessible in this props
  
    getUsersRequest,
    createUserRequest,
    deleteUserRequest,
    usersError
  })(App);
