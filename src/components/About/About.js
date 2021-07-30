import React from 'react';
import './About.scss';
const About = () => {
  return (
    <section>
      <div className="about">
        <div className="about-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="photo">
                <img src="./images/olive.png" alt="Eror" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="about-right">
                <h5>About us</h5>
                <h3>
                Food Stalls with Persons but  to  Product marketing plane
                catlogues etc to. 
                </h3>
                <p>
                There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                equipment  make your marketing plane Effective.
                </p>
                <button type="button" className="btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-layer">
        <img src="./images/orqa-fon.png" alt="" />
      </div>
      </div>
    </section>
  );
};

export default About;