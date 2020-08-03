import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './editProfile.scss';
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import {userSignIn} from '../../../store/actions';
import {storage} from '../../../firebase';

let API = 'https://ems-access-denied.herokuapp.com';
const EditProfile = (props) => {
  const [users, setUsers] = useState({});
  // const [image, setImage] = useState({});
  // const [selectedUser, setSelectedUser] = useState({});

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
            console.log(imageUrl);
            console.log(users,'selectedUservselectedUser');
            setUsers({...users ,['image']:imageUrl});
            console.log(users,'selectedUservselectedUser');
          });
        });
    }
  };


  function editUser (usersF) {
    console.log(usersF,'useruseruseruseruser');
    const token = cookie.load('auth');
    fetch( `${API}/usereditprofile`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        '_id':`${users._id}`,
        'username':`${usersF.username}`,
        'password':`${usersF.password}`,
        'email': `${usersF.email}`,
        'image': `${usersF.image}`,
        'gender': `${usersF.gender}`,
        'birthday': `${usersF.birthday}`,        
      }),
    }); 
  }
  const handleInputChange = (event) => {
    if(event.target.name) setUsers({...users ,[event.target.name]:event.target.value});
    else  setUsers(event.target.value);
    console.log(users);
  }; 

  const handleSubmit = (event) => {
    if(event) event.preventDefault();
    // event.target.reset();
    console.log(users);
    console.log(users,'event.target.value');
    // console.log(event.target.value,'event.target.value.target.value');
    editUser(users);
  };
  useEffect (() => {
    getUserProfile().then(dbUsers =>{ 
      setUsers(dbUsers); 
      console.log(users,'selectedUservselectedUser');
    });

    props.userSignIn();
  },[]);
  return (
    <>
      <div class="container containerdiv">
        <div class="row flex-lg-nowrap">
          <div class="col-12 col-lg-auto mb-3 F1Div">
            <div class="card p-3">
              <div class="e-navlist e-navlist--active-bg">
                <ul class="nav">
                  <li class="nav-item"><a class="nav-link px-2 active" href="./"><i class="fa fa-fw fa-bar-chart mr-1"></i><span>Profile</span></a></li>
                  <li class="nav-item"><a class="nav-link px-2" href="/profile/Feedback"><i class="fa fa-fw fa-th mr-1"></i><span>Feedback</span></a></li>
                  <li class="nav-item"><a class="nav-link px-2" href="/profile/EditProfile"><i class="fa fa-fw fa-cog mr-1"></i><span>Edit profile</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="row">
              <div class="col mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="e-profile">
                      <div class="row">
                        <div class="col-12 col-sm-auto mb-3">
                          <div class="mx-auto F2Div" >
                            <div class="d-flex justify-content-center align-items-center rounded F3Div" >
                              <img class="imgProfile" src={users.image} width="180" alt='' />
                            </div>
                          </div>
                        </div>
                        <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div class="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap" >{users.username}</h4>
                            <p class="mb-0">@{users.username}</p>
                            <div class="text-muted"><small>Last seen 2 hours ago</small></div>
                            <div class="mt-2">
                              <button class="btn btn-primary" type="button">
                                <input type="file"  onChange = {handleImageChange}/>
                                <i class="fa fa-fw fa-camera"></i>
                                <span>Change Photo</span>
                              </button>
                            </div>
                          </div>
                          <div class="text-center text-sm-right">
                            <span class="badge badge-secondary">{users.role}</span>
                            <div class="text-muted"><small>{users.signUpDate}</small></div>
                          </div>
                        </div>
                      </div>
                      <ul class="nav nav-tabs">
                        <li class="nav-item"><a href="" class="active nav-link">Settings</a></li>
                      </ul>
                      <div class="tab-content pt-3">
                        <div class="tab-pane active">
                          <form class="form1" novalidate="">
                            <div class="row">
                              <div class="col">
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Full Name</label>
                                      <input class="form-control" type="text" name='username' onChange={handleInputChange} placeholder='Enter your name' defaultValue={users.username}/>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Mobile</label>
                                      <input class="form-control" type="text" name='mobile' onChange={handleInputChange} placeholder='Enter your mobile' defaultValue={users.mobile}/>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Email</label>
                                      <input class="form-control" type="text" name='email' onChange={handleInputChange} placeholder="Email" defaultValue={users.email}/>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col mb-3">
                                    <div class="form-group">
                                      <label>About</label>
                                      <textarea class="form-control" rows="5" name='bio' onChange={handleInputChange} placeholder='Enter your bio' defaultValue={users.bio}></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12 col-sm-6 mb-3">
                                <div class="mb-2"><b>Change Password</b></div>
                                {/* <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Current Password</label>
                                      <input class="form-control" type="password" placeholder="••••••"/>
                                    </div>
                                  </div>
                                </div> */}
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>New Password</label>
                                      <input class="form-control" type="password" placeholder="••••••" name="password" onChange={handleInputChange} defaultValue={123}/>
                                    </div>
                                  </div>
                                </div>
                                {/* <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Confirm <span class="d-none d-xl-inline">Password</span></label>
                                      <input class="form-control" type="password" placeholder="••••••"/></div>
                                  </div>
                                </div> */}
                              </div>
                              {/* <div class="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div class="mb-2"><b>Keeping in Touch</b></div>
                                <div class="row">
                                  <div class="col">
                                    <label>Email Notifications</label>
                                    <div class="custom-controls-stacked px-2">
                                      <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="notifications-blog" checked=""/>
                                        <label class="custom-control-label" for="notifications-blog">Blog posts</label>
                                      </div>
                                      <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="notifications-news" checked=""/>
                                        <label class="custom-control-label" for="notifications-news">Newsletter</label>
                                      </div>
                                      <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="notifications-offers" checked=""/>
                                        <label class="custom-control-label" for="notifications-offers">Personal Offers</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                            <div class="row">
                              <div class="col d-flex justify-content-end">
                                <button class="btn btn-primary" type="submit" onClick={handleSubmit}>Save Changes</button>
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

const mapDispatchToProps = { userSignIn};

const mapStateToProps = (state) => ({
  logInReducer: state.logInReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

