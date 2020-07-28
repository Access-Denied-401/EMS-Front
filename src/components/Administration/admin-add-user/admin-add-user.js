import React from 'react';
import { Link } from 'react-router-dom';
import './admin-add-user.scss';


function AdminAddUser(props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-4 text-center abc">
          <form action="#!">
            <p className="h4 mb-4 text-left">User's Informations</p>
            <label for="mail" className="in">Email</label>
            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Enter Username" />
            <label for="pass" className="in">Password</label>
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Enter Password" />
            <label for="mail" className="in">Birthdate</label>
            <input type="date" className="form-control mb-4" placeholder="Enter BD" />
            <label for="pass" className="in">Position</label>
            <input type="text" className="form-control mb-4" placeholder="Enter Position" />
            <label for="mail" className="in">Role</label>
            <input type="text" className="form-control mb-4" placeholder="Enter Role" />
            <div className="d-flex justify-content-left">
              <div>
              </div>
            </div>
            <button className="btn btn-info btn-block " type="submit">ADD NEW USER</button>
          </form>

          <Link to='/administration'>
            <button className="btn btn-info btn-block " type="submit">Back</button>
          </Link>
          
        </div>
        
        <div className="col-sm-8 xyz text-center" > <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>
          <h2 className="account-text">Create New User Account</h2>
        </div>
      </div>
    </>
  );
}

export default AdminAddUser;