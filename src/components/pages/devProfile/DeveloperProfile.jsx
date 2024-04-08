import { useState, useEffect } from "react";
import user1 from "../../../assets/img/rajat.jpeg";
import user2 from "../../../assets/img/kanika.jpg";
import user3 from "../../../assets/img/kalash.jpg";
import user4 from "../../../assets/img/inder.jpg";
import user5 from "../../../assets/img/prashant.jpeg";
import user6 from "../../../assets/img/nupurt.jpg";
import user7 from "../../../assets/img/manvendre.jpeg";
import user8 from "../../../assets/img/utsav.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../../../firebase-auth/auth";

function DeveloperProfile() {
  const [user, setUser] = useState("");

  useEffect(() => {
    database.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
      } else {
        setUser("");
      }
    });
  }, []);

  const navigate = useNavigate();
  const handleHireClick = (id) => {
    if (user) {
      navigate(`/devInfo/${id}`);
    } else {
      toast.warning("Please Login First", {
        position: "top-center",
      });
    }
  };

  const data = [
    {
      id: 1,
      name: "Rajat Jha",
      profile: "React js Developer",
      skills: ["Javascript", "React js", "Next js"],
      experince: "4+ years of Experience",
      education: "B.tech",
      email:"rajat@gmail.com",
      Image: user1,
    },
    {
      id: 2,
      name: "Kanika Tyagi",
      profile: "Java Developer",
      skills: ["Java", "Springboot"],
      experince: "1+ years of Experience",
      email:"kanikatyagioedt@gmail.com",
      education: "MBA",
      Image: user2,
    },
    {
      id: 3,
      name: "Kalash",
      profile: "React js Developer",
      skills: ["Javascript", "React js", "Next js"],
      experince: "3+ years of Experience",
      education: "B.tech",
      email:"kalashtyagi98@gmail.com",
      Image: user3,
    },
    {
      id: 4,
      name: "Inderjeet",
      profile: "Angular Developer",
      skills: ["Angular"],
      experince: "6+ years of Experience",
      email:"Inderjeet@gmail.com",
      education: "MBA",
      Image: user4,
    },
    {
      id: 5,
      name: "Prashant",
      profile: "React js Developer",
      skills: ["Javascript", "React js", "Next js"],
      experince: "5+ years of Experience",
      education: "MCA",
      email:"Prashant@gmail.com",
      Image: user5,
    },
    {
      id: 6,
      name: "Nupur",
      profile: "Angular Developer",
      skills: ["Angular"],
      experince: "5+ years of Experience",
      education: "MBA",
      email:"Nupur@gmail.com",
      Image: user6,
    },
    {
      id: 7,
      name: "Manvendra",
      profile: ".net Developer",
      skills: ["Python", "Seo", "AI", "ML"],
      experince: "4+ years of Experience",
      email:"Manvendra@gmail.com",
      Image: user7,
    },
    {
      id: 8,
      name: "Utsav",
      profile: ".net Developer",
      skills: ["MCV .Net", "C#", "MySql", "Ajax"],
      experince: "1+ years of Experience",
      education: "BCA",
      email:"Utsav@gmail.com",
      Image: user8,
    },
  ];

  localStorage.setItem("devInfo",JSON.stringify(data));

  

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "140px",
          marginBottom: "400px",
          justifyContent: "center",
          background: "linear-gradient(to right, #6a85b6, #bac8e0)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                height: "100%",
                border: "none",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                className="card-img-top"
                src={item.Image}
                alt={`${item.name} avatar`}
                style={{ width: "100%", height: "60%", padding: "10px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <p className="card-title">Profile: {item.profile}</p>
                {/* <p className="card-text">Skills: {item.skills.join(", ")}</p> */}
                <p className="card-text">Experience: {item.experince}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleHireClick(item.id)}
                >
                  Hire
                </button>
              </div>
            </div>
          ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default DeveloperProfile;
