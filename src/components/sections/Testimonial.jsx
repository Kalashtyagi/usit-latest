import React, { useEffect } from "react";
import auther from "../../assets/img/auther1-1.jpg";
import auther1 from "../../assets/img/auther1-2.jpg";
import auther2 from "../../assets/img/auther1-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonial() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <section className="testimonial-section">
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-lg-5 col wow fadeInUp"
              data-wow-delay="400ms"
              style={{ animationDelay: "400ms", animationName: "none" }}
            >
              <div className="inner-column">
                <div className="sec-title">
                  {" "}
                  <span className="sub-title">OUR FEEDBAKCS ::::::</span>
                  <h2>What They are Talking About Company</h2>
                </div>
                <div className="btn-wrap pt-slider">
                  <button className="prev-btn slick-disabled">
                    <i className="fa fa-angle-left"></i>
                  </button>
                  <button className="next-btn">
                    <i className="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-delay="400ms"
              style={{ animationDelay: "600ms", animationName: "none" }}
            >
              <div className="outer-box">
                <div className="row testimonial-slider slick-initialized slick-slider slick-dotted">
                  <button
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button"
                    style=""
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{ opacity: "1", width: "4960px" }}
                    >
                      <div
                        className="testimonial-block col-md-6 slick-slide slick-cloned"
                        data-slick-index="-2"
                        id=""
                        aria-hidden="true"
                        // tabindex="-1"
                        style={{ width: "466px" }}
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Sarah Albert</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther} alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-block col-md-6 slick-slide slick-cloned"
                        data-slick-index="-1"
                        id=""
                        aria-hidden="true"
                        // tabindex="-1"
                        style={{ width: "466px" }}
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Kenvin Martin</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther2} alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-block col-md-6 slick-slide slick-current slick-active"
                        data-slick-index="0"
                        aria-hidden="false"
                        tabindex="0"
                        role="tabpanel"
                        id="slick-slide10"
                        aria-describedby="slick-slide-control10"
                        style={{ width: "466px" }}
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Sarah Albert</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther1} alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-block col-md-6 slick-slide slick-active"
                        data-slick-index="1"
                        aria-hidden="false"
                        tabindex="0"
                        role="tabpanel"
                        id="slick-slide11"
                        aria-describedby="slick-slide-control11"
                        style={{ width: "466px" }}
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Kenvin Martin</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther1} alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-block col-md-6 slick-slide"
                        data-slick-index="2"
                        aria-hidden="true"
                        tabindex="-1"
                        role="tabpanel"
                        id="slick-slide12"
                        aria-describedby="slick-slide-control12"
                        style={{ width: "466px" }}
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Sarah Albert</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther1} alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-block col-md-6 slick-slide"
                        data-slick-index="3"
                        aria-hidden="true"
                        tabindex="-1"
                        role="tabpanel"
                        id="slick-slide13"
                        aria-describedby="slick-slide-control13"
                        style={{ width: "466px" }}
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Kenvin Martin</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther2} alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-block col-md-6 slick-slide slick-cloned"
                        data-slick-index="4"
                        id=""
                        aria-hidden="true"
                        tabindex="-1"
                        style={{ width: "466px" }}
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Sarah Albert</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther2} alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-block col-md-6 slick-slide slick-cloned"
                        data-slick-index="5"
                        id=""
                        aria-hidden="true"
                        tabindex="-1"
                        style="width: 466px;"
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Kenvin Martin</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther2} alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-block col-md-6 slick-slide slick-cloned"
                        data-slick-index="6"
                        id=""
                        aria-hidden="true"
                        tabindex="-1"
                        style={{ width: "466px" }}
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Sarah Albert</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther1} alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-block col-md-6 slick-slide slick-cloned"
                        data-slick-index="7"
                        id=""
                        aria-hidden="true"
                        tabindex="-1"
                        style={{ width: "466px" }}
                      >
                        <div className="inner-box">
                          <ul className="rating">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <div className="auther-info">
                            <h4 className="name">Kenvin Martin</h4>
                            <span className="designation">DESIGNER</span>
                            <div className="text">
                              We believe in four pillars of influence that drive
                              our growth. This is ingrained in everything we do
                              We use technology to create a better and smarter
                              environment{" "}
                            </div>
                            <img src={auther1} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    type="button"
                    style=""
                  >
                    Next
                  </button>
                  <ul className="slick-dots" style="" role="tablist">
                    <li className="slick-active" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control10"
                        aria-controls="slick-slide10"
                        aria-label="1 of 2"
                        tabindex="0"
                        aria-selected="true"
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control11"
                        aria-controls="slick-slide11"
                        aria-label="2 of 2"
                        tabindex="-1"
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control12"
                        aria-controls="slick-slide12"
                        aria-label="3 of 2"
                        tabindex="-1"
                      >
                        3
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control13"
                        aria-controls="slick-slide13"
                        aria-label="4 of 2"
                        tabindex="-1"
                      >
                        4
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
