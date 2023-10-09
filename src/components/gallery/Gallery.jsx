import videoSource from "../../assets/ad-video2.mp4";
import "./gallery.css";
import React from "react";
import Img3 from "../../assets/ad-2.jpeg";
import Img2 from "../../assets/anniversary.jpeg";
import Img1 from "../../assets/ad-1.jpg";

const Gallery = () => {
  return (
    <div id="gallery" class="container">
      <p class="section___title ">Gallery </p>
      <div class="ad  ">
        <video autoPlay controls class="video">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="gallery">
          <img src={Img1} alt="Image 1" />
          <img src={Img2} alt="Image 2" />
          <img src={Img3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
