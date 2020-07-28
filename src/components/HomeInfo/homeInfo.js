/* eslint-disable no-unused-vars */
import React from 'react';
import './homeInfo.scss';


const HomeInfo = (props) => {
  return (
    <>
      <div className="main">
        <p className="w-50 float-left text-justify box" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" >The Employee management system is a fully functional web application that organize the operation of managing employee data such as his salary, perks, Work Time, login, employee efficiency, employee personal information, generate his salary which depends on his overtime work also this system has administration capabilities of adding new employee deleting employee and the employee can also view his page and can give feedback, ask for a pay-rise and take scheduled days off.</p>
        <img className="w-25 right-img box" data-aos="fade-up-right" data-aos-delay="50" data-aos-duration="1000" src="https://images.unsplash.com/photo-1525475711852-ed23365b4d11?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
        <p className="w-50 float-right text-justify box" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">The Employee management system is a fully functional web application that organize the operation of managing employee data such as his salary, perks, Work Time, login, employee efficiency, employee personal information, generate his salary which depends on his overtime work also this system has administration capabilities of adding new employee deleting employee and the employee can also view his page and can give feedback, ask for a pay-rise and take scheduled days off.</p>
        <img className="w-25 left-img box" data-aos="fade-up-right" data-aos-delay="100" data-aos-duration="1000" src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt=""/>
      </div>
      <img className="w-100 left-img box" data-aos="slide-up" data-aos-delay="100" data-aos-duration="1000" src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt=""/>
    </>
  );
};


export default HomeInfo;
