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

  useEffect(()=> {
    getUsers().then(tempUsers => setUsers(tempUsers) );
  },[users]);

  return(
    <>
      <br></br>            <br></br>            <br></br>            <br></br>
      <h1>Accept User</h1>
        
      <div className="liiii">
        {users.map (value => <li value={value}>
          {value.username} <button onClick={()=> acceptUser(value)}>Add New User</button>
        </li>)}
      </div>

      <div class="container mt-5">
        <table class="table table-borderless table-responsive card-1 p-4">
          <thead>
            <tr class="border-bottom">
              <th> <span class="ml-2">Image</span> </th>
              <th> <span class="ml-2">User Name</span> </th>
              <th> <span class="ml-2"></span> </th>
              <th> <span class="ml-2"></span> </th>
              <th> <span class="ml-4">Action</span> </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-bottom">
              <td>
                <div class="p-2"> <span class="d-block font-weight-bold"><img src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" width="40" class="rounded-circle"/></span> </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-row align-items-center mb-2"> 
                  <div class="d-flex flex-column ml-2"> <span class="d-block font-weight-bold">{users.map (value => <li value={value}>
                    {value.username} 
                  </li>)}</span> <small class="text-muted">Jasmine Owner Reality group</small> </div>
                </div>
              </td>
              <td>
                <div class="p-2"> <span class="font-weight-bold">Ammy Song</span> </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-column"> <span>1 City point,#2A</span> <span> Brooklyn,NY</span> </div>
              </td>
              <td>
                <div class="p-2 icons"> <i class="fa fa-phone text-danger"></i> <i class="fa fa-adjust text-danger"></i> <i class="fa fa-share"></i> </div>
              </td>
            </tr>
            <tr class="border-bottom">
              <td>
                <div class="p-2"> <span class="d-block font-weight-bold"><img src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" class="rounded-circle" width="40"/></span> <small></small> </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-row align-items-center mb-2"> 
                  <div class="d-flex flex-column ml-2"> <span class="d-block font-weight-bold">David Smith</span> <small class="text-muted">Jasmine Owner Reality group</small> </div>
                </div>
              </td>
              <td>
                <div class="p-2"> <span class="font-weight-bold">David Clark</span> </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-column"> <span>205 2ndst,#2A,</span> <span> Brooklyn,NY</span> </div>
              </td>
              <td>
                <div class="p-2 icons"> <i class="fa fa-phone text-danger"></i> <i class="fa fa-adjust text-danger"></i> <i class="fa fa-share"></i> </div>
              </td>
            </tr>
            <tr class="border-bottom">
              <td>
                <div class="p-2"> <span class="d-block font-weight-bold"><img src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" class="rounded-circle" width="40"/></span> <small></small> </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-row align-items-center mb-2"> 
                  <div class="d-flex flex-column ml-2"> <span class="d-block font-weight-bold">Emmily johnson</span> <small class="text-muted">Jasmine Owner Reality group</small> </div>
                </div>
              </td>
              <td>
                <div class="p-2"> <span class="font-weight-bold">Mary Kingston</span> </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-column"> <span>199 Bowery,#7A</span> <span> Brooklyn,NY</span> </div>
              </td>
              <td>
                <div class="p-2 icons"> <i class="fa fa-adjust text-danger"></i> <i class="fa fa-share"></i> </div>
              </td>
            </tr>
            <tr class="border-bottom">
              <td>
                <div class="p-2"> <span class="d-block font-weight-bold"><img src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" class="rounded-circle" width="40"/></span> <small></small> </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-row align-items-center mb-2"> 
                  <div class="d-flex flex-column ml-2"> <span class="d-block font-weight-bold">Nick Jones</span> <small class="text-muted">Jasmine Owner Reality group</small> </div>
                </div>
              </td>
              <td>
                <div class="p-2"> <span class="font-weight-bold">James Smith</span> </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-column"> <span>123 Clinton Ave,#2A</span> <span> Brooklyn,NY</span> </div>
              </td>
              <td>
                <div class="p-2 icons"> <i class="fa fa-check-circle-o" aria-hidden="true"></i> <i class="fa fa-adjust text-danger"></i> <i class="fa fa-share"></i> </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}



export default AdminAcceptUser;