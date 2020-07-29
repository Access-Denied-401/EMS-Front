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
      body: JSON.stringify({ 
        'username': `${user.username}`,
        'email': `${user.email}`,
        'password': `${user.password}`,
        'birthday': `${user.birthday}`,
        'role': `user`,
      }),
    }); 
  }
 

  useEffect(()=> {
    getUsers().then(tempUsers => setUsers(tempUsers) );
  },[]);

  return(
    <>
      <br></br>            <br></br>            <br></br>            <br></br>
      <h1>Accept User</h1>
      {users.map (value => <li value={value}>
        {value.username} <button onClick={acceptUser(value)}>Add New User</button>
      </li>)}
    </>
  );
}



export default AdminAcceptUser;