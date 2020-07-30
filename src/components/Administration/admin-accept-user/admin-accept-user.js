import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';


function AdminAcceptUser (props) {
  let API ='https://ems-access-denied.herokuapp.com';
  let [users, setUsers] = useState([]);

  const getUsers = async () => {
    const token = cookie.load('auth');
    const response = await fetch(`${API}/admincheckuser`, {
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

  function acceptUser (user) {
    let myUser = { 
      '_id':`${user._id}`,
      'username': `${user.username}`,
      'email': `${user.email}`,
      'password': `${user.password}`,
      'position': `developer`,
      'role': `${user.role}`,
    };
    const token = cookie.load('auth');

    fetch( `${API}/accept`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(myUser),
    }); 
  }

  function rejetUser (user) {
    const token = cookie.load('auth');
    fetch( `${API}/reject/${user._id}`, {
      method: 'delete',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }); 
  }


  useEffect(()=> {
    getUsers().then(tempUsers => setUsers(tempUsers) );
  },[users]);

  return(
    <>
      <br></br>            <br></br>            <br></br>            <br></br>
      <h1>Accept User</h1>
      {users.map (value => <li value={value}>
        {value.username}   
        <button onClick={()=> acceptUser(value)}>Add User</button>
        <button onClick={()=> rejetUser(value)}>Remove User</button>  
      </li>)}
    </>
  );
}



export default AdminAcceptUser;