import React from 'react';
import './profile.scss';
import { Link } from 'react-router-dom';




const Profile = (props) => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card-Profile p-3 py-4">
          <div className="text-center"> <img src="https://i.imgur.com/stD0Q19.jpg" width="100" className="rounded-circle" alt='' />
            <h3 className="mt-2 mb-4">Raghad Al-Quran</h3> 
            <div className="col mt-3 mb-3">
              <div className="row-md-4">
                <h5>Position</h5><small>Software Developer</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5>Role</h5> <small>Administration</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5>E-mail</h5><small>raghadalquran1@gmail.com</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5>Birthdate</h5><small>27/10/1995</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5>Net Salary</h5><small>1000JD</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5>Sign-up Date</h5><small>29/7/2020 8:00AM</small>
              </div>
            
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};


export default Profile;
