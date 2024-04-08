import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { database } from "../../firebase-auth/auth";
// import { auth } from "../../firebase-auth/auth";
import { signOut } from "firebase/auth";
import { DataArray } from "@mui/icons-material";

export default function Navbar() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  sessionStorage.setItem("user", JSON.stringify(user));
  console.log("user", user);

  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [home, setHome] = useState(false);
  const [page, setPage] = useState(false);
  const [project, setProject] = useState(false);
  const [team, setTeam] = useState(false);
  const [service, setService] = useState(false);
  const [shop, setShop] = useState(false);
  const [news, setNews] = useState(false);
  const [name, setName] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
    setHome(false);
    setPage(false);
    setProject(false);
    setTeam(false);
    setNews(false);
    setShop(false);
  };
  const navigate = useNavigate();
  const openHire = () => {
    navigate("/developerProfile");
    setMobileMenuVisible(false);
  };
  useEffect(() => {
    database.onAuthStateChanged((user) => {
      if (user) {
        console.log("user", user);
        setName(user.displayName ?? "Profile");
      } else {
        setName("");
      }
    });
  }, []);
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      signOut(database)
        .then((res) => {
          console.log("Logout successful", res);
        })
        .catch((error) => {
          console.error("Error logging out", error);
        });
    }
  };
  return (
    <body className={isMobileMenuVisible ? "mobile-menu-visible" : ""}>
      <div className="page-wrapper">
        {/* <!-- Main Header-->  */}
        <header className="fixed-top main-header header-style-one">
          <div className="logo-box">
            <div className="logo">
              {/* <Link to="/"> */}
              <a href="/">
                <img src={logo} height={10} width={100} alt="" />
              </a>
              {/* </Link> */}
            </div>
          </div>

          <div className="header-lower">
            {/* <!-- Main box --> */}
            <div className="main-box">
              {/* <!--Nav Box--> */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
                    <li className="current dropdown">
                      {" "}
                      {/* <Link to="/"> */}
                      <a href="/">Home</a>
                      {/* <div className="dropdown-btn">
                        <i className="fa fa-angle-down"></i>
                      </div> */}
                    </li>

                    <li className="dropdown">
                      {" "}
                      <a href="#services">Services</a>
                      <ul
                        style={{
                          // position: "absolute",
                          top: "100%",
                          left: 0,
                          display: "none",
                          zIndex: 999,
                        }}
                      >
                        <li>
                          <a href="/s1">Data Engineering</a>
                        </li>
                        {/* <li>
                          <a href="">AI/ML</a>
                        </li>
                        <li>
                          <a href="">5G</a>
                        </li> */}
                        <li>
                          <a href="s2">Blockchain</a>
                        </li>
                        <li>
                          <a href="s3">IoT</a>
                        </li>
                        {/* <li>
                          <a href="">Metaverse</a>
                        </li> */}
                      </ul>
                      <div className="dropdown-btn">
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </li>

                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    {name && (
                      <li>
                        <a href="/addNews">Add News</a>
                      </li>
                    )}
                  </ul>
                </nav>
                {/* <!-- Main Menu End-->  */}
              </div>
              <div className="btn" style={{ marginRight: "100px" }}>
                {" "}
                <a href="/developerProfile" className="theme-btn">
                  Hire Consultants
                </a>{" "}
              </div>
              <div className="outer-box">
                {" "}
                <a
                  style={{ textDecoration: "none" }}
                  href="tel:123456789"
                  className="content-btn"
                >
                  {" "}
                  <i className="fa-solid fa-phone"></i>{" "}
                  <span>Call Anytime</span>
                  <h6
                    style={{ textDecoration: "none", marginTop: "2px" }}
                    className="title"
                  >
                    3129074952
                  </h6>
                </a>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    float: "right",
                    textAlign: "center",
                  }}
                >
                  {/* {isAuthenticated ? (
                    <div className="your-container-class">
                      <button
                        onClick={() => logout()}
                        className="your-button-class"
                        title="Logout"
                      >
                        <img
                        src={user.picture}
                          width={50}
                          height={50}
                          style={{ borderRadius: "50px" }}
                        />{" "}
                        {user ? user.name : "User"}
                      </button>
                    </div>
                  ) : (
                    <div className="your-container-class">
                      <button
                        onClick={() => loginWithRedirect()}
                        className="your-button-class"
                        title="Login"
                      >
                        <i className="fa fa-user"></i> Login
                      </button>
                    </div>
                  )} */}
                  {name ? (
                    <div className="your-container-class">
                      <button
                        className="your-button-class"
                        title="Log out"
                        onClick={handleLogout}
                      >
                        <i className="fa fa-user"></i>
                        {name}
                      </button>
                    </div>
                  ) : (
                    <div className="your-container-class">
                      <button
                        onClick={() => navigate("/logIn")}
                        className="your-button-class"
                        title="Login"
                      >
                        <i className="fa fa-user"></i>Login
                      </button>
                    </div>
                  )}
                  {/* <div className="your-container-class">
                      <button
                        onClick={() => navigate("/logIn")}
                        className="your-button-class"
                        title="Login"
                      >
                        <i className="fa fa-user"></i> Login
                      </button>
                    </div> */}
                </div>
                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                  {" "}
                  <i
                    style={{ color: "#f09a6b" }}
                    className="fa fa-bars"
                  ></i>{" "}
                </div>
              </div>
            </div>
            {/* <!-- Mobile Menu  -->  */}
          </div>
          <div className="mobile-menu">
            <div className="menu-backdrop"></div>

            <nav className="menu-box">
              <div className="upper-box">
                <div className="nav-logo">
                  <a href="">
                    <img src={logo} width={100} height={50} alt="" title="" />
                  </a>
                </div>
                <div
                  onClick={openHire}
                  style={{
                    border: "2px solid grey",
                    backgroundColor: "black",
                    padding: "2px",
                    cursor: "pointer",
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <button style={{ color: "white", backgroundColor: "black" }}>
                    Hire
                  </button>
                </div>
                <div className="close-btn" onClick={toggleMobileMenu}>
                  <i className="icon fa fa-times"></i>
                </div>
              </div>
              <ul className="navigation clearfix">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current dropdown">
                  {" "}
                  <a href="/">Services</a>
                  <ul style={{ display: home ? "block" : "none" }}>
                    <li>
                      <a href="/s1">Data Engineering</a>
                    </li>

                    <li>
                      <a href="/s2">Blockchain</a>
                    </li>
                    <li>
                      <a href="/s3">IoT</a>
                    </li>
                  </ul>
                  <div
                    className={home ? "dropdown-btn active" : "dropdown-btn"}
                    onClick={() => setHome(!home)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </div>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                {name && (
                  <li>
                    <a href="/addNews">Add News</a>
                  </li>
                )}
              </ul>
              <ul className="contact-list-one">
                <li>
                  <div className="contact-info-box">
                    {" "}
                    <i className="icon lnr-icon-phone-handset"></i>{" "}
                    <span className="title">Call Now</span>{" "}
                    <a href="#">3129074952</a>{" "}
                  </div>
                </li>
                <li>
                  <div className="contact-info-box">
                    {" "}
                    <span className="icon lnr-icon-envelope1"></span>{" "}
                    <span className="title">Send Email</span>{" "}
                    <a href="mailto:help@company.com">contact@usitsource.com</a>{" "}
                  </div>
                </li>
                <li>
                  {/* <div className="contact-info-box">
                    {" "}
                    <span className="icon lnr-icon-clock"></span>{" "}
                    <span className="title">Send Email</span> Mon - Sat 8:00 -
                    6:30, Sunday - CLOSED{" "}
                  </div> */}
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* <!--End Main Header --> */}
      </div>
    </body>
  );
}
