import React from "react";

const S3 = () => {
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
                  <h1>Internet of Things (IoT)</h1>
                  {/* <h2>What can we do?</h2> */}
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    <span style={{ color: "orange", fontSize: "22px" }}>
                      Internet of Things (IoT)
                    </span>{" "}
                    Over the past few years, IoT has become one of the most
                    important technologies of the 21st century. Now that we can
                    connect everyday objects—kitchen appliances, cars,
                    thermostats, baby monitors—to the internet via embedded
                    devices, seamless communication is possible between people,
                    processes, and things.
                  </p>
                  <p>
                    Industrial IoT (IIoT) refers to the application of IoT
                    technology in industrial settings, especially with respect
                    to instrumentation and control of sensors and devices that
                    engage cloud technologies. Refer to thisTitan use case PDF
                    for a good example of IIoT. Recently, industries have used
                    machine-to-machine communication (M2M) to achieve wireless
                    automation and control. But with the emergence of cloud and
                    allied technologies (such as analytics and machine
                    learning), industries can achieve a new automation layer and
                    with it create new revenue and business models.
                    <br />
                    <br />
                    IoT applications use machine learning algorithms to analyze
                    massive amounts of connected sensor data in the cloud. Using
                    real-time IoT dashboards and alerts, you gain visibility
                    into key performance indicators, statistics for mean time
                    between failures, and other information. Machine
                    learning–based algorithms can identify equipment anomalies
                    and send alerts to users and even trigger automated fixes or
                    proactive counter measures.
                  </p>

                  <br />
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "20%" }} className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                <img
                  width="80%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRur0PKiY1jPhtV73xbVO1pvrhrmiA2Oo1dOg&usqp=CAU"
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

export default S3;
