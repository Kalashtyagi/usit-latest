import React, { useContext, useEffect, useState } from "react";
import bg from "../../assets/img/computer.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { NewsContext } from "../../Context/NewsContext";
import { database } from "../../firebase-auth/auth";

export default function Home() {
  const { news } = useContext(NewsContext);
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    database.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
      } else {
        setUser("");
      }
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://usit-backend-dev.eba-xc6xkkgt.us-east-1.elasticbeanstalk.com/api/Dashboard"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();

        // Sort the data based on the 'addedWhen' field in descending order
        jsonData.sort((a, b) => new Date(b.addedWhen) - new Date(a.addedWhen));

        setData(jsonData.map((item) => item.text));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("News", data);

  return (
    <>
      <section className="banner-section">
        <div className="banner-slider slick-initialized slick-slider">
          {user && (
            <div
              className="news-container"
              style={{ marginTop: "103px", zIndex: "1" }}
            >
              <div className="title">Latest News</div>
              <div style={{ backgroundColor: "#f09a6b" }}>
                <ul>
                  {data.map((item, index) => (
                    <li style={{ color: "white" }} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: "1",
                width: "11081px",
                // transform: translate3d("-3166px", "0px", "0px"),
              }}
            >
              <div
                className="banner-slide slick-slide slick-current slick-active"
                data-slick-index="1"
                aria-hidden="false"
                // tabindex="0"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src={bg} alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span
                        className="sub-title fadeInUp animated"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.2"
                        style={{
                          opacity: "1",
                          animationDelay: "0.2s",
                          marginBottom: "-25px",
                          background: "transparent",
                          fontSize: "x-large",
                        }}
                      >
                        US IT RESOURCES
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: "1", animationDelay: "0.2s" }}
                        className="fadeInLeft animated"
                      >
                        Best Technology Solutions for Large Businesses{" "}
                      </h1>
                      {/* <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn fadeInUp animated"
                          //   tabindex="0"
                          style={{ opacity: "1", animationDelay: "0.2s" }}
                        >
                          Discover More
                        </a>{" "}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="banner-slide slick-slide"
                data-slick-index="2"
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src={bg} alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span className="sub-title">
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: "1", animationDelay: "0.2s" }}
                        className=""
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      {/* <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          //   tabindex="-1"
                          style={{ opacity: "1", animationDelay: "0.2s" }}
                        >
                          Discover More
                        </a>{" "}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="banner-slide slick-slide slick-cloned"
                data-slick-index="3"
                id=""
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src="./computer.gif" alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span className="sub-title">
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: 0 }}
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      {/* <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          //   tabindex="-1"
                          style={{ opacity: 0 }}
                        >
                          Discover More
                        </a>{" "}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="banner-slide slick-slide slick-cloned"
                data-slick-index="4"
                id=""
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src={bg} alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span
                        className="sub-title"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.2"
                        style={{ opacity: 0 }}
                      >
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: 0 }}
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      {/* <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          //   tabindex="-1"
                          style={{ opacity: 0 }}
                        >
                          Discover More
                        </a>{" "}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="banner-slide slick-slide slick-cloned"
                data-slick-index="5"
                id=""
                aria-hidden="true"
                // tabindex="-1"
                style={{ width: "1583px" }}
              >
                {" "}
                <img src={bg} alt="" />
                <div className="outer-box">
                  <div className="auto-container">
                    <div className="content-box">
                      {" "}
                      <span className="sub-title">
                        Next level Automation System
                      </span>
                      <h1
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.2"
                        style={{ opacity: 0 }}
                      >
                        Cast Effective Digital Marketing Agency
                      </h1>
                      {/* <div className="btn-box">
                        {" "}
                        <a
                          href=""
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                          className="theme-btn"
                          //   tabindex="-1"
                          style={{ opacity: 0 }}
                        >
                          Discover More
                        </a>{" "}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <button
            className="slick-next slick-arrow"
            aria-label="Next"
            type="button"
            style={{}}
          >
            Next
          </button> */}
        </div>
      </section>
      {/* <!-- End banner-section --> */}
    </>
  );
}
