import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { database } from "../../../firebase-auth/auth";
// import axios from "axios";

const defaultTheme = createTheme();

export default function SignUp() {
  const [disableButtton, setDisableButton] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setDisableButton(true);
    createUserWithEmailAndPassword(database, data.email, data.password)
      .then((res) => {
        setDisableButton(false);
        const user = res.user;
        updateProfile(user, {
          displayName: data.name,
        });
        toast.success("SignUp Successfully");
        navigate("/login");
        reset();
      })
      .catch((error) => {
        setDisableButton(false);
        toast.error(error.message);
        reset();
        console.log("err", error.message);
      });
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
            SignIn
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="text"
              autoFocus
              {...register("name", {
                required: true,
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
              {errors.name?.type === "required" && "Name is required"}
            </span>
            <TextField
              margin="normal"
              label="Email"
              type="email"
              id="email"
              autoFocus
              style={{ width: "400px" }}
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
              {errors.email?.type === "required" && "Email is not valid"}
            </span>
            <TextField
              margin="normal"
              label="Password"
              type="password"
              id="password"
              autoFocus
              style={{ width: "400px" }}
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
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
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "minLength" &&
                "Password length must be 6"}
              {errors.password?.type === "maxLength" &&
                "Password contains less than 20 character"}
            </span>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disableButtton}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid
                item
                xs
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Already have an account?
                <Link href="/logIn" variant="body2">
                  LogIn
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ToastContainer position="top-center" />
      </Container>
    </ThemeProvider>
  );
}
