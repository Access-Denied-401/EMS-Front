/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import useAjax from '../../hooks/ajaxHook';
import {userSignIn} from '../../../store/actions';
import Swal from 'sweetalert2';
import { useHistory} from 'react-router-dom';
import './profile.scss';

const Profile = (props) => {
  const [users, setUsers] = useState({});
  const {userSignIn} = props;
  const {getUserProfile,userStartWork,userEndWork} = useAjax();
  const history = useHistory(); 

  function alertUserStartWork() {
    Swal.fire({
      icon:'success',
      title: 'You had start your work',
      text: 'We hope you will enjoy your new day ^_^',
    }).then(function() {
      history.push('/profile');
    });
  }

  function alertUserStartBefore() {
    Swal.fire({
      icon:'error',
      title: 'إنتا إبتستعبط يلا',
      text: 'مش علينا يا مندلينا',
    }).then(function() {
      history.push('/profile');
    });
  }  

  function alertUserEndWork() {
    Swal.fire({
      icon:'success',
      title: 'You had finish your work',
      text: 'Enjoy in the rest of your day ^_^',
    }).then(function() {
      history.push('/profile');
    });
  }

  function alertUserEndBefore() {
    Swal.fire({
      icon:'error',
      title: 'إنتا إبتستعبط يلا',
      text: 'مش علينا يا مندلينا',
    }).then(function() {
      history.push('/profile');
    });
  }  

  function handelStart(){
    userStartWork().then((result)=>{
      if(result!=='user press start before'){
        alertUserStartWork();
      }else{
        alertUserStartBefore();
      }
    });
  }

  function handelEnd(){
    userEndWork().then((result)=>{
      if(result!=='user press end before'){
        alertUserEndWork();
      }else{
        alertUserEndBefore();
      }     
    });
  }

  useEffect (() => {
    console.log('userProfile');
    userSignIn();
    getUserProfile().then(dbUsers =>{ 
      setUsers(dbUsers);
    });
  },[]);
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card-Profile p-3 py-4 text-center">
          <div className="F1">
            <img src={users.image} /**className="text-center" */ width="100" className="rounded-circle" alt='' />
            <div className="F2">
              <h3 className="mt-2 mb-0"><i className="far fa-id-card"></i>&nbsp;{users.username} </h3> 
              {/* <div className="col mt-3 mb-3"> */}
              <br/>
              <h5><i className="fas fa-user-tag"></i>&nbsp;&nbsp;&nbsp;Position: {users.position}</h5>
            </div>
          </div>

          {/* <hr className="line" /> 
          <div className="F1DivP">
          <div className="row-md-4">
            <h5><i class="fas fa-pencil-ruler"></i>&nbsp;Role</h5> <small>{users.role}</small>
          </div>
          <hr className="line" /> 
          <div className="row-md-4">
            <h5><i class="fas fa-envelope"></i>&nbsp;E-mail</h5><small>{users.email}</small>
          </div>
          </div>
          <hr className="line" /> 
          <div className="F1DivP">
          <div className="row-md-4">
            <h5><i class="fas fa-calendar-day"></i>&nbsp;Birthdate</h5><small>27/10/1995</small>
          </div>
          <hr className="line" /> 
          <div className="row-md-4">
            <h5><i class="fas fa-funnel-dollar"></i>&nbsp;Net Salary</h5><small>{(users.workHours*12).toFixed(2)}JD</small>
          </div>
          </div>
          <hr className="line" /> 
          <div className="F1DivP">
          <div className="row-md-4">
            <h5><i class="fas fa-business-time"></i>&nbsp;Sign-up Date</h5><small>{users.signUpDate}</small>
          </div>
          <div className="row-md-4">
            <h5><i class="fas fa-mobile-alt"></i>&nbsp;Mobile</h5><small>{users.mobile}</small>
          </div>
          </div>
          <hr className="line" /> 
          <div className="row-md-4">
            <h5><i class="fas fa-comment-dots"></i>&nbsp;About</h5><small>{users.bio}</small>
          </div> */}
          <hr className="line" /> 
          <div className="sixDivP">
            <div className="F1DivP">
              <div className="row-md-4">
                <h5><i className="fas fa-pencil-ruler"></i>&nbsp;Role</h5> <small>{users.role}</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5><i className="fas fa-envelope"></i>&nbsp;E-mail</h5><small>{users.email}</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5><i className="fas fa-calendar-day"></i>&nbsp;Birthdate</h5><small>27/10/1995</small>
              </div>
            </div>
            <div className="vl"></div>
          
            <div className="F1DivP">
              <div className="row-md-4">
                <h5><i className="fas fa-funnel-dollar"></i>&nbsp;Net Salary</h5><small>{(users.workHours*12).toFixed(2)}JD</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5><i className="fas fa-business-time"></i>&nbsp;Sign-up Date</h5><small>{users.signUpDate}</small>
              </div>
              <hr className="line" />           
              <div className="row-md-4">
                <h5><i className="fas fa-mobile-alt"></i>&nbsp;Mobile</h5><small>{users.mobile}</small>
              </div>
            </div>
          </div>
          <hr className="line" /> 
          <div className="row-md-4">
            <h5><i className="fas fa-comment-dots"></i>&nbsp;About</h5><small>{users.bio}</small>
          </div>
            
          {/* </div> */}
          <hr className="line" /> 
          <div className="social-buttons mt-4"> <button className="neo-button"><i className="fa fa-facebook fa-1x"></i> </button> <button className="neo-button"><i className="fa fa-linkedin fa-1x"></i></button> <button className="neo-button"><i className="fa fa-google fa-1x"></i> </button> <button className="neo-button"><i className="fa fa-youtube fa-1x"></i> </button> <button className="neo-button"><i className="fa fa-twitter fa-1x"></i> </button> </div>
          <div className="profile mt-2">
            <Link to="/profile/EditProfile" className=" btnAll btn-5"><span>Edit</span>
              {/* <button className="profile_button px-5">Edit profile</button> */}
            </Link>
            <Link to="/profile/Feedback" className=" btnAll btn-5"><span>Vacation</span>
              {/* <button className="profile_button px-5">Vacation Request</button> */}
            </Link>
            <a onClick={handelStart} class="btnAll btn-5"><span>Start shift</span></a> 
            <a onClick={handelEnd} class="btnAll btn-5"><span>End shift</span></a> 
          </div>
          {/* <div className="profile mt-2"> */}
          {/* <a onClick={handelStart} class="btn btn-5"><span>Start shift</span></a> 
                        <a onClick={handelEnd} class="btn btn-5"><span>End shift</span></a>  */}
          {/* <button className="profile_button px-5" onClick={handelStart}>Start shift</button>
            <button className="profile_button px-5" onClick={handelEnd}>End shift</button> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};


const mapDispatchToProps = {userSignIn};

const mapStateToProps = (state) => ({
  logInReducer: state.logInReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

