import React, {useState, useEffect} from 'react';
import './profile.scss';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import {userSignIn} from '../../../store/actions';

const Profile = (props) => {
  const [users, setUsers] = useState({});
 
  const getUserProfile = async () => {
    const token = cookie.load('auth');
    const response = await fetch('https://ems-access-denied.herokuapp.com/getuserprofile', {
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

  useEffect (() => {
    getUserProfile().then(dbUsers => setUsers(dbUsers) );
    props.userSignIn();
  },[]);
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card-Profile p-3 py-4 text-center">
          <div className="F1">
            <img src={users.image} className="text-center" width="100" className="rounded-circle" alt='' />
            <div className="F2">
              <h3 className="mt-2 mb-0">{users.username} </h3> 
              {/* <div className="col mt-3 mb-3"> */}
              <h5>Position: {users.position}</h5>
            </div>
          </div>

          <hr className="line" /> 
          <div className="row-md-4">
            <h5>Role</h5> <small>{users.role}</small>
          </div>
          <hr className="line" /> 
          <div className="row-md-4">
            <h5>E-mail</h5><small>{users.email}</small>
          </div>
          <hr className="line" /> 
          <div className="row-md-4">
            <h5>Birthdate</h5><small>27/10/1995</small>
          </div>
          <hr className="line" /> 
          <div className="row-md-4">
            <h5>Net Salary</h5><small>{(users.workHours*12).toFixed(2)}JD</small>
          </div>
          <hr className="line" /> 
          <div className="row-md-4">
            <h5>Sign-up Date</h5><small>29/7/2020 8:00AM</small>
          </div>
            
          {/* </div> */}
          <hr className="line" /> 
          <div className="social-buttons mt-5"> <button className="neo-button"><i className="fa fa-facebook fa-1x"></i> </button> <button className="neo-button"><i className="fa fa-linkedin fa-1x"></i></button> <button className="neo-button"><i className="fa fa-google fa-1x"></i> </button> <button className="neo-button"><i className="fa fa-youtube fa-1x"></i> </button> <button className="neo-button"><i className="fa fa-twitter fa-1x"></i> </button> </div>
          <div className="profile mt-5">
            <Link to="/profile/EditProfile">
              <button className="profile_button px-5">Edit profile</button>
            </Link>
            <Link to="/profile/Feedback">
              <button className="profile_button px-5">Vacation Request</button>
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};


const mapDispatchToProps = { userSignIn};

const mapStateToProps = (state) => ({
  logInReducer: state.logInReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

