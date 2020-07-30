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
  function rejectUser (user) {
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
  

      <div className="container mt-5">
        <table className="table table-borderless table-responsive card-1 p-4">
          <thead>
            <tr className="border-bottom">
              <th> <span className="ml-2">Image</span> </th>
              <th> <span className="ml-2">User Name</span> </th>
              <th> <span className="ml-2"></span> </th>
              <th> <span className="ml-2"></span> </th>
              <th> <span className="ml-4">Action</span> </th>
            </tr>
          </thead>
          <tbody>
            {users.map (value =><tr className="border-bottom"> 
              <td>
                <div className="p-2"> <span className="d-block font-weight-bold"><img src={value.image} width="40" className="rounded-circle"/></span> </div>
              </td>
              <td>
                <div className="p-2 d-flex flex-row align-items-center mb-2"> 
                  <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold"> <li className="d-block font-weight-bold" value={value}>
                    {value.username} 
                  </li></span></div>
                </div>
              </td>
              <td>
                <div className="p-2"> <span className="font-weight-bold">{value.position}</span> </div>
              </td>
              <td>
                <div className="p-2 d-flex flex-column"> <span>{value.email}</span>  </div>
              </td>
              <td>
                <div className="p-2 icons"> <button onClick={()=> acceptUser(value)}>Add User</button>

                  <button onClick={()=> rejectUser(value)}>Remove User</button> </div>
              </td>
            </tr>, 
            )}
            
          </tbody>
        </table>
      </div>
    </>
  );
}



export default AdminAcceptUser;