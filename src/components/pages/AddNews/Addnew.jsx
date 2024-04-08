import React, { useState, useContext, useEffect } from "react";
import { Button, Paper, Typography, TextField } from "@mui/material";
import { NewsContext } from "../../../Context/NewsContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Grid } from "@mui/material";
import { FormControl } from "@mui/material";
import { database } from "../../../firebase-auth/auth";

import {
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import axios from "axios";

const AddNews = () => {
  const navigate = useNavigate();
  const { news, setNews } = useContext(NewsContext);
  const [newsInput, setNewsInput] = useState("");
  const [show, setShow] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);

  console.log("dlllldlke", selectedItems);
  useEffect(() => {
    database.onAuthStateChanged((user) => {
      if (user) {
        console.log("user", user);
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    setNewsInput(event.target.value);
  };

  const handleAddNews = async (e) => {
    e.preventDefault();
    if (newsInput === "") {
      toast.warning("Please enter the news");
      return;
    }

    try {
      const requestBody = {
        text: newsInput,
        addedBy: userName,
      };

      const response = await fetch(
        "http://usit-backend-dev.eba-xc6xkkgt.us-east-1.elasticbeanstalk.com/api/Dashboard",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      const result = await response.json();
      console.log("Response:", result);
      toast.success("News added successfully");
      setNewsInput("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Failed to add news. Please try again.");
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "http://usit-backend-dev.eba-xc6xkkgt.us-east-1.elasticbeanstalk.com/api/Dashboard"
        );
        const jsonData = await response.json();
        console.log("dataaaa", jsonData);
        setData(
          jsonData
            .filter((item) => item.addedBy === userName)
            .map((item) => ({ text: item.text, id: item.id }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchNews();
  }, [userName]);

  console.log("newss", data);

  const handleShow = () => {
    setSelectedItems([]);
    setShow(!show);
  };

  const handleDeleteNews = async () => {
    try {
      await Promise.all(
        id.map(async (itemId) => {
          await fetch(
            `http://usit-backend-dev.eba-xc6xkkgt.us-east-1.elasticbeanstalk.com/api/Dashboard/${itemId}`,
            {
              method: "DELETE",
            }
          );
        })
      );
      toast.success("News deleted successfully");
      // Fetch updated news after deletion
      setTimeout(() => {
        navigate("/");
      }, 2000);
      setSelectedItems([]);
      setShow(false);
    } catch (error) {
      toast.error("Failed to delete news. Please try again.");
    }
  };

  const storeId = (itemId) => {
    console.log("item", itemId);
    setId([...id, itemId]);
  };

  console.log("idsss", id);

  return (
    <div
      style={{
        padding: "20px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "100px",
        marginBottom: "200px",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          border: "2px solid #000",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4">News Heading / Quotes</Typography>
        <Typography variant="body1">
          <TextField
            label="Enter News"
            variant="outlined"
            multiline
            minRows={6}
            fullWidth
            value={newsInput}
            margin="normal"
            onChange={handleInputChange}
          />
        </Typography>
      </Paper>
      <Button variant="contained" color="primary" onClick={handleAddNews}>
        Add News
      </Button>
      &nbsp;
      {data.length > 0 && (
        <Button variant="contained" color="error" onClick={handleShow}>
          Delete News
        </Button>
      )}
      <br />
      <br />
      <div style={{ display: "flex" }}>
        {show && (
          <Grid item md={2} sx={2}>
            <FormControl style={{ width: "260px" }}>
              <InputLabel id="state-province-label">
                Select News to Delete
              </InputLabel>
              <Select
                required
                label="Select News to Delete"
                multiple // Enable multiple selection
                value={selectedItems}
                onChange={(event) => setSelectedItems(event.target.value)}
                renderValue={(selected) => selected.join(", ")}
                comma-separated
                string
              >
                {data &&
                  data.map((item) => (
                    <MenuItem
                      key={item.id}
                      value={item.text}
                      onClick={() => storeId(item.id)}
                    >
                      <Checkbox />
                      <ListItemText primary={item.text} />
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        {selectedItems.length > 0 && show && (
          <div style={{ marginLeft: "40px" }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteNews}
              style={{ cursor: "pointer" }}
            >
              Delete
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="success"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};
export default AddNews;
