/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import useAjax from '../../hooks/ajaxHook';
import './admin-edit-user.scss';



function AdminEditUser (props) {

  const {/**editUser */ getUsers} = useAjax();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});


  const handleInputChange = (event) => {
    if(event.target.name) setSelectedUser({...selectedUser ,[event.target.name]:event.target.value});
    else  setSelectedUser(event.target.value);
    console.log(selectedUser);
  }; 

  const handleSubmit = (event) => {
    if(event) event.preventDefault();
    event.target.reset();
    console.log(selectedUser);
    // editUser (event.target.value);
  };
  
  const handleChange = (event) => {
    setName(String(event.target.value) || '');
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    console.log('adminAddUser'); 
    getUsers().then(dbUsers => setUsers(dbUsers) );
  },[getUsers]);

  return(
    <>
      <br></br>            <br></br>            <br></br>            <br></br>
      <div className="container box rounded bg-white mt-5">
        <div className="row-edit">
          <div className="col-md-4 edit border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5 edit-sec"><img className="edit-image mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="200" alt='' /> <br></br><h3 className="font-weight-bold">John Doe</h3><span className="text-black-50">john_doe12@bbb.com</span></div>
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
              <div className="row-edit mt-2">
                <div className="col-md-6"><label>User Name</label></div>
                
                <div className="col-md-6"> 
                  <input type="text" className="form-control" placeholder="first name"
                    value=""></input></div>
              </div>
              <div className="row-edit mt-3">
                <div className="col-md-6"><label> E-mail</label></div>
                <div className="col-md-6"><input type="text" className="form-control"  value="" placeholder=""/></div>
              </div>
              <div className="row-edit mt-3">
                <div className="col-md-6"><label>Role</label></div>
                <div className="col-md-6"><input type="text" className="form-control" value="" placeholder=""/></div>
              </div>
              <div className="row-edit mt-3">
                <div className="col-md-6"><label>Position </label></div>
                <div className="col-md-6"><input type="text" className="form-control" value="" placeholder=""/></div>
              </div>
              <div className="mt-5 text-right">
                <Link to='/administration'>
                  <Button className="admin-edit-btn" variant="warning">
                          Back
                  </Button>
                </Link>
                <Button variant="warning" className="btn-edit" type="button">Save Profile</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      
    </>
  );

}

export default AdminEditUser;