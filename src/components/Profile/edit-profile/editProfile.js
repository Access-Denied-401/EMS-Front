import React, {useState, useEffect} from 'react';
import './editProfile.scss';
import {connect} from 'react-redux';
import useAjax from '../../hooks/ajaxHook';
import {userSignIn} from '../../../store/actions';
import {storage} from '../../../firebase/';
import Swal from 'sweetalert2';
import { useHistory} from 'react-router-dom';

const EditProfile = (props) => {
  const [users, setUsers] = useState({});
  const {getUserProfile, userEditHisProfile} = useAjax();
  const history = useHistory();

  const handleImageChange = (event) => {
    if(event.target.files[0]){
      let image = event.target.files[0];
      console.log(image);
      const uploadTask =  storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(`state_changed`,
        (snapshot)=>{
        // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
        } , (error)=>{
        } , ()=>{
          storage.ref(`images`).child(image.name).getDownloadURL().then(imageUrl=>{
            setUsers({...users ,'image':imageUrl});
          });
        });
    }
  };

  function alertEditProfile() {
    Swal.fire({
      icon:'success',
      title: 'Sign up Application',
      text: 'An E-mail will be sent to you once you are accepted',
    }).then(function() {
      history.push('/profile/EditProfile');
    });
  }
  
  const handleInputChange = (event) => {
    
    if(event.target.name) setUsers({...users ,[event.target.name]:event.target.value});
    else  setUsers(event.target.value);
    console.log(users,'usersusersusersusers');
  }; 

  const handleSubmit = (event) => {
    if(event) event.preventDefault();
    // event.target.reset();
    console.log(users);
    console.log(users,'event.target.value');
    userEditHisProfile(users)
      alertEditProfile()

  };
  useEffect (() => {
    userSignIn();
    getUserProfile().then(dbUsers =>{ 
      setUsers(dbUsers); 
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  console.log(props);
  return (
    <>
      <div className="container containerdiv">
        <div className="row flex-lg-nowrap">
          {/* <div className="col-12 col-lg-auto mb-3 F1Div">
            <div className="card p-3 smallCardDiv" >
              <div className="e-navlist e-navlist--active-bg">
                <ul className="nav">
                  <li className="nav-item"><a className="nav-link px-2 active" href="./"><i className="fa fa-fw fa-bar-chart mr-1"></i><span>Profile</span></a></li>
                  <li className="nav-item"><a className="nav-link px-2" href="/profile/Feedback"><i className="fa fa-fw fa-th mr-1"></i><span>Feedback</span></a></li>
                  <li className="nav-item"><a className="nav-link px-2" href="/profile/EditProfile"><i className="fa fa-fw fa-cog mr-1"></i><span>Edit profile</span></a></li>
                </ul>
              </div>
            </div>
          </div> */}

          <div className="col">
            <div className="row">
              <div className="col mb-3">
                <div className="card cardBorder">
                  <div className="card-body ">
                    <div className="e-profile">
                      <div className="row">
                        <div className="col-12 col-sm-auto mb-3">
                          <div className="mx-auto F2Div" >
                            <div className="d-flex justify-content-center align-items-center rounded F3Div" >
                              <img className="imgProfile" src={users.image} width="180" alt='' />
                            </div>
                          </div>
                        </div>
                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap" >{users.username}</h4>
                            <p className="mb-0">@{users.username}</p>
                            <div className="text-muted"><small>Last seen 2 hours ago</small></div>
                            <div className="mt-2">
                               <button className="btn btn-primary buttonR" type="button">
                              <input type="file" className="inputImage" onChange = {handleImageChange} size="60" />
                              <i className="fa fa-fw fa-camera"></i>
                              <span>Change Photo</span>
                              </button>                          
                            </div>
                          </div>
                          <div className="text-center text-sm-right">
                            <span className="badge badge-secondary">{users.role}</span>
                            <div className="text-muted"><small>{users.signUpDate}</small></div>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs">
                        <li className="nav-item"><a href="/profile/EditProfile" className="active nav-link">Settings</a></li>
                      </ul>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form className="form1" noValidate="">
                            <div className="row">
                              <div className="col">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Full Name</label>
                                      <input className="form-control" type="text" name='username' onChange={handleInputChange} placeholder='Enter your name' defaultValue={users.username}/>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Mobile</label>
                                      <input className="form-control" type="text" name='mobile' onChange={handleInputChange} placeholder='Enter your mobile' defaultValue={users.mobile}/>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input className="form-control" type="text" name='email' onChange={handleInputChange} placeholder="Email" defaultValue={users.email} />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    <div className="form-group">
                                      <label>About</label>
                                      <textarea className="form-control" rows="3" name='bio' onChange={handleInputChange} placeholder='Enter your bio' defaultValue={users.bio}></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-6 mb-3">
                                <div className="mb-2"><b>Change Password</b></div>
                                {/* <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Current Password</label>
                                      <input className="form-control" type="password" placeholder="••••••"/>
                                    </div>
                                  </div>
                                </div> */}
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>New Password</label>
                                      <input className="form-control" type="password" placeholder="••••••••••••" name="password" onChange={handleInputChange} />
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                      <input className="form-control" type="password" placeholder="••••••"/></div>
                                  </div>
                                </div> */}
                              </div>
                              {/* <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div className="mb-2"><b>Keeping in Touch</b></div>
                                <div className="row">
                                  <div className="col">
                                    <label>Email Notifications</label>
                                    <div className="custom-controls-stacked px-2">
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="notifications-blog" checked=""/>
                                        <label className="custom-control-label" for="notifications-blog">Blog posts</label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="notifications-news" checked=""/>
                                        <label className="custom-control-label" for="notifications-news">Newsletter</label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="notifications-offers" checked=""/>
                                        <label className="custom-control-label" for="notifications-offers">Personal Offers</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                            <div className="row buttonRelative">
                              <div className="col d-flex justify-content-end">
                                <button className="btn btn-primary buttonEP" type="submit" onClick={handleSubmit}>Save Changes</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {userSignIn};

const mapStateToProps = (state) => ({
  savedUser: state.loginReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

