/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

import useAjax from '../../hooks/ajaxHook';
import './admin-accept-user.scss';
import Paginate from '../../paginate/paginate';

function AdminAcceptUser (props) {
  
  let [users, setUsers] = useState([]);
  const {getTempUsers, acceptUser, rejectUser} = useAjax();

  function alertAccept() {
    Swal.fire({
      icon:'success',
      title: 'Accepted',
      text: '',
    });
  }
  function alertReject() {
    Swal.fire({
      icon:'success',
      title: 'Rejected',
      text: '',
    });
  }

  
  const itemsPerPage = 5;
  const [currentPage,setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPost - itemsPerPage;
  const currentPost = users.slice(indexOfFirstPage, indexOfLastPost);
  
  

  useEffect(()=> {
    try {
      console.log('adminAcceptUser');
      getTempUsers().then(tempUsers => setUsers(tempUsers) );
    } catch (error) {
      console.error(error);
    }
  },[]);


  return(
    <>
      <br></br>            <br></br>            <br></br>            <br></br>
     
  

      <div className="container mt-5">
        <table className="table table-borderless table-responsive card-1 p-4">
          <div className="table-head">

         
            <thead >
              <tr className="border-bottom">
                <th> <span className="ml-2">Image</span> </th>
                <th> <span className="ml-2">User name</span> </th>
                <th> <span className="ml-2"></span> </th>
                <th> <span className="ml-2">Email</span> </th>
                <th> <span className="ml-4">Action</span> </th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map (value =><tr className="border-bottom"> 
                <td>
                  <div className="p-2"> <span className="spanEdit font-weight-bold"><img src={value.image} width="40" className="rounded-circle" alt='' /></span> </div>
                </td>
                <td>
                  <div className="p-2 d-flex flex-row align-items-center mb-2"> 
                    <div className="d-flex flex-column ml-2"> <span className=" font-weight-bold spanEdit"> <li className="spanEdit font-weight-bold" value={value}>
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
                  {/* <div className="p-2 icons"> <button onClick={()=> acceptUser(value)}>Add User</button>

                    <button onClick={()=> rejectUser(value)}>Remove User</button> </div> */}

                  <div className="p-2 icons">
                    <i className="fa fa-check" aria-hidden="true" onClick={()=> acceptUser(value).then(()=>alertAccept())}><span>Accept</span></i> 
                    <i className="fa fa-adjust text-danger" onClick={()=> rejectUser(value).then(()=>alertReject())} ><span>Reject</span></i> 
                  </div>
                </td>
              </tr>, 
              )}
            
            </tbody> 
          </div>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination pagination-accept">
            <li class="page-item">
              <a class="page-link" href="!#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <Paginate setCurrentPage={setCurrentPage} users={users} itemsPerPage={itemsPerPage} />
            <li class="page-item">
              <a class="page-link" href="!#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
        <Link className="we-accept" to='/administration'>
          <Button className=" we-accept-btn">Back</Button>
        </Link>
      </div>



    </>
  );
}




export default AdminAcceptUser;