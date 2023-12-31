import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useHistory} from "react-router-dom";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  // console.log(children);
  // console.log(hasHiddenAuthButtons);
  const history = useHistory();
  const username = localStorage.getItem("username");
  const exploreHandler = () => {
    history.push("/");
  }

  const loginHandler = () => {
    history.push("/login");
  }

  const registerHandler = () => {
    history.push("/register");
  }

  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
    history.push("/")
  }

  if(username && username.length > 0){
    return(
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Stack direction="row" spacing={2}>
        <Avatar alt={username} src="avatar.png" />
        <p>{username}</p>
        <Button
          className="button"
          variant="contained"
          onClick={logoutHandler}
        >
          Logout
        </Button>
        </Stack>
      </Box>
    )
  }
    return (
      <div>
      {
        !hasHiddenAuthButtons ?
        (
        <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Stack direction="row" spacing={2}>
        <Button
          className="explore-button"
          variant="text"
          onClick={loginHandler}
        >
          Login
        </Button>
        <Button
          className="button"
          variant="contained"
          onClick={registerHandler}
        >
          Register
        </Button>
        </Stack>
      </Box>
        ) : (
        <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={exploreHandler}
        >
          Back to explore
        </Button>
        </Box>
        )
      }
      </div>
    );
};

export default Header;
