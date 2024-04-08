import React from "react";

const S1 = () => {
  return (
    <>
      <div
        className="support-company-area support-padding fix"
        style={{ marginTop: "130px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                <div className="section-tittle section-tittle2">
                  {/* <span style={{marginTop:'20px'}}>Service</span> */}
                  <h1>Data engineering</h1>
                  {/* <h2>What can we do?</h2> */}
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    <span style={{ color: "orange", fontSize: "22px" }}>
                      Data engineering
                    </span>{" "}
                    is the practice of designing and building systems for
                    collecting, storing, and analysing data at scale. It is a
                    broad field with applications in just about every industry.
                    Organisations can collect massive amounts of data, and they
                    need the right people and technology to ensure it is in a
                    highly usable state by the time it reaches data scientists
                    and analysts.
                  </p>
                  <p>
                    In addition to making the lives of data scientists easier,
                    working as a data engineer can allow you to make a tangible
                    difference in a world where we’ll be producing 463 exabytes
                    per day by 2025 [1]. That’s one and 18 zeros of bytes worth
                    of data. Fields like machine learning and deep learning
                    can’t succeed without data engineers to process and channel
                    that data.
                    <br />
                    <br />
                    Data engineers work in various settings to build systems
                    that collect, manage, and convert raw data into usable
                    information for data scientists and business analysts to
                    interpret. Their ultimate goal is to make data accessible so
                    that organisations can use it to evaluate and optimise their
                    performance.
                  </p>

                  <br />
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "20%" }} className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                <img
                  width="70%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YgiIsoQv9vaUKR8bzWVsvjruGQqdz-ESWQ&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default S1;
