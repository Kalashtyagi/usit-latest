import React from "react";
import faq1 from "../../assets/img/faq1-1.jpg";
import { useState } from "react";

export default function Faq() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const showw3 = () => {
    setShow1(false);
    setShow2(false);
    setShow4(false);
    setShow3(!show3);
  };
  const showw4 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(!show4);
  };
  const showw2 = () => {
    setShow1(false);
    setShow4(false);
    setShow3(false);
    setShow2(!show2);
  };
  const showw1 = () => {
    setShow2(false);
    setShow4(false);
    setShow3(false);
    setShow1(!show1);
  };
  return (
    <>
      <section className="faqs-section">
        <div className="auto-container">
          <div className="row">
            <div
              className="faq-column col-lg-6"
              data-wow-delay="400ms"
              //  style="visibility: hidden; animation-delay: 400ms; animation-name: none;"
            >
              <div className="inner-column">
                <div className="sec-title">
                  {" "}
                  <span className="sub-title">
                    QUESTIONS &amp; ANSWERS ::::::
                  </span>
                  <h2>
                    Frequently Asked <br />
                    Questions For You
                  </h2>
                </div>
                <ul className="accordion-box">
                  <li className="accordion block " onClick={showw1}>
                    <div className={show1 ? "acc-btn active" : "acc-btn"}>
                      Is my technology allowed on tech?{" "}
                      <i className="icon fa fa-angle-right"></i>{" "}
                    </div>
                    <div
                      className={show1 ? "acc-content current" : "acc-content"}
                    >
                      <div className="content">
                        <div className="text">
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable.
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="accordion block" onClick={showw2}>
                    <div className={show2 ? "acc-btn active" : "acc-btn"}>
                      How to soft launch your business?{" "}
                      <i
                        className="icon fa fa-angle-right"
                        onClick={showw2}
                      ></i>{" "}
                    </div>
                    <div
                      className={show2 ? "acc-content current" : "acc-content"}
                    >
                      <div className="content">
                        <div className="text">
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable.
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="accordion block " onClick={showw3}>
                    <div className={show3 ? "acc-btn active" : "acc-btn"}>
                      How to turn visitors into contributors{" "}
                      <i
                        className="icon fa fa-angle-right"
                        onClick={showw3}
                      ></i>{" "}
                    </div>
                    <div
                      className={show3 ? "acc-content current" : "acc-content"}
                    >
                      <div className="content">
                        <div className="text">
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable.
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="accordion block" onClick={showw4}>
                    <div className={show4 ? "acc-btn active" : "acc-btn"}>
                      How can i find my solutions?{" "}
                      <i
                        className="icon fa fa-angle-right"
                        onClick={showw4}
                      ></i>{" "}
                    </div>
                    <div
                      className={show4 ? "acc-content current" : "acc-content"}
                    >
                      <div className="content">
                        <div className="text">
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="image-column col-lg-6 wow fadeInUp"
              // data-wow-delay="600ms" style="visibility: hidden; animation-delay: 600ms; animation-name: none;"
            >
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src={faq1} alt="" />
                  </figure>
                  <div className="exp-box bounce-y">
                    {" "}
                    <i className="flaticon-chat"></i>
                    <h6 className="title">Top Quality Marketing Solution</h6>
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
