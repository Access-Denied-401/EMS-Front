/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';


const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">EMS</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Financial Management</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Administration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* <div className="col-12 text-center">
              <h1 className="font-weight-light">Employee Management System</h1>
            </div> */}
          </div>
        </div>
      </header>

      <section>
        <div id="myCarousel" class="carousel slide" data-interval="3000" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://images.unsplash.com/photo-1580920461931-fcb03a940df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="First Slide"/>
            </div>

            <div class="carousel-item">
              <img src="https://images.unsplash.com/photo-1508349083404-75b96ae8f41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" alt="Second Slide"/>
            </div>

            <div class="carousel-item">
              <img src="https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="Third Slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>
      


      <section className="py-5">
        <div className="container">
          <h2 className="font-weight-light">Page Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
        </div>
      </section>

    </>
  );
};


export default Header;
