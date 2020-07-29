/* eslint-disable no-unused-vars */
import React from 'react';
import './feedback.scss';



const Feedback = (props) => {
  return (
    <>
      <div class="container-vacation box contact-form"  data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1500">
        <div class="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
        </div>
        <form method="post">
          <h3>Vacation Request</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" name="txtName" class="form-control" placeholder="Your Name *" />
              </div>
              <div class="form-group">
                <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *"  />
              </div>
              <div class="form-group">
                <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" />
              </div>
              <div class="form-group">
                <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea name="txtMsg" class="form-control" placeholder="Your Message *"></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>

    </>
  );
};


export default Feedback;