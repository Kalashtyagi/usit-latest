import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Service() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* <!-- service section --> */}
      <section className="service-section pt-0 pb-0">
        <div className="auto-container">
          <div className="row g-0">
            {/* <!-- service-block --> */}
            <div
              className="service-block col-lg-4 col-md-6 wow fadeInRight animated"
              data-wow-delay="400ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  {" "}
                  <i class="fa-solid fa-gear"></i>
                  <h5 className="title">
                    <a href="">Profect BusinessIT Solution</a>
                  </h5>
                </div>
                <div className="text">
                  US IT Source collaborates with IIT Hyderabad to foster synergy
                  between industry.
                </div>
              </div>
            </div>
            {/* <!-- service-block --> */}
            <div
              className="service-block col-lg-4 col-md-6 wow fadeInRight animated"
              data-wow-delay="600ms"
              style={{
                visibility: "visible",
                animationDelay: "600ms",
                animationName: "fadeInRight",
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  {" "}
                  <i class="fa-solid fa-business-time"></i>
                  <h5 className="title">
                    <a href="">Business Growth Planning</a>
                  </h5>
                </div>
                <div className="text">
                  How can 5G Technology change the future of the IT Solution?
                </div>
              </div>
            </div>
            {/* <!-- service-block --> */}
            <div
              className="service-block col-lg-4 col-md-6 wow fadeInRight animated"
              data-wow-delay="800ms"
              style={{
                visibility: "visible",
                animationDelay: "600ms",
                animationName: "fadeInRight",
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  {" "}
                  <i class="fa-brands fa-searchengin"></i>
                  <h5 className="title">
                    <a href="">Search Engine Optimization</a>
                  </h5>
                </div>
                <div className="text">
                  US-based InfoVision appoints Shreeranganathan Kulkarni as MD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End service-section --> */}
    </div>
  );
}
