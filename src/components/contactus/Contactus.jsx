import React from 'react';
import "./contactus.css"

const Contactus = () => {
  return (
    <div id="contactus" class ="container">
        <p class="section___title">Contact US</p>
      <div class ="address">

       <div>
         <p class="add_title">Address:</p>
        <p class="add_line">Veleaswaran Nagar Main road,Mangadu,Chennai </p>
        <p class="ph">Phone No:</p>
        <p class="phno">9840777003</p>
        </div>
        <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.34514526084!2d80.1158469!3d13.030177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52619031756e61%3A0xe7529b08184f535a!2sKG%20batminton%20court!5e0!3m2!1sen!2sin!4v1687271219313!5m2!1sen!2sin" class="location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </div>
  )
}

export default Contactus;
