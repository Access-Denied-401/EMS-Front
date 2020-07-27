import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const AdministrationHome = (props) => {
  return (
    <>
      <h1 className='administrationHome'>Administration</h1>
      <Button variant="contained">{<Link to='/'>Add New User</Link>}</Button>
      <Button variant="contained">{<Link to='/'>Edit User Profile</Link>}</Button>
      <Button variant="contained">{<Link to='/'>Accept Users</Link>}</Button>
    </>
  );
};

export default AdministrationHome;