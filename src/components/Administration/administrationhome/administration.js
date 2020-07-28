/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
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
    maxWidth: 245,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
}));


const AdministrationHome = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [selecteduser, setSelecteduser] = useState('');
 
  const getUsers = async () => {
    const token = cookie.load('auth');
    const response = await fetch('https://ems-access-denied.herokuapp.com/admincheckuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const fillForm = (event) => {
    console.log(event.target.value);
    setSelecteduser(String(event.target.value) || 'dsdsddsda');
    console.log(selecteduser);
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
    let data = getUsers().then(r => setUsers(r) );
  },[]);

  return (
    <>
      <br></br>            <br></br>            <br></br>            <br></br>
      <h1 className='administrationHome'>Administration</h1>
      {users.map (value => <li on={fillForm} value={value}> {value.username}</li>)}
      <div>
        <Button onClick={handleClickOpen}>Select Empolyee</Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form  className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-dialog-select-label">Empolyee Name</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={name}
                  // onChange={handleChange}
                  onChange={fillForm}
                  input={<Input />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {/* <MenuItem value={'Amer'}>Amer</MenuItem>
                  <MenuItem value={'Abdallah'}>Abdallah</MenuItem>
                  <MenuItem value={'Raghad'}>Raghad</MenuItem>
                <MenuItem value={'Ahlam'}>Ahlam</MenuItem> */}
                  {users.map(value => <MenuItem value={value}>{value.username}</MenuItem>)}                 
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

      <div className = 'card'>

        <Card className={classes.root}>
          <CardActionArea>
            <br></br>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            <br></br>
            <Typography gutterBottom variant="h5" component="h2">
              Empolyee Name: {name}
            </Typography>
            <TextField
              id="standard-read-only-input"
              label="E-mail"
              defaultValue={users.username}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Position"
              defaultValue={selecteduser.username}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Role"
              defaultValue="Role"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Gender"
              defaultValue="Gender"
              InputProps={{
                readOnly: true,
              }}
            />
          </CardActionArea>
        </Card>
      </div>
      <Link to='/administration/adduser'>
        <Button variant="contained">
         Add New User
        </Button>
      </Link>

      <Link to='/administration/edituser'>
        <Button variant="contained">
          Edit User Profile
        </Button>
      </Link>

      <Link to='/'>
        <Button variant="contained">
          Accept Users
        </Button>
      </Link>
    </>
  );
};

export default AdministrationHome;