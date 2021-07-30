import React from 'react';
import './Contact.scss';
const Contact = () => {
  return (
    <section>
      <div className="contact">
        <div className="contact-content">
          <div className="contact-title">
            <h5>Contact </h5>
            <h4>Food Stalls with Persons but also specialized equipment, Skills to manage.</h4>
            <form>
              <div className="input-group">
                <input type="text" className="form-control text" placeholder="Enter Your Message" />
                <button type="submit" className='btn send'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;