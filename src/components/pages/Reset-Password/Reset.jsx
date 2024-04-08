import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { database} from "../../../firebase-auth/auth";

const defaultTheme = createTheme();

export default function Reset() {
  const navigate = useNavigate();
  const[email,setEmail]=useState("");
  const[disableButtton,setDisableButton]=useState(false);
 

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
 
  const onSubmit = async (data) => {
    console.log(data); 
   sendPasswordResetEmail(database,data.email)
   .then((data)=>{
       alert("check your mail");
       navigate("/");
   }).catch(error=>{
    alert(error.code);
   })
  
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              style={{width:'350px'}}
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
            <br />
            <span
              style={{
                position: "absolute",
                color: "red",
                fontSize: "14px",
                marginTop: "-12px",
              }}
            >
              {errors.email?.type === "required" && "Email is required"}
              {errors.email?.type === "pattern" && "Email is incorrect"}
            </span>
           
           
          
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Forget
            </Button>
         
          </Box>
        </Box>
        <ToastContainer position="top-center" />
      </Container>
    </ThemeProvider>
  );
}
