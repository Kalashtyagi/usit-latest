// import React, { useState, useRef, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import img from "../../../assets/img/img.jpg";
// import { Button } from "@mui/material";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(utc);
// dayjs.extend(timezone);

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   border: "none",
//   boxShadow: "none",
// }));

// export default function Schedule() {
//   const storedData = JSON.parse(sessionStorage.getItem("devInfoData"));
//   let loginData;

//   try {
//     loginData = JSON.parse(sessionStorage.getItem("user")) || {};
//   } catch (error) {
//     console.error("Error parsing login data:", error);
//     loginData = {};
//   }

//   const [show, setShow] = useState(!!storedData);

//   const [selectedDate, setSelectedDate] = useState(null);

//   const sendMail = () => {
//     if (selectedDate != null) {
//       const formattedTime = dayjs(selectedDate)
//         .tz("Asia/Kolkata")
//         .format("YYYY-MM-DDTHH:mm:ssZ");
//       const startTime = dayjs(selectedDate)
//         .tz("Asia/Kolkata")
//         .format("YYYY-MM-DDTHH:mm:ss-07:00");
//       const endTime = dayjs(selectedDate)
//         .tz("Asia/Kolkata")
//         .add(1, "hour")
//         .format("YYYY-MM-DDTHH:mm:ss-07:00");
//       console.log("ft", formattedTime);

//       const subject = "Developer Hiring Meeting";
//       const mail = "tyagiaksh518@gmail.com";
//       const mail2 = "kalashtyagi98@gmail.com";

//       const url = `https://script.google.com/macros/s/AKfycbw-4zpu0vD0rUomxWQJvHpylU1dYWRXP_lct72lTU3yZTbDoegVVBK-76b6nzcKM92IDA/exec?subject=${subject}&startTime=${startTime}&endTime=${endTime}&attendees=${mail},${mail2}`;
//       console.log(loginData?.email);

//       window.open(url, "_blank");

//       toast.success(`Your meeting has been scheduled on ${formattedTime}`);
//       setTimeout(() => {
//         setSelectedDate(null);
//       }, 500);

//       sessionStorage.removeItem("devInfoData");
//       setShow(false);
//     } else {
//       toast.error("Please select date and time");
//     }
//   };

//   console.log("selectedDate", selectedDate);

//   return (
//     <Box style={{ marginTop: "120px" }} sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={8} md={12}>
//           <Item>
//             <h3>Awesome! Let’s find some time for you and us to chat.</h3>
//             <p>
//               We will reach out to you shortly. If you would like to speak with
//               us immediately, please schedule a call here
//             </p>
//             {storedData?.name !== null && (
//               <p>
//                 <b>{storedData && storedData?.name}</b>, Email Address -{" "}
//                 <b>{storedData && storedData?.email}</b>
//               </p>
//             )}
//           </Item>
//         </Grid>
//       </Grid>
//       <Grid style={{ margin: "8px" }} container spacing={2}>
//         <Grid item md={5} xs={8}>
//           <Item>
//             <img className="rounded" src={img} alt="profile" />
//           </Item>
//         </Grid>
//         <Grid item md={3} xs={8}>
//           <Item>
//             <h1>Schedule your meet</h1>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DemoContainer components={["DateTimePicker"]}>
//                 <DateTimePicker
//                   label="Meeting Date and Time"
//                   name="message"
//                   value={selectedDate}
//                   onChange={(newValue) => setSelectedDate(newValue)}
//                 />
//               </DemoContainer>
//             </LocalizationProvider>
//             <Button
//               style={{ marginTop: "9px" }}
//               marginTop
//               color="success"
//               variant="contained"
//               type="submit"
//               onClick={sendMail}
//             >
//               Schedule Meeting
//             </Button>
//           </Item>
//         </Grid>
//       </Grid>

//       <ToastContainer position="top-center" />
//     </Box>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img from "../../../assets/img/img.jpg";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
}));

export default function Schedule() {
  const storedData = JSON.parse(sessionStorage.getItem("devInfoData"));
  let loginData;

  try {
    loginData = JSON.parse(sessionStorage.getItem("user")) || {};
  } catch (error) {
    console.error("Error parsing login data:", error);
    loginData = {};
  }

  const [show, setShow] = useState(!!storedData);

  const [selectedDate, setSelectedDate] = useState(null);

  const sendMail = () => {
    if (selectedDate != null) {
      const formattedTime = dayjs(selectedDate)
        .tz("Asia/Kolkata")
        .format("YYYY-MM-DDTHH:mm:ssZ");
      const startTime = dayjs(selectedDate)
        .tz("Asia/Kolkata")
        .format("YYYY-MM-DDTHH:mm:ss-07:00");
      const endTime = dayjs(selectedDate)
        .tz("Asia/Kolkata")
        .add(1, "hour")
        .format("YYYY-MM-DDTHH:mm:ss-07:00");
      console.log("ft", formattedTime);

      const subject = "Developer Hiring Meeting";
      const mail = "tyagiaksh518@gmail.com";
      const mail2 = "kalashtyagi98@gmail.com";

      const url = `https://script.google.com/macros/s/AKfycbw-4zpu0vD0rUomxWQJvHpylU1dYWRXP_lct72lTU3yZTbDoegVVBK-76b6nzcKM92IDA/exec?subject=${subject}&startTime=${startTime}&endTime=${endTime}&attendees=${storedData?.email},${loginData?.email}`;
      console.log("lll", loginData?.email);
      console.log("ss", storedData?.email);

      window.open(url, "_blank");

      toast.success(`Your meeting has been scheduled on ${formattedTime}`);
      setTimeout(() => {
        setSelectedDate(null);
      }, 500);

      sessionStorage.removeItem("devInfoData");
      setShow(false);
    } else {
      toast.error("Please select date and time");
    }
  };

  console.log("selectedDate", selectedDate);

  return (
    <Box style={{ marginTop: "120px" }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} md={12}>
          <Item>
            <h3>Awesome! Let’s find some time for you and us to chat.</h3>
            <p>
              We will reach out to you shortly. If you would like to speak with
              us immediately, please schedule a call here
            </p>
            {storedData?.name !== null && (
              <p>
                <b>{storedData && storedData?.name}</b>, Email Address -{" "}
                <b>{storedData && storedData?.email}</b>
              </p>
            )}
          </Item>
        </Grid>
      </Grid>
      <Grid style={{ margin: "8px" }} container spacing={2}>
        <Grid item md={5} xs={8}>
          <Item>
            <img className="rounded" src={img} alt="profile" />
          </Item>
        </Grid>
        <Grid item md={3} xs={8}>
          <Item>
            <h1>Schedule your meet</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Meeting Date and Time"
                  name="message"
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <Button
              style={{ marginTop: "9px" }}
              marginTop
              color="success"
              variant="contained"
              type="submit"
              onClick={sendMail}
            >
              Schedule Meeting
            </Button>
          </Item>
        </Grid>
      </Grid>

      <ToastContainer position="top-center" />
    </Box>
  );
}
