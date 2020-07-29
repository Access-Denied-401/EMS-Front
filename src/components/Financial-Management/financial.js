/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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


const FinancialManagement = (props) => {
  // const [open, setOpen] = React.useState(false);
  // const [name, setName] = React.useState('');
  
  // const handleChange = (event) => {
  //   setName(String(event.target.value) || '');
  // };
  
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  
  // const handleClose = () => {
  //   setOpen(false);
  // };
  

  return (
    <>
      <div className="cardFinancial">
        <div className="rowFinanc">
          
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4><b>Employee List</b></h4>
                </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg"/></div>
                <div className="col">
                  <div className="row text-muted">IT department</div>
                  <div className="row">Amer</div>
                </div>
                <div className="col">  </div>
                <div className="col">Net Salary </div>
              </div>
            </div>
            <div className="row">
              <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg"/></div>
                <div className="col">
                  <div className="row text-muted">IT department</div>
                  <div className="row">Amer</div>
                </div>
                <div className="col"> </div>
                <div className="col"> Net Salary </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg"/></div>
                <div className="col">
                  <div className="row text-muted">IT department</div>
                  <div className="row">Amer</div>
                </div>
                
                <div className="col">  </div>
                <div className="col"> Net Salary </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg"/></div>
                <div className="col">
                  <div className="row text-muted">IT department</div>
                  <div className="row">Amer</div>
                </div>
                
                <div className="col">  </div>
                <div className="col"> Net Salary </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg"/></div>
                <div className="col">
                  <div className="row text-muted">IT department</div>
                  <div className="row">Amer</div>
                </div>
                
                <div className="col">  </div>
                <div className="col"> Net Salary </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg"/></div>
                <div className="col">
                  <div className="row text-muted">IT department</div>
                  <div className="row">Amer</div>
                </div>
                
                <div className="col">  </div>
                <div className="col"> Net Salary </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg"/></div>
                <div className="col">
                  <div className="row text-muted">IT department</div>
                  <div className="row">Amer</div>
                </div>
                
                <div className="col">  </div>
                <div className="col"> Net Salary </div>
              </div>
            </div>
            <div className="back-to-shop"> <Link lassName="text-muted" to="#">&#8592;</Link>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5><b>Salary Slip</b></h5>
            </div>
            
            
            <form>
              
              <div className="f-input">
                <label>Basic Salary</label> <input id="code" placeholder=""/>
                <label >Working Hours</label> <input id="code" placeholder=""/>
                <label>Over time</label> <input id="code" placeholder=""/>
                <label>Living Allownace</label> <input id="code" placeholder=""/>
                <label>Rewards</label> <input id="code" placeholder=""/>
                <label>Social Security</label> <input id="code" placeholder=""/>
              </div>
            </form>
            <div className="row rowrow">
              <button className="btn">Net Salary</button>
              
            </div> <button className="btn">Print Salary Slip</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialManagement;