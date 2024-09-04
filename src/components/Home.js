import React from 'react';
import Slider from "react-slick";
import './Home.css';
import cafe1 from './cafe1.jpg';
import cafe2 from './cafe2.jpg';
import cafe3 from './cafe3.jpg';
import cafe4 from './cafe4.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div>
      {/* About Us Section */}
      <div className="about-us-section">
        <div className="about-us-text">
          <div className = "head2">
          <h2>About Us</h2>
          </div>
          
          <p>
            Welcome to Purrfect Café, your cozy spot where coffee and cuddles meet! Our café offers a unique experience where you can relax with a cup of your favorite beverage while enjoying the company of adorable, adoptable cats. Whether you’re here for a quick coffee or a cat adoption, we’re here to make your visit purrfectly delightful!
          </p>
        </div>
        <div className="about-us-slider">
          <Slider {...settings}>
            <div>
              <img src={cafe1} alt="Cafe" />
            </div>
            <div>
              <img src={cafe2} alt="Cafe" />
            </div>
            <div>
              <img src={cafe3} alt="Cafe" />
            </div>
            <div>
              <img src={cafe4} alt="Cafe" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
