import React from 'react';

import './aboutus.scss';
// import { Link } from 'react-router-dom';
const About = (props) => {
  return (
    <>
     
      <div className="w3-container w3-padding-64 w3-center" id="team">
        <h2>OUR TEAM</h2>
        <p>Meet the team :  </p>

        <div className="w3-row"><br></br>

          <div className="w3-quarter">
            <img src="https://ca.slack-edge.com/TNGRRLUMA-UT41K4Y1X-a36a1e48bdef-512" alt='' className="w3-circle w3-hover-opacity"/>
            <h3>Raghad Al-Quraan</h3>
            <p>Software Developer</p>
          </div>

          <div className="w3-quarter">
            <img src="https://ca.slack-edge.com/TNGRRLUMA-UTGDK1NLE-19fdf2afc718-512" alt='' className="w3-circle w3-hover-opacity"/>
            <h3>Amer Majdi Yousef</h3>
            <p>Software Developer</p>
          </div>

          <div className="w3-quarter">
            <img src="https://ca.slack-edge.com/TNGRRLUMA-UT2ND0MV1-0e252aa28dee-512" alt='' className="w3-circle w3-hover-opacity"/>
            <h3>Abdallah Obied</h3>
            <p>Software Developer</p>
          </div>

          <div className="w3-quarter">
            <img src="https://ca.slack-edge.com/TNGRRLUMA-UTE74KE5B-a7172b3e3315-512" alt='' className="w3-circle w3-hover-opacity"/>
            <h3>Ahlam Alefishat</h3>
            <p>Software Developer</p>
          </div>

        </div>
      </div>

     
    </>
  ); 
};
  
  
export default About;
  