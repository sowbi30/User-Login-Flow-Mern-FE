import React from 'react';
import '../../style/contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container" style={{paddingTop:"30px"}}>
      <div className="map-container">
        <h3>Contact Us Here!</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19577315214!2d78.04042158065874!3d9.917826796721695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701529316448!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="form-container px-5 my-5 px-5">
        <h2 className="fw-bolder" >Get in touch</h2>
        <p className="lead mb-0">We'd love to hear from you</p>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <form
              action="https://formspree.io/f/xzbllqjw"
              method="POST"
              className="needs-validation"
            >
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your name..."
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Enter your message here..."
                  required
                  rows="3"
                ></textarea>
              </div>
              <div className="d-grid">
                <button className="btn btn-success btn-lg" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
