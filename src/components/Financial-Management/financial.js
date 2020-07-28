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
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import './financial.scss';

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
    maxWidth: 400,
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
      <div className="something">
        <br></br>            <br></br>            <br></br>            <br></br>
        <h1> Financial Management </h1>
        <div className="containerList">
          <div className="rowFinancial">
            <div className="col-md-4 offset-md-4 col-12">
              <div className="card">
                <div className="card-header p-0">
                  <h4 className="m-0">Employee List</h4>
                  <ul className="pull-right m-0">
                    <li className="mt-2"><a href="#" className="hide-search text-secondary" data-command="toggle-search" data-toggle="tooltip" data-placement="top" title="Toggle Search"><i className="fa fa-search"></i></a></li>
                  </ul>
                </div>
                <div className="row search-div">
                  <div className="col-md-12 col-12">
                    <div className="search-input">
                      <input type="text" className="form-control rounded-0" placeholder="Search user" aria-label="Recipient's username" aria-describedby="basic-addon2" id="user-list-search"/>
                    </div>
                  </div>
                </div>
                <ul className="list-group" id="user-list">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <div className="row">
                          <div className="col-md-4 col-4 user-img text-center pt-1">
                            <img src="http://nicesnippets.com/demo/cs-image2.png" alt="Seth Frazier" className="img-responsive img-circle rounded-circle" />
                          </div>
                          <div className="col-md-8 col-8">
                            <h5 className="font-weight-bold mb-1">Nick Daniel</h5>
                            <div className="user-detail">
                              <p className="m-0"><i className="fa fa-phone mr-1" aria-hidden="true"></i> +91 1234567890</p>
                              <p className="m-0"><i className="fa fa-envelope mr-1" aria-hidden="true"></i> example@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <div className="row">
                          <div className="col-md-4 col-4 user-img text-center pt-1">
                            <img src="http://nicesnippets.com/demo/cs-image3.jpg" alt="Jean Myers" className="img-responsive img-circle rounded-circle" />
                          </div>
                          <div className="col-md-8 col-8">
                            <h5 className="font-weight-bold mb-1">John Tokio</h5>
                            <div className="user-detail">
                              <p className="m-0"><i className="fa fa-phone mr-1" aria-hidden="true"></i> +91 1234567890</p>
                              <p className="m-0"><i className="fa fa-envelope mr-1" aria-hidden="true"></i> example@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <div className="row">
                          <div className="col-md-4 col-4 user-img text-center pt-1">
                            <img src="http://nicesnippets.com/demo/cs-image4.jpg" alt="Todd Shelton" className="img-responsive img-circle rounded-circle" />
                          </div>
                          <div className="col-md-8 col-8">
                            <h5 className="font-weight-bold mb-1">Xavier Filton</h5>
                            <div className="user-detail">
                              <p className="m-0"><i className="fa fa-phone mr-1" aria-hidden="true"></i> +91 1234567890</p>
                              <p className="m-0"><i className="fa fa-envelope mr-1" aria-hidden="true"></i> example@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <div className="row">
                          <div className="col-md-4 col-4 user-img text-center pt-1">
                            <img src="http://nicesnippets.com/demo/cs-image5.jpg" alt="Rosemary Porter" className="img-responsive img-circle rounded-circle" />
                          </div>
                          <div className="col-md-8 col-8">
                            <h5 className="font-weight-bold mb-1">Abraham Doherty</h5>
                            <div className="user-detail">
                              <p className="m-0"><i className="fa fa-phone mr-1" aria-hidden="true"></i> +91 1234567890</p>
                              <p className="m-0"><i className="fa fa-envelope mr-1" aria-hidden="true"></i> example@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <div className="row">
                          <div className="col-md-4 col-4 user-img text-center pt-1">
                            <img src="http://nicesnippets.com/demo/cs-image6.jpg" alt="Debbie Schmidt" className="img-responsive img-circle rounded-circle" />
                          </div>
                          <div className="col-md-8 col-8">
                            <h5 className="font-weight-bold mb-1">Debbie Scoomin</h5>
                            <div className="user-detail">
                              <p className="m-0"><i className="fa fa-phone mr-1" aria-hidden="true"></i> +91 1234567890</p>
                              <p className="m-0"><i className="fa fa-envelope mr-1" aria-hidden="true"></i> example@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <div className="row">
                          <div className="col-md-4 col-4 user-img text-center pt-1">
                            <img src="http://nicesnippets.com/demo/cs-image7.jpg" alt="Glenda Patterson" className="img-responsive img-circle rounded-circle" />
                          </div>
                          <div className="col-md-8 col-8">
                            <h5 className="font-weight-bold mb-1">Glenda Favier</h5>
                            <div className="user-detail">
                              <p className="m-0"><i className="fa fa-phone mr-1" aria-hidden="true"></i> +91 1234567890</p>
                              <p className="m-0"><i className="fa fa-envelope mr-1" aria-hidden="true"></i> example@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Card className={classes.root} >
            {/* <CardActionArea id="card"> */}
            <br></br>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} id="Avatar"/>
          <br></br>
          <Typography gutterBottom variant="h5" component="h2">
              Empolyee Name: {name}
          </Typography> */}
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
              defaultValue="0"
              InputProps={{
                readOnly: false,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Living Allowance"
              defaultValue="0"
              InputProps={{
                readOnly: false,
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
              defaultValue="Social Security"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Net Salary"
              defaultValue="Net Salary"
              InputProps={{
                readOnly: true,
              }}
            />
            <CardContent>
           
              <Typography variant="body2" color="textSecondary" component="p">
              * Our policy is to always give the employees more than they deserve.
              </Typography>
            </CardContent>
      
        
            <CardActions>
              <Button size="small" color="primary">
          Print Salary
              </Button>
            </CardActions>
          </Card>
          <br></br>
          <br></br>
        </div>

      </div>
      
       
     
      

        
    
    </>
  );
};

export default FinancialManagement;