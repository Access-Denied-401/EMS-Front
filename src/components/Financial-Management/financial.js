/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import useAjax from '../hooks/ajaxHook';
import useSearch from '../hooks/searchHook';
import Swal from 'sweetalert2';
import { useHistory} from 'react-router-dom';
import Paginate from '../paginate/paginate';
import './financial.scss';
import jsPDF from 'jspdf';
let id='';



const FinancialManagement = (props) => {
  const {getUsers,accountantHandler} = useAjax();
  const [users, setUsers] = useState([]);
  const [salaryData, setSalaryData] = useState([]);
  const [result, setResult] = useState([]);
  const [searchName, setName] = useState('');
  const {handleSearch} = useSearch();
  const history = useHistory(); 
  
  const handleChange = event => {
    setName(String(event.target.value) || '');
    console.log(searchName);
  };

  const itemsPerPage = 1000;
  const [currentPage,setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPost - itemsPerPage;
  const currentPost = users.slice(indexOfFirstPage, indexOfLastPost);
  
  function alertUserStartWork() {
    Swal.fire({
      icon:'error',
      title: 'Missing data',
      text: 'Please fill the whole form and pick a user',
    }).then(function() {
      history.push('/financialmanagement');
    });
  }
  const generatePDF = () => {
    var doc = new jsPDF('p', 'pt');
    doc.setFontType('bold');
    doc.text(270,40,'Salary Slip');
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 100,`Acountant Name: ${result.acountantName}` );
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 130,`User Name: ${result.userName}` );
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 160, `Position: ${result.position}` );      
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 190, `Hour Salary: ${result.hourSalary}` );      
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 220, `Working Hours: ${result.workinghours}` );      
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 250, `Basic Salary: ${result.basicSalary}` );      
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 280, `Living Allowance: ${result.livingAllowance}` );      
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 310, `Rewards: ${result.rewards}` );      
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 340, `Social Security: ${result.socialSecurity}` );      
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.text(40, 370, `Net Salary: ${result.netSalary}` );      
    doc.save('demo.pdf');
  } ;  
  const handleInputChange = (event) => {
    if(event.target.name) setSalaryData({...salaryData ,[event.target.name]:event.target.value});
    else  setSalaryData(event.target.value);
    console.log(salaryData,'usersusersusersusers');
  };   

  // const handelUserId=(event)=>{
  //   console.log('event.target.valueevent.target.value',event.target.name);
  //   setSalaryData({...salaryData ,'_id':event.target.value});    
  // };
  const selectUser =(_id) => { 
    if(salaryData._id) document.getElementById(salaryData._id).style.background = '';
    setSalaryData({...salaryData ,'_id':_id}) ;
    document.getElementById(_id).style.background = 'linear-gradient(145deg, #13903fb5, #13303fc7)';
    console.log(_id,'divdivdivdivdiv');
  };
  const handleSubmit = (event) => {
    if(event) event.preventDefault();
    // event.target.reset();
    console.log(salaryData,'event.target.value');
    if(salaryData._id && salaryData.livingAllowance && salaryData.startDate && salaryData.endDate && salaryData.rewards){
      accountantHandler(salaryData).then((result)=>{
        console.log('resultresultresultresultresult',result);
        setResult(result);     
      });
      document.getElementById('result-div').style.display = 'block';

    }else{
      document.getElementById('result-div').style.display = 'none';
      alertUserStartWork();
    }
  };
  
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
            <div className="searchbarAndTxt">
              <h6><b>* Select user to calculate salary </b></h6>
              <div className="d-flex justify-content-center davdovy">
                <div className="searchbar">
                  <input className="search_input" type="text" name="" placeholder="Select user to calculate salary..." onChange= {handleChange}/>
                  <a href="!#" className="search_icon"><i className="fas fa-search"></i></a>
                </div>
              </div>
            </div>
            <div className="hiGuys">
              {handleSearch(currentPost, searchName).map (value =>
                <div className="row border-top border-bottom " onClick={e => selectUser(value._id)} id={value._id} key={value._id}>
                  <div className="row main align-items-center">
                    <div className="col-2"><img className="img-fluid imgfin" onError ={(e)=>{console.log(value); e.target.onerror = null ;e.target.src = 'https://www.jayone.org/assets/profiles/user-default.png';}} src={value.image || 'https://www.jayone.org/assets/profiles/user-default.png' } alt='' /></div>
                    <div className="col">
                      <div className="row">{value.username}</div>
                      <div className="row text-muted">{value.position}</div>
                    </div>
                    {/* <div className="col">  </div> */}
                    <div className="col">Total Working Hours: {value.workHours||0} </div>
                  </div>
                </div>,
              )}           
            </div>            
          </div>
          <div className="col-md-4-finincial summary">
            <div>
              <h5 className="h5fin"><b>Salary Slip</b></h5>
            </div>
                        
            <form className="formFin">
              <div className="f-input">
                {/* <label>Basic Salary</label> <input className="inputFin" id="code" name='basicSalary' onChange={handleInputChange} placeholder='Enter your name'/> */}
                {/* <label >Working Hours</label> <input className="inputFin" id="code" name='workingHours' onChange={handleInputChange} placeholder='Enter your name'/> */}
                {/* <label>Over time</label> <input className="inputFin" id="code" name='overTime' onChange={handleInputChange} placeholder='Enter your name'/> */}
                <label>Living Allownace</label> <input className="inputFin" id="code" name='livingAllowance' onChange={handleInputChange} placeholder='livingAllownace'/>
                <label>Rewards</label> <input className="inputFin" id="code" name='rewards' onChange={handleInputChange} placeholder='Give him some reward ^^'/>
                <label>Start Date</label> <input type="date" className="inputFin" id="code" name='startDate' onChange={handleInputChange} placeholder='Enter the start of period'/>
                <label>End Date</label> <input type="date" className="inputFin" id="code" name='endDate' onChange={handleInputChange} placeholder='Enter the end of period'/>
                {/* <label>Social Security</label> <input className="inputFin" id="code" name='username' onChange={handleInputChange} placeholder='Enter your name'/> */}
              </div>
            </form>
            <div className="row rowrow">
              {/* <button className="btn-financial">Net Salary</button> */}
              
            </div> <button className="btn-financial calculateButton" type="button" onClick={handleSubmit}>Calculate Salary Slip</button>
            <div id = 'result-div' className="finClass">
              <p>Acountant Name:&nbsp;&nbsp; {result.acountantName}</p>
              <p>User Name:&nbsp;&nbsp; {result.userName}</p>
              <p>Position:&nbsp;&nbsp; {result.position}</p>
              <p>Hour Salary:&nbsp;&nbsp; {result.hourSalary}</p>
              <p>Working Hours:&nbsp;&nbsp; {result.workinghours}</p>
              <p>Basic Salary:&nbsp;&nbsp; {result.basicSalary}</p>
              <p>Living Allowance:&nbsp;&nbsp; {result.livingAllowance}</p>
              <p>Rewards:&nbsp;&nbsp; {result.rewards}</p>
              <p className="socialSecurity">Social Security:&nbsp;&nbsp; {result.socialSecurity}</p>
              <hr className="line lineoranage" /> 
              <p>Net Salary:&nbsp;&nbsp; {result.netSalary}</p>
              <button className="btn-financial calculateButton" type="button" onClick={generatePDF}>Print Salary Slip</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Paginate setCurrentPage={setCurrentPage} users={users} itemsPerPage={itemsPerPage} /> */}
    </>
  );
};

export default FinancialManagement;