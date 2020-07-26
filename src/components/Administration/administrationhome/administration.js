import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const AdministrationHome = (props) => {
  return (
    <>
      <h1>Administration</h1>
      <Button variant="contained">{<Link to='/'></Link>}</Button>
      <Button variant="contained">Default</Button>
      <Button variant="contained">Default</Button>
    </>
  );
};

export default AdministrationHome;