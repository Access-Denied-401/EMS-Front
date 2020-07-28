/* eslint-disable no-unused-vars */
import React from 'react';
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

  return (
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
                  value={name}
                  onChange={handleChange}
                  input={<Input />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Amer'}>Amer</MenuItem>
                  <MenuItem value={'Abdallah'}>Abdallah</MenuItem>
                  <MenuItem value={'Raghad'}>Raghad</MenuItem>
                  <MenuItem value={'Ahlam'}>Ahlam</MenuItem>
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
              defaultValue="E-mail"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Position"
              defaultValue="Position"
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