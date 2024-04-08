import React, { useState, useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    alert(inputValue.name);
    setInputValue({
      name: "",
      email: "",
      message: "",
      subject: "",
    });
  }
  return (
    <>
      <div
        data-aos="zoom-out"
        data-aos-duration="3000"
        className="container contact"
        style={{ marginTop: "120px" }}
      >
        <div className="section-title">{/* <h2>Contact</h2> */}</div>
        <div>
          <iframe
            style={{ border: 0, width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512037.46306791!2d-124.60717890801999!3d37.15969460258844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1706702565231!5m2!1sen!2sin"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i class="bi bi-geo-alt-fill"></i>
                <h4>Location:</h4>
                <p>USA</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>contact@usitsource.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>3129074952</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit}>
              <div className="row gy-2 gx-md-3">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    value={inputValue.name}
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    value={inputValue.email}
                    name="email"
                    onChange={handleChange}
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    type="text"
                    value={inputValue.subject}
                    className="form-control"
                    name="subject"
                    onChange={handleChange}
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    value={inputValue.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="text-center ">
                  <button type="submit" className="btn-sub">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
