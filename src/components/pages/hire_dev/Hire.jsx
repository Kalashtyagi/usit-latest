import React, { useState, useEffect } from "react";
import technologiesData from "./tech.json";
import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EmailContext } from "../Context/ContextMail";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const Hire = () => {
  const [showAll, setShowAll] = useState(false);
  const initialToShow = 18;
  const [itemToShow, setItemsToShow] = useState(initialToShow);
  const [selectedTech, setSelectedTech] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { updateUserData } = useContext(EmailContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  const navigate = useNavigate();

  const changeItems = () => {
    setShowAll(!showAll);
    setItemsToShow(showAll ? initialToShow : technologiesData.techList.length);
  };

  const onSubmit = (data) => {
    const { name, email } = data;
    updateUserData({
      name: name,
      email: email,
    });
    navigate("/schedule");
    console.log(data);
  };

  const handleTechSelect = (techName) => {
    const isSelected = selectedTech.includes(techName);
    if (isSelected) {
      const updatedTech = selectedTech.filter((tech) => tech !== techName);
      setSelectedTech(updatedTech);
    } else {
      setSelectedTech([...selectedTech, techName]);
    }
  };

  const renderTechItems = technologiesData.techList
    .slice(0, itemToShow)
    .map((tech, index) => (
      <div
        key={index}
        style={{
          textAlign: "center",
          display: "flex",
          cursor: "pointer",
          backgroundColor: selectedTech.includes(tech.name)
            ? "#E5E4E2"
            : "initial",
        }}
        onClick={() => handleTechSelect(tech.name)}
      >
        <img
          src={tech.image}
          alt={tech.name}
          style={{ width: "30px", height: "30px" }}
        />
        <p>{tech.name}</p>
      </div>
    ));

  const handleRemoveTech = (techName) => {
    const updatedTech = selectedTech.filter((tech) => tech !== techName);
    setSelectedTech(updatedTech);
  };

  const renderSelectedTech = selectedTech.map((tech, index) => (
    <div
      key={index}
      style={{
        display: "inline-block",
        margin: "5px",
        border: "1px solid #ccc",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      {tech}
      <span
        style={{
          cursor: "pointer",
          marginLeft: "5px",
          color: "blue",
        }}
        onClick={() => handleRemoveTech(tech)}
      >
        X
      </span>
    </div>
  ));

  return (
    <div style={{ marginLeft: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 style={{ marginTop: "150px", marginBottom: "25px" }}>
          {technologiesData.heading}
        </h2>
        <p>Select at least one skill.</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "10px",
          }}
        >
          {renderTechItems}
        </div>
        <p
          onClick={changeItems}
          style={{
            marginLeft: "5px",
            color: "#f09a6b",
            cursor: "pointer",
          }}
        >
          {!showAll ? "Show more" : "Show less"}
        </p>
        <TextField
          className="fullWidth"
          style={{ marginLeft: "15px", cursor: "pointer" }}
          size="small"
          label="Select Skills..."
          // required
          value={selectedTech.join(",")}
          // value={selectedTech.length > 0 ? selectedTech.join(", ") + " *" : ""}

          multiline
          InputProps={{
            readOnly: true,
            endAdornment:
              selectedTech.length > 0 ? (
                <span
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => setSelectedTech([])}
                >
                  Clear
                </span>
              ) : null,
          }}
          error={Boolean(errors.skill)}
          {...register("skill", { required: true })}
        ></TextField>
        {/* <Select
          className="fullWidth"
          style={{ marginLeft: "15px", cursor: "pointer" }}
          multiple
          displayEmpty
          value={selectedTech}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          error={Boolean(errors.skill)}
        >
          <MenuItem disabled value="">
            <em>Select Skills</em>
          </MenuItem>
          {selectedTechOptions.map((skill) => (
            <MenuItem key={skill} value={skill}>
              {skill}
            </MenuItem>
          ))}
        </Select> */}
        {errors.skill && selectedTech.length === 0 && (
          <span
            className="text-danger"
            style={{ position: "absolute", marginLeft: "14px" }}
          >
            One skill is required
          </span>
        )}
        <br />

        <Typography style={{ margin: "30px 0px 5px 15px" }}></Typography>
        <TextField
          className="fullWidth"
          style={{ marginLeft: "15px" }}
          size="small"
          placeholder="Enter your name"
          label="Name"
          id="name"
          type="text"
          error={Boolean(errors.name)}
          // onChange={handleNameChange}
          {...register("name", { required: true })}
        ></TextField>
        <br />
        <span
          className="text-danger"
          style={{ position: "absolute", marginLeft: "14px" }}
        >
          {errors.name?.type === "required" && "Name is Required"}
        </span>
        <br />

        <Grid container spacing={0.5}>
          <Grid item xs={11} md={3.1}>
            <Item>
              <TextField
                style={{ width: "100%", marginLeft: "9px" }}
                size="small"
                placeholder="Enter your email"
                label="Work Email"
                type="email"
                error={Boolean(errors.email)}
                // onChange={handleEmailChange}
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              ></TextField>
            </Item>
            <span
              className="text-danger"
              style={{
                position: "absolute",
                marginLeft: "14px",
                marginTop: "-9px",
              }}
            >
              {errors.email?.type === "required" && "Email is required"}
            </span>
            <span
              className="text-danger"
              style={{
                position: "absolute",
                marginLeft: "14px",
                marginTop: "-9px",
              }}
            >
              {errors.email?.type === "pattern" && "Email  is incorrect"}
            </span>
          </Grid>
          <Grid item xs={11} md={3}>
            <Item>
              <TextField
                style={{ width: "100%", marginLeft: "10px" }}
                size="small"
                label="Phone no"
                placeholder="Enter your contact number"
                type="number"
                error={Boolean(errors.number)}
                {...register("number", {
                  required: true,
                  pattern: {
                    value: /^[0-9]{10}$/,
                  },
                })}
              ></TextField>
            </Item>
            <span
              className="text-danger"
              style={{
                position: "absolute",
                marginLeft: "14px",
                marginTop: "-7px",
              }}
            >
              {errors.number?.type === "required" && "Number is required"}
            </span>
            <span
              className="text-danger"
              style={{
                position: "absolute",
                marginLeft: "14px",
                marginTop: "-7px",
              }}
            >
              {errors.number?.type === "pattern" && "Number is invalid"}
            </span>
          </Grid>
        </Grid>

        <Button
          type="submit"
          style={{ margin: "30px 0 0 10px" }}
          variant="contained"
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default Hire;
