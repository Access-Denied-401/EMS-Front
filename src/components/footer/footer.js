/* eslint-disable no-unused-vars */
import React from 'react';

// import { Link } from 'react-router-dom';
import './footer.scss';


const Footer = () => {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">COMPANY NAME<span></span></h5>
                <p>The Employee management system is a fully functional web application that
 organize the operation of managing employee data. </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Quick Links<span></span></h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content"><a href="#.">Get Started</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">Top Leaders</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">Success Stories</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">Event/Tickets</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">News</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">Lifestyle</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">About</a></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Get Started<span></span></h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Contact Us<span></span></h5>
                <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                <ul className="social-footer2">
                 
                
                  <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="dribbble" href="/"><i className="fa fa-github"></i></a></li>
                  <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
          
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row-footer">
            <div className="col-md-12 text-center">
              <p>Copyright Company Name © 2020. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
