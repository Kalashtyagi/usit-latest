import React from "react";
import c1 from "../../assets/img/client3-1.png";
import c2 from "../../assets/img/client3-2.png";
import c3 from "../../assets/img/client3-3.png";
import c4 from "../../assets/img/client3-4.png";
import c5 from "../../assets/img/client3-5.png";

export default function Client() {
  return (
    <>
      <section className="client-section pt-0">
        <div className="auto-container">
          <div className="outer-box">
            <figure
              className="image wow fadeInLeft"
              data-wow-delay="400ms"
              style={{ animationDelay: "400ms", animationName: "none" }}
            >
              <a href="">
                <img src={c1} alt="" />
              </a>
            </figure>
            <figure
              className="image wow fadeInLeft"
              data-wow-delay="600ms"
              style={{ animationDelay: "600ms", animationName: "none" }}
            >
              <a href="">
                <img src={c2} alt="" />
              </a>
            </figure>
            <figure
              className="image wow fadeInLeft"
              data-wow-delay="800ms"
              style={{ animationDelay: "800ms", animationName: "none" }}
            >
              <a href="">
                <img src={c3} alt="" />
              </a>
            </figure>
            <figure
              className="image wow fadeInLeft"
              data-wow-delay="1000ms"
              style={{ animationDelay: "1000ms", animationName: "none" }}
            >
              <a href="">
                <img src={c4} alt="" />
              </a>
            </figure>
            <figure
              className="image wow fadeInLeft"
              data-wow-delay="1100ms"
              style={{ animationDelay: "1100ms", animationName: "none" }}
            >
              <a href="">
                <img src={c5} alt="" />
              </a>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
