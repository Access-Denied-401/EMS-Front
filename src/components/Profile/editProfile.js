/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import './editProfile.scss';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
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

const FinancialManagement = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  
  const handleChange = (event) => {
    setName(String(event.target.value) || '');
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  

  return(
    <>
      <main className="mainEditProfile">
        <br></br>            <br></br>            <br></br>            <br></br>
        <h1> Users profiles </h1>
     
        <Card className={classes.root} >
          <CardActionArea id="card">
            <br></br>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} id="Avatar"/>
            <br></br>
            <Typography gutterBottom variant="h5" component="h2">
              Empolyee Name: {name}
            </Typography>
            <TextField
              id="standard-read-only-input"
              label="Employee name"
              defaultValue="Amer"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Email"
              defaultValue="Email@gmail.com"
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              id="standard-read-only-input"
              label="Birth date"
              defaultValue="12/08/1995"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Password"
              defaultValue="******"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Gender"
              defaultValue="male"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Current position"
              defaultValue="Leader"
              InputProps={{
                readOnly: true,
              }}
            />


            <CardContent>
           
              {/* <Typography variant="body2" color="textSecondary" component="p">
              * Our policy is to always give the employees more than they deserve.
              </Typography> */}
            </CardContent>
          </CardActionArea>
        
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/profile/EditProfile" className="link">Save</Link>
            </Button>
          </CardActions>
        </Card>
        <br></br>
        <br></br>
      </main>
    </>
  );
};

export default FinancialManagement;