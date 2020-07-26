/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './slider.scss';


const Slider = (props) => {
  return (
    <>

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

    </>
  );
};


export default Slider;

