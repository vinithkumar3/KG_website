import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./header.css";


const Header = (navigation) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar my-navbar sticky-top">
        <div>

          <span className="navbar-brand mb-0 h1 text-danger font-weight-bold" style={{ marginRight: '10px', marginLeft: '3rem' }}>KG</span>
          <span className="navbar-brand mb-0 h1 text-secondary font-weight-bold">Shuttle Court</span>
        </div>

        <nav class="navbar navbar-expand-lg  ">


          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-menu"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <a class="nav-link  mb-0 h5" aria-current="page" onClick={() => {
                navigate('/');
              }}
                href="#home">Home</a>
              <a class="nav-link  mb-0 h5" onClick={() => {
                navigate('/gallerypage');
              }}
                href="#gallerypage" >Gallery</a>
              <a class="nav-link  mb-0 h5" onClick={() => {
                navigate('/trainingpage');
              }}
                href="#Training">Traning & Schedule</a>

              <a class="nav-link  mb-0 h5" onClick={() => {
                navigate('/reviewpage');
              }} href="#review">Reviews</a>
              <a class="nav-link  mb-0 h5" onClick={() => {
                navigate('/login');
              }} href="#login">Login</a>
              <a class="nav-link  mb-0 h5" onClick={() => {
                navigate('/contactuspage');
              }}
                href="#contactus">Contact Us</a>
            </div>

          </div>
        </nav>
      </nav>



    </div>


  )
}

export default Header;
