/* eslint-disable no-unused-vars */
import React from 'react';
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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import './financial.scss';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  '& .MuiCard-root': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },	
  root: {
    maxWidth: 345,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '25ch',
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
      <h1> Financial Management </h1>
     
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
            label="Basic Salary"
            defaultValue="Basic Salary"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Working Hours"
            defaultValue="Working Hours"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Overtime"
            defaultValue="Overtime"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Living Allowance"
            defaultValue="Living Allowance"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Rewards"
            defaultValue="0"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Social Security"
            defaultValue="0"
            InputProps={{
              readOnly: false,
            }}
          />
          <CardContent>
           
            <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        
        <CardActions>
          <Button size="small" color="primary">
          Print Salary
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FinancialManagement;