import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './admin-add-user.scss';


function AdminAddUser(props) {

  let [newUser, setNewUser] = useState({});
  let API = 'https://ems-access-denied.herokuapp.com/adduser';
  function addUser (user) {
    fetch( `${API}/signup`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        'username': `${user.username}`,
        'email': `${user.email}`,
        'password': `${user.password}`,
        'birthday': `${user.birthday}`,
        'position' : `${user.position}`,
        'role': `${user.role}`,
      }),
    }); 
  }
  const handleInputChage = event => {
    setNewUser({...newUser, [event.target.name]: event.target.value });
  };

  function handleSubmit(event){
    if(event) event.preventDefault();
    event.target.reset();
    addUser(newUser);
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-4 text-center abc">
          <form onSubmit={handleSubmit}>
            <p className="h4 mb-4 text-left">User's Informations</p>
            <label for="defaultLoginFormUsername" className="in">Username</label>
            <input name='username' onChange={handleInputChage} type="text" id="defaultLoginFormUsername" className="form-control mb-4" placeholder="Enter Username" />
            <label for="defaultLoginFormEmail" className="in">Email</label>
            <input name='email' onChange={handleInputChage} type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Enter E-mail" />
            <label for="defaultLoginFormPassword" className="in">Password</label>
            <input name='password' onChange={handleInputChage} type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Enter Password" />
            <label for="defaultLoginFormBirthday" className="in">Birthdate</label>
            <input name='birthday' onChange={handleInputChage} type="date" id="defaultLoginFormBirthday" className="form-control mb-4" placeholder="Enter BD" />
            <label for="defaultLoginFormPosition" className="in">Position</label>
            <input name='position' onChange={handleInputChage} type="text" id="defaultLoginFormPosition" className="form-control mb-4" placeholder="Enter Position" />
            <label for="defaultLoginFormRole" className="in">Role</label>
            <input name='role' onChange={handleInputChage} type="text" id="defaultLoginFormRole" className="form-control mb-4" placeholder="Enter Role" />
            <div className="d-flex justify-content-left">
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