/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

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
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  let API = 'https://ems-access-denied.herokuapp.com';

  const getUsers = async () => {
    const token = cookie.load('auth');
    const response = await fetch(`${API}/adminpermanent`, {
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

  function editUser (user) {
    console.log(user);
    const token = cookie.load('auth');
    fetch( `${API}/adminedit/${user._id}`, {
      method: 'patch',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        'email': `${user.email}`,
        'position' : `${user.position}`,
        'role': `${user.role}`,
      }),
    }); 
  }

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
    getUsers().then(dbUsers => setUsers(dbUsers) );
  },[]);

  return(
    <>
      <br></br>            <br></br>            <br></br>            <br></br>
      <h1 className='administrationHome'>Administration</h1>
      <div>
        <Button onClick={handleClickOpen}>Select Empolyee</Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-dialog-select-label">Empolyee Name</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  // value={selectedUser.username}
                  // onChange={handleChange}
                  onChange={handleInputChange}
                  input={<Input />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {users.map(value => <MenuItem key={value._id} value={value}>{value.username}</MenuItem>)}
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
          Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
          Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <form onSubmit={handleSubmit}>
        <div className = 'card'>
          <Card className={classes.root}>
            <CardActionArea>
              <br></br>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
              <br></br>
              <Typography gutterBottom variant="h5" component="h2">
            Empolyee Name: {selectedUser.username}
              </Typography>
              <TextField
                id="standard-read-only-input"
                // label="E-mail"
                name='email'
                onChange={handleInputChange}
                value={selectedUser.email}
                InputProps={{
                  readOnly: false,
                }}
              />
              <TextField
                id="standard-read-only-input"
                // label="Position"
                name='position'
                onChange={handleInputChange}
                value={selectedUser.position}
                InputProps={{
                  readOnly: false,
                }}
              />
              <TextField
                id="standard-read-only-input"
                // label="Role"
                name='role'
                onChange={handleInputChange}
                value={selectedUser.role}
                InputProps={{
                  readOnly: false,
                }}
              />

            </CardActionArea>
          </Card>
        </div>
        <Button type='submit' variant="contained">
        Edit User Profile
        </Button>
      </form>


      <Link to='/administration'>
        <Button variant="contained">
          Back
        </Button>
      </Link>
    </>
  );

}

export default AdminEditUser;