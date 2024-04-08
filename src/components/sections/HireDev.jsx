import React from "react";
import tick from "../../assets/img/green-check.webp";
// import { Link } from "react-router-dom";
import maleDev from "../../assets/img/rajat.jpeg";
import maleDev2 from "../../assets/img/manvendre.jpeg";
import blueTick from "../../assets/img/checked-star-blue.webp";
import star from "../../assets/img/star-bhagwa.webp";
import starG from "../../assets/img/star-grey.webp";
import AutoPlayMethods from "./ReactSlick";

export default function HireDev() {
  return (
    <>
      <div className="hero-box overflow-hidden">
        <div className="wrapper-930 mx-auto">
          <p className="hero-sub-text fs-18 fw-400 d-inline-block mx-auto bg-periwinkle-gray rounded-80 py-2 px-4 mb-2">
            Solving the Tech Hiring Problem for CEOs, CTOs, and Hiring Leaders
          </p>
          <h1 className="title">
            Hire Remote Developers for Large Scale Projects 10X Faster
          </h1>
          <p className="fs-18 fw-400 color-steel-grey">
            We've perfected hiring for 10,000+ recruiters and CTOs. Find the
            right talent, skip tedious interview rounds, and boost growth
            effortlessly
          </p>
          <div className="hero-check-list">
            <div className="d-flex align-items-center text-nowrap">
              <img
                className="me-2"
                src={tick}
                width="16"
                height="16"
                alt="features"
              />
              <p className="fs-16 fw-400">All Full Time Senior Developers</p>
            </div>
            <div className="d-flex align-items-center text-nowrap">
              <img
                className="me-2"
                src={tick}
                width="16"
                height="16"
                alt="features"
              />
              <p className="fs-16 fw-400">No Severance &amp; ESOPs needed</p>
            </div>
            <div className="d-flex align-items-center text-nowrap">
              <img
                className="me-2"
                src={tick}
                width="16"
                height="16"
                alt="features"
              />
              <p className="fs-16 fw-400">99% Customer Satisfaction Rate</p>
            </div>
          </div>
          
          {/* </Link> */}
        </div>
        <div className="worldmap position-relative">
         
          <div className="developerIntroCard onHero1">
            <div className="devSlideTop">
              <img
                src={maleDev}
                className="w-100 ls-is-cached lazyloaded"
                alt="best developer at supersopurcing"
                width="234"
                height="187"
              />
              <div className="devName">
                <p className="fs-16 fw-500 text-white d-flex align-items-center">
                  Rajat{" "}
                  <img
                    src={blueTick}
                    width="18"
                    className="ms-1"
                    alt="supersourcing varified developer"
                  />
                </p>
                <p className="fs-14 fw-400 text-white">React js Developer</p>
              </div>
            </div>
            <div className="devSlideBot p-1 pb-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <p className="fs-16 fw-600 color-primary-black me-2">
                    4.1<span className="fs-12">/5</span>
                  </p>
                  <span className="fs-11 fw-400 color-slate-grey">(31)</span>
                  <div className="d-flex align-items-center ms-1">
                    <img
                      className="me-1"
                      src={star}
                      width="12"
                      alt="developer rating 5 star"
                    />
                    <img
                      className="me-1"
                      src={star}
                      width="12"
                      alt="developer rating 5 star"
                    />
                    <img
                      className="me-1"
                      src={star}
                      width="12"
                      alt="developer rating 5 star"
                    />
                    <img
                      className="me-1"
                      src={star}
                      width="12"
                      alt="developer rating 5 star"
                    />
                    <img
                      className="me-1"
                      src={starG}
                      width="12"
                      alt="developer rating 5 star"
                    />
                  </div>
                </div>
                <span className="fs-13 fw-500 color-primary-black">
                  $35/Hrs
                </span>
              </div>
              <p className="fs-14 fw-400 color-slate-grey mt-1 mb-1">
                4+ years experience • Fintech
              </p>
              <div className="dev-skill-set">
                <span>React- 3 years | Expert</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          <div className="developerIntroCard onHero2">
            <div className="devSlideTop">
              <img
                src={maleDev2}
                className="w-100 ls-is-cached lazyloaded"
                alt="best developer at supersopurcing"
                width="234"
                height="187"
              />
              <div className="devName">
                <p className="fs-16 fw-500 text-white d-flex align-items-center">
                  Manvendre{" "}
                  <img
                    src={blueTick}
                    width="18"
                    className="ms-1"
                    alt="supersourcing varified developer"
                  />
                </p>
                <p className="fs-14 fw-400 text-white">.net Developer</p>
              </div>
            </div>
            <div className="devSlideBot p-1 pb-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <p className="fs-16 fw-600 color-primary-black me-2">
                    4.2<span className="fs-12">/5</span>
                  </p>
                  <span className="fs-11 fw-400 color-slate-grey">(34)</span>
                  <div className="d-flex align-items-center ms-1">
                    <img
                      className="me-1"
                      src={star}
                      width="12"
                      alt="developer rating 5 star"
                    />
                    <img
                      className="me-1"
                      src={star}
                      width="12"
                      alt="developer rating 5 star"
                    />
                    <img
                      className="me-1"
                      src={star}
                      width="12"
                      alt="developer rating 5 star"
                    />
                    <img
                      className="me-1"
                      src={star}
                      width="12"
                      alt="developer rating 5 star"
                    />
                    <img
                      className="me-1"
                      src={starG}
                      width="12"
                      alt="developer rating 5 star"
                    />
                  </div>
                </div>
                <span className="fs-13 fw-500 color-primary-black">
                  $25/Hrs
                </span>
              </div>
              <p className="fs-14 fw-400 color-slate-grey mt-1 mb-1">
                4+ years experience * Edtech
              </p>
              <div className="dev-skill-set">
                <span>.net Developer- 3 years | Expert</span>
                <span>C#</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <a
          href="/developerProfile"
          class="hero-btn text-decoration-none btn-animation"
        
        >
          <span class="fs-20 fw-500 text-white">Developer Profile</span>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="#F4F4F4"></circle>
            <path
              d="M12 18L24 18"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19 12.75L24.25 18L19 23.25"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
        </div>
      </div>
    </>
  );
}
