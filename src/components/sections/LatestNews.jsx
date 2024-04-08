import React from "react";
import news1 from "../../assets/img/news1-1.jpg";
import news2 from "../../assets/img/news1-2.jpg";
import news3 from "../../assets/img/news1-3.jpg";
import newsauther from "../../assets/img/news-auther.jpg";

export default function LatestNews() {
  return (
    <>
      <section className="news-section pt-0">
        <div className="auto-container">
          <div
            className="sec-title text-center "
            //   data-wow-delay="400ms"
            //   style="visibility: hidden; animation-delay: 400ms; animation-name: none;"
          >
            <span className="sub-title">:::::: FROM THE BLOG ::::::</span>
            <h2>
              Our Latest News Update <br />
              and Artical{" "}
            </h2>
          </div>
          <div className="row">
            <div
              className="news-block col-xl-4 col-md-6"
              //  data-wow-delay="400ms"
              //  style="visibility: hidden; animation-delay: 400ms; animation-name: none;"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src={news1} alt="" />
                  </figure>
                  <span className="date">11 MAR, 2023</span>
                </div>
                <div className="content-box">
                  <div className="auther-info">
                    {" "}
                    <img src={newsauther} alt="" />
                    <ul className="auther-content">
                      <li>By Jackson Mile</li>
                      <li>3 Comments</li>
                    </ul>
                  </div>
                  <h4 className="title">
                    <a href="">Crypto Exchange For influencers in China</a>
                  </h4>
                  <a href="" className="news-btn theme-btn">
                    <span>Read More</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="news-block col-xl-4 col-md-6 wow fadeInUp"
              // data-wow-delay="600ms" style="visibility: hidden; animation-delay: 600ms; animation-name: none;"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src={news2} alt="" />
                  </figure>
                  <span className="date">11 MAR, 2023</span>
                </div>
                <div className="content-box">
                  <div className="auther-info">
                    {" "}
                    <img src={newsauther} alt="" />
                    <ul className="auther-content">
                      <li>By Jackson Mile</li>
                      <li>3 Comments</li>
                    </ul>
                  </div>
                  <h4 className="title">
                    <a href="">Technology Support us Allows Erie to Serve</a>
                  </h4>
                  <a href="" className="news-btn theme-btn">
                    <span>Read More</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="news-block col-xl-4 col-md-6 "
              // data-wow-delay="800ms" style="visibility: hidden; animation-delay: 800ms; animation-name: none;"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src={news3} alt="" />
                  </figure>
                  <span className="date">11 MAR, 2023</span>
                </div>
                <div className="content-box">
                  <div className="auther-info">
                    {" "}
                    <img src={newsauther} alt="" />
                    <ul className="auther-content">
                      <li>By Jackson Mile</li>
                      <li>3 Comments</li>
                    </ul>
                  </div>
                  <h4 className="title">
                    <a href="">Necessity May Give us Best Virtual Court</a>
                  </h4>
                  <a href="" className="news-btn theme-btn">
                    <span>Read More</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
