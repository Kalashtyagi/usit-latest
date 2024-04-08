import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DevInfo() {
  const { id } = useParams();
  console.log(id);

  

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState("");
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://mocki.io/v1/3a35884c-b300-4bf3-8379-ba25c3d844a1"
  //     );
  //     const result = await response.json();
  //     setData(result.developers);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [id]);
  // console.log("data", data);

  const storedDevInfo = localStorage.getItem("devInfo");
  
  if(storedDevInfo){
    var devInfoData = JSON.parse(storedDevInfo);
    console.log("devInfo",devInfoData);
  }else{
    console.log("No localstorage data is found");

  }

  useEffect(() => {
    const fill = devInfoData.length > 0 ? devInfoData.filter((item) => item.id == id) : [];
    setFilterData(fill);

    console.log("fill", filterData);
  }, [id]);

  useEffect(() => {
    if (filterData && filterData.length > 0) {
      sessionStorage.setItem("devInfoData", JSON.stringify(filterData[0]));
    }
  }, [filterData]);

  return (
    <>
      <section
        style={{
          backgroundColor: "#eee",
          marginTop: "70px",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          // minHeight: "100vh",
        }}
      >
        <div className="py-5">
          <div className="row">
            <div className="col">
              <div
                className="card mb-4"
                style={{ padding: "50px 140px 20px 140px" }}
              >
                <div className="card-body text-center">
                  <img
                    src="https://static-00.iconduck.com/assets.00/web-developer-illustration-2005x2048-fal2biag.png"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "200px" }}
                  />
                  <h3 className="my-3">{`Name: ${filterData[0]?.name}`}</h3>
                  <h4 className=" mb-3">{`Profile: ${filterData[0]?.profile}`}</h4>
                  <h4 className=" mb-3">{`Experience: ${filterData[0]?.experince}`}</h4>

                  <h4 className=" mb-3">
                    {Array.isArray(filterData[0]?.skills) ? (
                      <h4>{`Skills:${filterData[0]?.skills.join(",")}`}</h4>
                    ) : (
                      <h4>No skills available</h4>
                    )}
                  </h4>
                  <h4 className="  mb-3">{`Email: ${filterData[0]?.email}`}</h4>
                  <h4 className=" mb-3">Mobile Number: 8976543456</h4>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Link to="/schedule">
                  <Button variant="contained" color="success">
                    Continue
                  </Button>{" "}
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DevInfo;
