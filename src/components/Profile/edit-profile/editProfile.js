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
    console.log(user,'useruseruseruseruser');
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
        '_id':`${users._id}`,
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
    console.log(selectedUser,'event.target.value');

    editUser(event.target.value);
  };
  useEffect (() => {
    getUserProfile().then(dbUsers => setUsers(dbUsers) );
    props.userSignIn();
  },[]);
  return (
    <>
<<<<<<< HEAD
      {/* <div class="container rounded bg-white mt-5">
        <div class="row-edit">
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src={users.image} width="90" alt='' /><span class="font-weight-bold">John Doe</span><span class="text-black-50">{users.email}</span><span>Jordan</span></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="col-md-8" >
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
                  <div class="col-md-6"><input type="text" class="form-control" name='Username' onChange={handleInputChange} placeholder={users.username} defaultValue={users.username}/></div>
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
      </div> */}
      <div class="container">
        <div class="row flex-lg-nowrap">
          <div class="col-12 col-lg-auto mb-3 F1Div">
            <div class="card p-3">
              <div class="e-navlist e-navlist--active-bg">
                <ul class="nav">
                  <li class="nav-item"><a class="nav-link px-2 active" href="./overview.html"><i class="fa fa-fw fa-bar-chart mr-1"></i><span>Overview</span></a></li>
                  <li class="nav-item"><a class="nav-link px-2" href="./users.html"><i class="fa fa-fw fa-th mr-1"></i><span>CRUD</span></a></li>
                  <li class="nav-item"><a class="nav-link px-2" href="./settings.html"><i class="fa fa-fw fa-cog mr-1"></i><span>Settings</span></a></li>
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
                              <span class="Span1">140x140</span>
                            </div>
                          </div>
                        </div>
                        <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div class="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                            <p class="mb-0">@johnny.s</p>
                            <div class="text-muted"><small>Last seen 2 hours ago</small></div>
                            <div class="mt-2">
                              <button class="btn btn-primary" type="button">
                                <i class="fa fa-fw fa-camera"></i>
                                <span>Change Photo</span>
                              </button>
                            </div>
                          </div>
                          <div class="text-center text-sm-right">
                            <span class="badge badge-secondary">administrator</span>
                            <div class="text-muted"><small>Joined 09 Dec 2017</small></div>
                          </div>
                        </div>
                      </div>
                      <ul class="nav nav-tabs">
                        <li class="nav-item"><a href="" class="active nav-link">Settings</a></li>
                      </ul>
                      <div class="tab-content pt-3">
                        <div class="tab-pane active">
                          <form class="form" novalidate="">
                            <div class="row">
                              <div class="col">
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Full Name</label>
                                      <input class="form-control" type="text" name="name" placeholder="John Smith" value="John Smith"/>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Username</label>
                                      <input class="form-control" type="text" name="username" placeholder="johnny.s" value="johnny.s"/>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Email</label>
                                      <input class="form-control" type="text" placeholder="user@example.com"/>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col mb-3">
                                    <div class="form-group">
                                      <label>About</label>
                                      <textarea class="form-control" rows="5" placeholder="My Bio"></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12 col-sm-6 mb-3">
                                <div class="mb-2"><b>Change Password</b></div>
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Current Password</label>
                                      <input class="form-control" type="password" placeholder="••••••"/>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>New Password</label>
                                      <input class="form-control" type="password" placeholder="••••••"/>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Confirm <span class="d-none d-xl-inline">Password</span></label>
                                      <input class="form-control" type="password" placeholder="••••••"/></div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 col-sm-5 offset-sm-1 mb-3">
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
                              </div>
                            </div>
                            <div class="row">
                              <div class="col d-flex justify-content-end">
                                <button class="btn btn-primary" type="submit">Save Changes</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
=======
      <div className="container rounded bg-white mt-5">
        <div className="row-edit">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="90" alt='' /><span className="font-weight-bold">John Doe</span><span className="text-black-50">john_doe12@bbb.com</span><span>United States</span></div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <Link to="/profile">
                    <h6>Back to profile</h6>
                  </Link>
                </div>
                <h6 className="text-right">Edit Profile</h6>
              </div>
              <div className="row-edit mt-2">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="first name" value="John"/></div>
                <div className="col-md-6"><input type="text" className="form-control" value="Doe" placeholder="Doe"/></div>
              </div>
              <div className="row-edit mt-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" value="john_doe12@bbb.com"/></div>
                <div className="col-md-6"><input type="text" className="form-control" value="+19685969668" placeholder="Phone number"/></div>
              </div>
              <div className="row-edit mt-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="address" value="D-113, right avenue block, CA,USA"/></div>
                <div className="col-md-6"><input type="text" className="form-control" value="USA" placeholder="Country"/></div>
              </div>
              <div className="row-edit mt-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" value="Bank of America"/></div>
                <div className="col-md-6"><input type="text" className="form-control" value="043958409584095" placeholder="Account Number"/></div>
              </div>
              <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
>>>>>>> a061d77cad21bb55508ef3de147beb6b880c8349
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

