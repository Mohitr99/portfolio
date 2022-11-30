import React from "react";
const Contact = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-evenly cnt">
        <div className="col-md-3 col-sm-5 col-11 contact d-flex flex-column align-items-center justify-content-center mb-3">
          <h5>Phone</h5>
          +916284112899
        </div>
        <div className="col-md-3 col-sm-5 col-11 contact d-flex flex-column align-items-center justify-content-center mb-3">
          <h5>E-mail</h5>
          iammohit099@gmail.com
        </div>
        <div className="col-md-3 col-11 contact d-flex flex-column align-items-center justify-content-center mb-3">
          <h5>Address</h5>
          Rajpura, PB, IN
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div
          className=" frm col-md-10 col-11"
          style={{ backgroundColor: "#fff" }}
        >
          <h1 className="m-5">Get In Touch</h1>
          <form
            className="m-5"
            action="https://formspree.io/f/xkneeonn"
            method="POST"
          >
            <div class="row">
              <div class="col-md-4 col-12 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  name="name"
                  required
                />
              </div>
              <div class="col-md-4 col-12 mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your E-mail"
                  name="email"
                  required
                />
              </div>
              <div class="col-md-4 col-12 mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Your Ph. Number"
                  name="number"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn ms-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
