import React, {Component} from 'react';
import Slider from "react-slick";
import './Carousel.scss';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section>
      <div className="carousel">
        <div className="carousel-content">
          <div className="carousel-title">
          <h5>Testimonial</h5>
          <h4>Making Food great again and again</h4>
          <p>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.
          </p>
          </div>
          <div className="slider">
          <Slider {...settings}>
          <div className="slider-content">
            <div className="slider-photo">
              <img src="./images/mini-orqa-fon.png" alt="Eror" />
              <div className="layer-slider"><img src="./images/slider-photo.svg" alt="" /></div>
            </div>
            <p className="slider-text">
            You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.
            </p>
            <div className="silder-star">
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/no-bg-star.svg" alt="Star" />
            </div>
            <h4>Augusta W. Reynoso</h4>
            <h6>UI&UX DeSIGNER</h6>
          </div>
          <div className="slider-content">
            <div className="slider-photo">
              <img src="./images/mini-orqa-fon.png" alt="Eror" />
              <div className="layer-slider"><img src="./images/slider-photo.svg" alt="" /></div>
            </div>
            <p className="slider-text">
            You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.
            </p>
            <div className="silder-star">
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/no-bg-star.svg" alt="Star" />
            </div>
            <h4>Augusta W. Reynoso</h4>
            <h6>UI&UX DeSIGNER</h6>
          </div>
          <div className="slider-content">
            <div className="slider-photo">
              <img src="./images/mini-orqa-fon.png" alt="Eror" />
              <div className="layer-slider"><img src="./images/slider-photo.svg" alt="" /></div>
            </div>
            <p className="slider-text">
            You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.
            </p>
            <div className="silder-star">
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/bg-star.svg" alt="Star" />
              <img src="./images/no-bg-star.svg" alt="Star" />
            </div>
            <h4>Augusta W. Reynoso</h4>
            <h6>UI&UX DeSIGNER</h6>
          </div>
          
        </Slider>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;