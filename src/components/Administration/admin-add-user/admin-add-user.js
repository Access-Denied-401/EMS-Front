/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import useAjax from '../../hooks/ajaxHook';
import './admin-add-user.scss';


function AdminAddUser(props) {
  const [newUser, setNewUser] = useState({});
  const {addUser} = useAjax();
  const handleInputChage = event => {
    setNewUser({...newUser, [event.target.name]: event.target.value });
  };

  function handleSubmit(event){
    if(event) event.preventDefault();
    event.target.reset();
    console.log(addUser);
    addUser(newUser);
  }

  return (
    <>
      <div className="row-add box">
        <div className="col-sm-4 text-center abc">
          <form onSubmit={handleSubmit}>
            <p className="h4 mb-4 text-left">User's Informations</p>
            <label htmlFor="defaultLoginFormUsername" className="in">Username</label>
            <input name='username' onChange={handleInputChage} type="text" id="defaultLoginFormUsername" className="form-control mb-4" placeholder="Enter Username" />
            <label htmlFor="defaultLoginFormEmail" className="in">Email</label>
            <input name='email' onChange={handleInputChage} type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Enter E-mail" />
            <label htmlFor="defaultLoginFormPassword" className="in">Password</label>
            <input name='password' onChange={handleInputChage} type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Enter Password" />
            <label htmlFor="defaultLoginFormBirthday" className="in">Birthdate</label>
            <input name='birthday' onChange={handleInputChage} type="date" id="defaultLoginFormBirthday" className="form-control mb-4" placeholder="Enter BD" />
            <label htmlFor="defaultLoginFormPosition" className="in">Position</label>
            <input name='position' onChange={handleInputChage} type="text" id="defaultLoginFormPosition" className="form-control mb-4" placeholder="Enter Position" />
            <label htmlFor="defaultLoginFormRole" className="in">Role</label>
            <input name='role' onChange={handleInputChage} type="text" id="defaultLoginFormRole" className="form-control mb-4" placeholder="Enter Role" />
            <div className="d-flex justify-content-left">
            </div>
            <Button className="btn-add btn-info btn-block " type="submit">ADD NEW USER</Button>
            <Link className="we" to='/administration'>
              <Button className="btn-add btn-info btn-block">Back</Button>
            </Link>
          </form>

          
        </div>
        
        <div className="col-sm-8 xyz text-center" > <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>
          <h2 className="account-text">Create New User Account</h2>
        </div>
      </div>
    </>
  );
}


export default AdminAddUser;