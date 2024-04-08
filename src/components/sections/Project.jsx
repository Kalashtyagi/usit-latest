import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/img/project1-3.jpg";
import p2 from "../../assets/img/project1-1.jpg";
import p3 from "../../assets/img/project1-2.jpg";
export default function Project() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="project-section">
        <div className="auto-container">
          <div className="sec-title">
            {" "}
            <span className="sub-title">RECENTLY COMPLETED WORK ::::::</span>
            <h2>
              Improve and Enhance the <br />
              Best Tech Projects
            </h2>
            {/* <a href="" className="ser-btn theme-btn">
              Discover More
            </a> */}
          </div>
          <div className="outer-box">
            <div className="row">
              <div
                className="project-block col-lg-3 col-sm-6 wow fadeInRight"
                data-wow-delay="400ms"
                style={{ animationDelay: "400ms", animationName: "none" }}
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      <img src={p2} alt="" />
                    </figure>
                  </div>
                  <div className="content-box">
                    {" "}
                    <span>Technology</span>
                    <h4 className="title">
                      <a href="">Technology Traning</a>
                    </h4>
                    <a href="" className="angel-btn">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="project-block col-lg-3 col-sm-6 wow fadeInRight"
                data-wow-delay="600ms"
                style={{ animationDelay: "600ms", animationName: "none" }}
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      <img src={p3} alt="" />
                    </figure>
                  </div>
                  <div className="content-box">
                    {" "}
                    <span>IDEA</span>
                    <h4 className="title">
                      <a href="">Design &amp; Projects</a>
                    </h4>
                    <a href="" className="angel-btn">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="project-block col-lg-3 col-sm-6 wow fadeInRight"
                data-wow-delay="800ms"
                style={{ animationDelay: "800ms", animationName: "none" }}
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      <img src={p1} alt="" />
                    </figure>
                  </div>
                  <div className="content-box">
                    {" "}
                    <span>Security</span>
                    <h4 className="title">
                      <a href="">Network Security</a>
                    </h4>
                    <a href="" className="angel-btn">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="project-block col-lg-3 col-sm-6 wow fadeInRight"
                data-wow-delay="1000ms"
                style={{ animationDelay: "1000ms", animationName: "none" }}
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      <img src={p2} alt="" />
                    </figure>
                  </div>
                  <div className="content-box">
                    {" "}
                    <span>Development</span>
                    <h4 className="title">
                      <a href="">Tech Solution</a>
                    </h4>
                    <a href="" className="angel-btn">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
