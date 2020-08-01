import React, { useEffect, useState } from 'react';
import useAjax from '../../hooks/ajaxHook';


function AdminAcceptUser (props) {
  let [users, setUsers] = useState([]);
  const {getTempUsers, acceptUser, rejectUser} = useAjax();


  useEffect(()=> {
    getTempUsers().then(tempUsers => setUsers(tempUsers) );
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