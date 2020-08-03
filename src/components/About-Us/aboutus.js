/* eslint-disable no-unused-vars */
import React from 'react';
import './aboutus.scss';

const About = (props) => {
  return (
    <>
      <section className="team section">
        <div className="container-about">
          <h1 className="section-title">Our Team Section</h1>
          <div className="title-div"><h3>Introducing our superstar developer team!</h3>
            <h4></h4>Our team draws on broad industry experience and networks to create the most powerful outcomes for our clients.</div>
          {/* <img className="img-logo" src="../../../assest/ems.png" alt="logo" /> */}
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <figure>
                  <img className="about-img" src="https://ca.slack-edge.com/TNGRRLUMA-UT2ND0MV1-0e252aa28dee-512" alt=""/>
                  <figcaption>
                    <div className="info">
                      <h3>Abdallah Obied</h3>
                      <p>Software Developer</p>
                    </div>
                    <div className="social">
                      <a href className="twitter" data-abc="true"><i className="fa fa-twitter"></i></a>
                      <a href className="facebook" data-abc="true"><i className="fa fa-facebook"></i></a>
                      <a href className="google-plus" data-abc="true"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <figure>
                  <img className="about-img" src="https://ca.slack-edge.com/TNGRRLUMA-UTE74KE5B-a7172b3e3315-512" alt=""/>
                  <figcaption>
                    <div className="info">
                      <h3>Ahlam Alefishat</h3>
                      <p>Software Developer</p>
                    </div>
                    <div className="social">
                      <a href className="twitter" data-abc="true"><i className="fa fa-twitter"></i></a>
                      <a href className="facebook" data-abc="true"><i className="fa fa-facebook"></i></a>
                      <a href className="google-plus" data-abc="true"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <figure>
                  <img className="about-img" src="https://ca.slack-edge.com/TNGRRLUMA-UTGDK1NLE-19fdf2afc718-512" alt=""/>
                  <figcaption>
                    <div className="info">
                      <h3>Amer Majdi</h3>
                      <p>Software Developer</p>
                    </div>
                    <div className="social">
                      <a href className="twitter" data-abc="true"><i className="fa fa-twitter"></i></a>
                      <a href className="facebook" data-abc="true"><i className="fa fa-facebook"></i></a>
                      <a href className="google-plus" data-abc="true"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <figure>
                  <img className="about-img raghad" src="https://ca.slack-edge.com/TNGRRLUMA-UT41K4Y1X-a36a1e48bdef-512" alt=""/>
                  <figcaption>
                    <div className="info">
                      <h3>Raghad Al-Quran</h3>
                      <p>Software Developer</p>
                    </div>
                    <div className="social">
                      <a href="https://www.instagram.com/raghadalquran/" className="twitter" data-abc="true"><i className="fa fa-instagram"></i></a>
                      <a href="https://www.facebook.com/Raghad.Alquran95" className="facebook" data-abc="true"><i className="fa fa-facebook"></i></a>
                      <a href="https://www.linkedin.com/in/raghad-al-quran-282a1a180/" className="google-plus" data-abc="true"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        
      </section>

    </>
  ); 
};
  
  
export default About;
