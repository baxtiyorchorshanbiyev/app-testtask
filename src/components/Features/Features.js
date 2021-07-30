import React from 'react';
import './Featues.scss';
const Features = () => {
  return (
    <section>
      <div className="features">
        <div className="features-content">
        <h5>Features</h5>
        <h3>Food with a New Passion</h3>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="photo">
                    <img src="./images/home-icon.svg" alt="Eror" />
                  </div>
                  <h4>Quality Food</h4>
                  <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="photo">
                    <img src="./images/motosikl-icon.svg" alt="Eror" />
                  </div>
                  <h4>Food Delivery</h4>
                  <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="photo">
                    <img src="./images/smile-icon.svg" alt="Eror" />
                  </div>
                  <h4>Super Taste</h4>
                  <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;