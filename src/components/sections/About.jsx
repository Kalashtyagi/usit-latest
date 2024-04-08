import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about1 from "../../assets/img/about1-1.jpg";
import about2 from "../../assets/img/about1-2.jpg";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <!-- about-section --> */}
      <section className="about-section" id="about">
        <div className="auto-container">
          <div className="row">
            {/* <!-- content-column --> */}
            <div
              className="content-column col-lg-6 wow fadeInLeft"
              //   data-wow-delay="600ms"
              //   style={{
              //     visibility: "hidden",
              //     animationDelay: "600ms",
              //     animationN: "none",
              //   }}
            >
              <div className="inner-column">
                <div className="sec-title">
                  {" "}
                  <span className="sub-title">ABOUT OUR Ziteh ::::::</span>
                  <h2>We Execute Our Thoughts From the Beginning to Wrap up</h2>
                  <div className="text">
                    Development in a powerful way of just not an only
                    professions, however, in a passion for our Company. We have
                    to a tendency to believe the idea that smart looking of any
                    website is the first impression on visitors{" "}
                  </div>
                </div>
                <div className="row">
                  {/* <!-- about-block --> */}
                  <div className="about-block col-sm-6">
                    <div className="inner-box">
                      <div className="icon-box">
                        {" "}
                        <i class="fa-solid fa-business-time"></i>
                        <h4 className="title">Internal Networking</h4>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sited amet consectetur notted{" "}
                      </div>
                    </div>
                  </div>
                  {/* <!-- about-block --> */}
                  <div className="about-block col-sm-6">
                    <div className="inner-box">
                      <div className="icon-box">
                        {" "}
                        <i class="fa-solid fa-business-time"></i>
                        <h4 className="title">Manage IT Services</h4>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sited amet consectetur notted{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="btn-box">
                  {" "}
                  <a href="" className="btn theme-btn">
                    Discover More
                  </a>{" "}
                  <img src={""} alt="" />{" "}
                </div> */}
              </div>
            </div>
            {/* <!-- image-column --> */}
            <div
              className="image-column col-lg-6 wow fadeInRight"
              data-wow-delay="600ms"
              style={{
                // visibility: "hidden",
                animationDelay: "600ms",
                animationName: "none",
              }}
            >
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src={about1} alt="" />
                  </figure>
                  <figure className="image-2 overlay-anim bounce-y">
                    <img src={about2} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
