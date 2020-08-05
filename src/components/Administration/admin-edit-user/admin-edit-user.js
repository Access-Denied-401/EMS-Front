/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

import useAjax from '../../hooks/ajaxHook';
import './admin-edit-user.scss';



function AdminEditUser (props) {

  const userInfo = props.location.state.user;
  const {editUser} = useAjax();
  const [selectedUser, setSelectedUser] = useState({});


  const handleInputChange = (event) => {
    if(event.target.name) setSelectedUser({...selectedUser ,[event.target.name]:event.target.value});
    // else  setSelectedUser(event.target.value);
    console.log(selectedUser);
  }; 

  const handleSubmit = (event) => {
    if(event) event.preventDefault();
    event.target.reset();
    console.log(selectedUser);
    editUser(selectedUser, userInfo._id);
  };
  
  useEffect(()=>{
    setSelectedUser({'username':userInfo.username, 'email':userInfo.email, 'role':userInfo.role, 'position': userInfo.position});
  },[]);

  return(
    <>
      <br></br>            <br></br>            <br></br>
      <div className="container box rounded bg-white mt-5">
        <div className="row-edit">
          <div className="col-md-4 edit border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5 edit-sec"><img className="edit-image mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="200" alt='' /> <br></br><h3 className="font-weight-bold">{userInfo.username}</h3><span className="text-black-50">{userInfo.email}</span></div>
          </div>
          <div className="col-md-8 edit">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back "><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <Link to="/profile">
                    {/* <h6>Back to profile</h6> */}
                  </Link>
                </div>
                {/* <h6 className="text-right">Edit Profile</h6> */}
              </div>
              <br></br>

              <form className='adminEdit' onSubmit={handleSubmit}>
                
                <div className="row-edit mt-3">
                  <div className="col-md-6"><label> E-mail</label></div>
                  <div className="col-md-6"><input type="text" className="form-control" name='email' defaultValue={selectedUser.email} onChange={handleInputChange}/></div>
                </div>
                <div className="row-edit mt-3">
                  <div className="col-md-6"><label>Role</label></div>
                  <div className="col-md-6"><input type="text" className="form-control" name='role' defaultValue={selectedUser.role} onChange={handleInputChange}/></div>
                </div>
                <div className="row-edit mt-3">
                  <div className="col-md-6"><label>Position </label></div>
                  <div className="col-md-6"><input type="text" className="form-control" name='position' defaultValue={selectedUser.position} onChange={handleInputChange}/></div>
                </div>
                <div className="mt-5 text-right">
                  <Link to='/administration'>
                    <Button className="admin-edit-btn" variant="warning">
                          Back
                    </Button>
                  </Link>
                  <Button variant="warning" className="btn-edit" type="submit" onClick={handleSubmit}>Save Profile</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default AdminEditUser;