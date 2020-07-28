/* eslint-disable no-unused-vars */
import React from 'react';
// import { Link } from 'react-router-dom';
import Slider from '../slider/slider';


const Home = (props) => {
  return (
    <>
      <Slider />
      <div class="row mb-4">

        <div class="col-md-4">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg" alt="A view on mountains."
            class="img-fluid animated fadeIn" />
        </div>

        <div class="col-md-4">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg" alt="Cottage on a lake surrounded by mountains."
            class="img-fluid animated fadeInDown" />
        </div>

        <div class="col-md-4">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="Cyclist riding down the mountain path."
            class="img-fluid animated fadeInUp" />
        </div>

      </div>

      <div class="row mb-4">

        <div class="col-md-4">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="View on mountains from mountain top."
            class="img-fluid animated fadeInLeft" />
        </div>

        <div class="col-md-4">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg" alt="Rocky shore in the morning."
            class="img-fluid animated fadeInRight" />
        </div>

        <div class="col-md-4">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Rocky shore in the morning."
            class="img-fluid animated fadeInUp" />
        </div>

      </div>
    </>
  );
};


export default Home;
