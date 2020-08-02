import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './editProfile.scss';
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import {userSignIn} from '../../../store/actions';

let API = 'https://ems-access-denied.herokuapp.com';
const EditProfile = (props) => {
  const [users, setUsers] = useState({});
  const [selectedUser, setSelectedUser] = useState({});

  const getUserProfile = async () => {
    const token = cookie.load('auth');
    const response = await fetch(`${API}/getuserprofile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  function editUser (user) {
    console.log(user);
    const token = cookie.load('auth');
    fetch( `${API}/usereditprofile`, {
      method: 'patch',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        '_id':`${user._id}`,
        'username':`${user.username}`,
        'password':`${user.password}`,
        'email': `${user.email}`,
        'image': `${user.image}`,
        'gender': `${user.gender}`,
        'birthday': `${user.birthday}`,        
      }),
    }); 
  }
  const handleInputChange = (event) => {
    if(event.target.name) setSelectedUser({...selectedUser ,[event.target.name]:event.target.value});
    else  setSelectedUser(event.target.value);
    console.log(selectedUser);
  }; 

  const handleSubmit = (event) => {
    if(event) event.preventDefault();
    event.target.reset();
    console.log(selectedUser);
    console.log(event.target.value,'event.target.value');

    editUser (event.target.value);
  };
  useEffect (() => {
    getUserProfile().then(dbUsers => setUsers(dbUsers) );
    props.userSignIn();
  },[]);
  return (
    <>
      <div class="container rounded bg-white mt-5">
        <div class="row-edit">
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src={users.image} width="90" alt='' /><span class="font-weight-bold">John Doe</span><span class="text-black-50">{users.email}</span><span>Jordan</span></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="col-md-8" onSubmit={handleSubmit}>
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                    <Link to="/profile">
                      <h6>Back to profile</h6>
                    </Link>
                  </div>
                  <h6 class="text-right">Edit Profile</h6>
                </div>
                <div class="row-edit mt-2">
                  <div class="col-md-6"><input type="text" class="form-control" name='Username' onChange={handleInputChange} placeholder="Username" value={users.username}/></div>
                  <div class="col-md-6"><input type="text" class="form-control" name='Password' onChange={handleInputChange} placeholder="Password" value={users.password}/></div>
                </div>
                <div class="row-edit mt-3">
                  <div class="col-md-6"><input type="text" class="form-control" name='Email' onChange={handleInputChange} placeholder="Email" value={users.email}/></div>
                  <div class="col-md-6"><input type="text" class="form-control" name='Phone number' onChange={handleInputChange} placeholder="Phone number" value="+19685969668"/></div>
                </div>
                <div class="row-edit mt-3">
                  <div class="col-md-6"><input type="text" class="form-control" name='Gender' onChange={handleInputChange} placeholder="Gender" value={users.gender}/></div>
                  <div class="col-md-6"><input type="text" class="form-control" name='Birthday' onChange={handleInputChange} placeholder="Birthday" value={users.birthday}/></div>
                </div>
                <div class="row-edit mt-3">
                  <div class="col-md-6"><input type="text" class="form-control" name='Bank Name'  placeholder="Bank Name" value="Bank of America"/></div>
                  <div class="col-md-6"><input type="text" class="form-control" name='Account Number'  placeholder="Account Number" value="043958409584095"/></div>
                </div>
                <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type='submit'>Save Profile</button></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = { userSignIn};

const mapStateToProps = (state) => ({
  logInReducer: state.logInReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

