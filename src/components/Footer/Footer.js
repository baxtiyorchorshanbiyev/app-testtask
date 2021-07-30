import React from 'react';
import  './Footer.scss';
const Footer = () => {
  return (
    <section>
      <div className="footer">
        <div className="footer-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="footer-logo">
                  <img src="./images/logo.svg" alt="Eror" />
                </div>
                <div><a className="company" href="#!">www.company name.com</a></div>
                <div><a className="company" href="#!">companyname@gmail.com</a></div>
                <div><a className="company" href="tel:+7 485 118 03 25">Phone: +7 485-118-03-25</a></div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <h4>Home</h4>
                <ul className="navs pl-0">
                  <li className="nav-item"><a className="nav-link" href="#!">Landingpage</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Documentation</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Referral Program</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">UI & UX Design</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Web Design</a></li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <h4>Menu</h4>
                <ul className="navs pl-0">
                  <li className="nav-item"><a className="nav-link" href="#!">Landingpage</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Documentation</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Referral Program</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">UI & UX Design</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Web Design</a></li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <h4>Company</h4>
                <ul className="navs pl-0">
                  <li className="nav-item"><a className="nav-link" href="#!">Landingpage</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Documentation</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Referral Program</a></li>
                </ul>
                <div className="social-media">
                <a className="social-link" href="#!"><img src="./images/instagram-icon.svg" alt="Eror" />
                  </a>
                  <a className="social-link" href="#!"><img src="./images/faceebok-icon.svg"  alt="Eror"/>
                  </a>
                  <a className="social-link" href="#!"><img src="./images/twitter-icon.svg" alt="Eror" />
                  </a>
                  <a className="social-link" href="#!"><img src="./images/youtube-icon.svg" alt="Eror" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;