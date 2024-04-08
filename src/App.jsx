import "./App.css";
import Home from "./components/sections/Home";
import Navbar from "./components/sections/Navbar";
import "@fortawesome/fontawesome-free/css/all.css";
import Service from "./components/sections/Service";
import About from "./components/sections/About";
import Service1 from "./components/sections/Service1";
import ServiceBanner from "./components/sections/ServiceBanner";
import Project from "./components/sections/Project";
import Client from "./components/sections/Client";
import Vedio from "./components/sections/Vedio";
import Testimonial from "./components/sections/Testimonial";
import { Route, Routes } from "react-router-dom";
import Hire from "./components/pages/hire_dev/Hire";
import HireDev from "./components/sections/HireDev";
import Schedule from "./components/pages/Schedule/Schedule";
import ContactPage from "./components/pages/Contact/ContactPage";
import Footer from "./components/sections/Footer/footer";
import LatestNews from "./components/sections/LatestNews";
import Faq from "./components/sections/Faq";
import DeveloperProfile from "./components/pages/devProfile/DeveloperProfile";
import Login from "../src/components/pages/Login/Login";
import DevInfo from "./components/pages/DevInfo/DevInfo";
import S1 from "./components/pages/ServicePage/S1";
import S2 from "./components/pages/ServicePage/S2";
import S3 from "./components/pages/ServicePage/S3";
import AddNews from "./components/pages/AddNews/addnew";
import SignUp from "./components/pages/SingUp/SingUp";
import Reset from "./components/pages/Reset-Password/Reset";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const isLogin = window.location.pathname === "/LOGIN";

  return (
    <>
      {!isLogin && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Service />
              <HireDev />
              <About />
              <Service1 />
              <ServiceBanner />
              <Project />
              <Client />
              <Vedio />
              <Testimonial />
              <Faq />
              <LatestNews />
            </>
          }
        ></Route>
        <Route path="/hire" element={<Hire />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="developerProfile" element={<DeveloperProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<Reset />} />

        <Route path="/devInfo/:id" element={<DevInfo />} />
        <Route path="s1" element={<S1 />} />
        <Route path="s2" element={<S2 />} />
        <Route path="s3" element={<S3 />} />
        <Route path="/addNews" element={<AddNews />} />
      </Routes>
      {!isLogin && <Footer />}
    </>
  );
}

export default App;
