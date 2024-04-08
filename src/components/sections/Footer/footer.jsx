import React from "react";
import logo from "../../../assets/img/logo1.png";
import footer1 from "../../../assets/img/footer-thumb-1.jpg";
import footer2 from "../../../assets/img/footer-thumb-2.jpg";
import footer3 from "../../../assets/img/footer-thumb-3.jpg";
import footer4 from "../../../assets/img/footer-thumb-4.jpg";
import footer5 from "../../../assets/img/footer-thumb-5.jpg";
import footer6 from "../../../assets/img/footer-thumb-6.jpg";

export default function Footer() {
  return (
    <>
      <footer
        className="main-footer"
        style={{ backgroundColor: "black", marginTop: "20px" }}
      >
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div
                className="footer-column col-lg-3 col-sm-6 wow fadeInLeft"
                // style="visibility: hidden; animation-name: none;"
              >
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <a href="">
                      <img src={logo} width={140} height={80} alt="" />
                    </a>
                  </div>
                  <div className="text">
                    Desires to obtain pain of itself, because it is pain, but
                    occasionally circumstances.
                  </div>
                  <div className="subscribe-form">
                    <form method="post" action="">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="email"
                          value=""
                          placeholder="Your Address"
                          required=""
                        />
                        <button type="button" className="theme-btn">
                          <i className="fa fa-paper-plane"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="footer-column col-lg-3 col-sm-6 wow fadeInLeft"
                data-wow-delay="400ms"
                // style="visibility: hidden; animation-delay: 400ms; animation-name: none;"
              >
                <div className="footer-widget gallery-widget">
                  <h3 className="widget-title">Our Projects</h3>
                  <div className="widget-content">
                    <div className="outer clearfix">
                      <figure className="image">
                        {" "}
                        <a href="">
                          <img src={footer1} alt="" />
                        </a>{" "}
                      </figure>
                      <figure className="image">
                        {" "}
                        <a href="">
                          <img src={footer2} alt="" />
                        </a>{" "}
                      </figure>
                      <figure className="image">
                        {" "}
                        <a href="">
                          <img src={footer3} alt="" />
                        </a>{" "}
                      </figure>
                      <figure className="image">
                        {" "}
                        <a href="">
                          <img src={footer4} alt="" />
                        </a>{" "}
                      </figure>
                      <figure className="image">
                        {" "}
                        <a href="">
                          <img src={footer5} alt="" />
                        </a>{" "}
                      </figure>
                      <figure className="image">
                        {" "}
                        <a href="">
                          <img src={footer6} alt="" />
                        </a>{" "}
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="footer-column col-lg-3 col-sm-6 wow fadeInLeft"
                // data-wow-delay="600ms"
                // style="visibility: hidden; animation-delay: 600ms; animation-name: none;"
              >
                <div className="footer-widget links-sec">
                  <h3 className="widget-title">Quick Links</h3>
                  <ul className="user-links">
                    <li>
                      <a href="#about">About Company</a>
                    </li>
                    <li>
                      <a href="">Meet the Team</a>
                    </li>
                    <li>
                      <a href="">News &amp; Media</a>
                    </li>
                    <li>
                      <a href="">Our Projects</a>
                    </li>
                    <li>
                      <a href="#services">Our Services</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="footer-column col-lg-3 col-sm-6 wow fadeInLeft"
                // style="visibility: hidden; animation-delay: 800ms; animation-name: none;"
              >
                <div className="footer-widget contact-widget">
                  <h3 className="widget-title">Contact Now</h3>
                  <div className="widget-content">
                    <div className="text">
                      <i className="fa-solid fa-location-dot"></i>USA
                    </div>
                    <ul className="contact-info">
                      <li>
                        <i className="fa fa-envelope"></i>{" "}
                        <a href="mailto:needhelp@yourdomain.com">
                          contact@usitsource.com
                        </a>
                        <br />
                      </li>
                      <li>
                        <i className="fa fa-phone"></i>{" "}
                        <a href="tel:+926668880000">3129074952</a>
                        <br />
                      </li>
                    </ul>
                    <ul className="social-icons">
                      <li>
                        <a href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fab fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text text-center">
                © Copyright 2023 by <a href="">US IT Resource</a>
              </div>
              <a href="" className="footer-btn"></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
