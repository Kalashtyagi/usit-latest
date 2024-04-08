import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ser from "../../assets/img/ser2-2.jpg";
import ser1 from "../../assets/img/ser2-3.jpg";
import ser2 from "../../assets/img//ser2-1.jpg";

export default function Service1() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* <!-- service-section --> */}
      <section id="services" className="service-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            {" "}
            <span className="sub-title">
              :::::: SERVICES WE’RE OFFERING ::::::
            </span>
            <h2>
              Provide Best Quality Services
              <br />
              Thats Stand Behind
            </h2>
          </div>
          <div className="row">
            {/* <!-- service-block-two --> */}
            <div
              className="service-block-two col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="400ms"
              style={{
                // visibility: "hidden",
                animationDelay: "400ms",
                animationName: "none",
              }}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src={ser2} alt="" />
                  </figure>
                  <i class="fa-sharp fa-solid fa-clock"></i>
                </div>
                <div className="content-box">
                  <h4 className="title">
                    <a href="">Data Engineering</a>
                  </h4>
                  <div className="text">
                    Sed non odio non elit porttitor Donec elit sit fermentum
                    amet
                  </div>
                  <a href="/s1" className="ser-btn">
                    Read More<i className="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- service-block-two --> */}
            <div
              className="service-block-two col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="600ms"
              style={{
                // visibility: "hidden",
                animationDelay: "600ms",
                animationName: "none",
              }}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src={ser} alt="" />
                  </figure>
                  <i class="fa-solid fa-desktop"></i>
                </div>
                <div className="content-box">
                  <h4 className="title">
                    <a href="">Blockchain</a>
                  </h4>
                  <div className="text">
                    Sed non odio non elit porttitor Donec elit sit fermentum
                    amet
                  </div>
                  <a href="/s2" className="ser-btn">
                    Read More<i className="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- service-block-two --> */}
            <div
              className="service-block-two col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="800ms"
              style={{
                // visibility: "hidden",
                animationDelay: "400ms",
                animationName: "none",
              }}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src={ser1} alt="" />
                  </figure>
                  <i class="fa-solid fa-bullseye"></i>
                </div>
                <div className="content-box">
                  <h4 className="title">
                    <a href="">IoT</a>
                  </h4>
                  <div className="text">
                    Sed non odio non elit porttitor Donec elit sit fermentum
                    amet
                  </div>
                  <a href="/s3" className="ser-btn">
                    Read More<i className="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End service-section --> */}
    </>
  );
}
