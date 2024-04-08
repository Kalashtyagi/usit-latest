import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { database } from "../../../firebase-auth/auth";
// import axios from "axios";

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [disableButtton, setDisableButton] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setDisableButton(true);
    signInWithEmailAndPassword(database, data.email, data.password)
      .then((res) => {
        toast.success("Login Success");

        setDisableButton(false);
        console.log("res", res);
        navigate("/");
      })
      .catch((error) => {
        setDisableButton(false);
        toast.error(error.message);
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
              autoComplete="off"
              autoFocus
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
            <TextField
              margin="normal"
              name="password"
              label="Password"
              type="password"
              id="password"
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
                "Password length must be 4"}
              {errors.password?.type === "maxLength" &&
                "Password contains less than 20 character"}
            </span>

            <Link href="/resetPassword" variant="body2">
              Forgot password?
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid
                item
                xs
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Don't have an account?
                <Link href="/signUp" variant="body2">
                  Sign up
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
