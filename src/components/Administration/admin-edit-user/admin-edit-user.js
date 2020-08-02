/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import useAjax from '../../hooks/ajaxHook';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './admin-edit-user.scss';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },	
  root: {
    maxWidth: 345,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
}));

function AdminEditUser (props) {

  const classes = useStyles();
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
      <div class="container rounded bg-white mt-5">
        <div class="row-edit">
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="90" alt='' /><span class="font-weight-bold">John Doe</span><span class="text-black-50">john_doe12@bbb.com</span><span>United States</span></div>
          </div>
          <div class="col-md-8">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <Link to="/profile">
                    <h6>Back to profile</h6>
                  </Link>
                </div>
                <h6 class="text-right">Edit Profile</h6>
              </div>
              <div class="row-edit mt-2">
                <div class="col-md-6"><input type="text" class="form-control" placeholder="first name" value="John"/></div>
                <div class="col-md-6"><input type="text" class="form-control" value="Doe" placeholder="Doe"/></div>
              </div>
              <div class="row-edit mt-3">
                <div class="col-md-6"><input type="text" class="form-control" placeholder="Email" value="john_doe12@bbb.com"/></div>
                <div class="col-md-6"><input type="text" class="form-control" value="+19685969668" placeholder="Phone number"/></div>
              </div>
              <div class="row-edit mt-3">
                <div class="col-md-6"><input type="text" class="form-control" placeholder="address" value="D-113, right avenue block, CA,USA"/></div>
                <div class="col-md-6"><input type="text" class="form-control" value="USA" placeholder="Country"/></div>
              </div>
              <div class="row-edit mt-3">
                <div class="col-md-6"><input type="text" class="form-control" placeholder="Bank Name" value="Bank of America"/></div>
                <div class="col-md-6"><input type="text" class="form-control" value="043958409584095" placeholder="Account Number"/></div>
              </div>
              <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
        </div>
      </div>
      <Link to='/administration'>
        <Button variant="contained">
          Back
        </Button>
      </Link> 
    </>
  );

}

export default AdminEditUser;