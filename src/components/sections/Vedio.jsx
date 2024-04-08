import React from "react";
import about2 from "../../assets/img/about2-1.jpg";

export default function Vedio() {
  return (
    <>
      <section className="about-section-two pt-0">
        <div className="auto-container">
          <div className="row">
            <div
              className="image-column col-lg-6 wow fadeInLeft"
              data-wow-delay="400ms"
              style={{ animationDelay: "400ms", animationName: "none" }}
            >
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    {" "}
                    <img src={about2} alt="" />
                    <div className="btn-box">
                      {" "}
                      <a
                        href="https://www.youtube.com/watch?v=pzgKetAWlkw"
                        className="play-now"
                        data-fancybox="gallery"
                        data-caption=""
                      >
                        <i className="icon fa fa-play" aria-hidden="true"></i>
                        <span className="ripple"></span>
                      </a>{" "}
                    </div>
                  </figure>
                  <div className="exp-box">
                    <h3 className="title">
                      Professional IT Technology Services you can Trust
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- content-column --> */}
            <div
              className="content-column col-lg-6 wow fadeInRight"
              data-wow-delay="400ms"
              style={{ animationDelay: "600ms", animationName: "none" }}
            >
              <div className="inner-column">
                <div className="sec-title">
                  {" "}
                  <span className="sub-title">TECH MANAGEMENT ::::::</span>
                  <h2>The Best Source For IT Solutions</h2>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.{" "}
                  </div>
                </div>
                <div className="title-box">
                  <h6 className="title">
                    Lorem Ipsum is simply available typesetting industry been
                    the industry standard.{" "}
                  </h6>
                </div>
                {/* <div className="content-box">
                  <div className="skills">
                    <div className="skill-item">
                      <div className="skill-header">
                        <h6 className="skill-title">Technology</h6>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-inner">
                          <div className="bar progress-line" data-width="86">
                            <div className="skill-percentage">
                              <div className="count-box">
                                <span
                                  className="count-text"
                                  data-speed="3000"
                                  data-stop="86"
                                >
                                  0
                                </span>
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="btn-box">
                  {" "}
                  <a href="" className="ser-btn theme-btn">
                    Discover More
                  </a>{" "}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
