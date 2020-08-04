/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import useAjax from '../hooks/ajaxHook';
import './financial.scss';


const FinancialManagement = (props) => {
  const {/**editUser */ getUsers} = useAjax();
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    console.log('adminAddUser'); 
    getUsers().then(dbUsers => setUsers(dbUsers) );
  },[]);

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
            <div>
              {users.map (value =>
                <div className="row border-top border-bottom">
                  <div className="row main align-items-center">
                    <div className="col-2"><img className="img-fluid" src={value.image} alt='' /></div>
                    <div className="col">
                      <div className="row text-muted">{value.position}</div>
                      <div className="row">{value.username}</div>
                    </div>
                    <div className="col">  </div>
                    <div className="col">{value.workHours} </div>
                  </div>
                </div>,
              )}           
            </div>            
            <div className="back-to-shop"> <Link lasName="text-muted" to="#">&#8592;</Link>
            </div>
          </div>
          <div className="col-md-4-finincial summary">
            <div>
              <h5 className="h5fin"><b>Salary Slip</b></h5>
            </div>
                        
            <form className="formFin">
              
              <div className="f-input">
                <label>Basic Salary</label> <input className="inputFin" id="code" placeholder=""/>
                <label >Working Hours</label> <input className="inputFin" id="code" placeholder=""/>
                <label>Over time</label> <input className="inputFin" id="code" placeholder=""/>
                <label>Living Allownace</label> <input className="inputFin" id="code" placeholder=""/>
                <label>Rewards</label> <input className="inputFin" id="code" placeholder=""/>
                <label>Social Security</label> <input className="inputFin" id="code" placeholder=""/>
              </div>
            </form>
            <div className="row rowrow">
              <button className="btn-financial">Net Salary</button>
              
            </div> <button className="btn-financial">Print Salary Slip</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialManagement;