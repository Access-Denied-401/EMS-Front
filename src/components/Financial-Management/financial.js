/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import './financial.scss';


const FinancialManagement = (props) => {
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
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" alt='' /></div>
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
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" alt='' /></div>
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
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" alt='' /></div>
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
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" alt='' /></div>
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
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" alt='' /></div>
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
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" alt='' /></div>
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
                <div className="col-2"><img className="img-fluid" src="https://www.milcorp.com/assets/employee-placeholder-male.jpg" alt='' /></div>
                <div className="col">
                  <div className="row text-muted">IT department</div>
                  <div className="row">Amer</div>
                </div>
                
                <div className="col">  </div>
                <div className="col"> Net Salary </div>
              </div>
            </div>
            <div className="back-to-shop"> <Link lasName="text-muted" to="#">&#8592;</Link>
            </div>
          </div>
          <div className="col-md-4-finincial summary">
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
              <button className="btn-financial">Net Salary</button>
              
            </div> <button className="btn-financial">Print Salary Slip</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialManagement;