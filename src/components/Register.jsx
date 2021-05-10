import React, { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { ArrowForward } from "@material-ui/icons";
import { UsersContext } from "../context/usersContext";

function Register() {
  const history = useHistory();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  const { Register, userInfo } = useContext(UsersContext);

  const redirect = location.search ? location.search.split("=")[1] : "/signin";

  useEffect(() => {
    if (userInfo.username) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  function handlesubmit(e) {
    e.preventDefault();
    const newuser = {
      username,
      email,
      dob,
      password,
    };
    Register(newuser);
  }

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 480,
    background: "#fff",
  };
  const style = {
    display: "flex",
    margin: 0,
  };
  const cardStyle = {
    padding: 20,
    height: "70vh",
    width: 480,
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };
  const btnstyle = { margin: "8px 0" };
  const iconStyles = {
    marginLeft: "88%",
    marginTop: "30%",
    backgroundColor: "blue",
  };

  return (
    <Grid style={style} className="grid">
      <Paper style={cardStyle} id="register" onSubmit={handlesubmit}>
        <Typography variant="h4">WELCOME TO CASH MONITOR</Typography>
        <Avatar style={iconStyles}>
          <ArrowForward />
        </Avatar>
      </Paper>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>SIGN UP</h2>
        </Grid>
        <form>
          <TextField
            label="User Name"
            placeholder="Enter User Name"
            fullWidth
            required
            value={username}
            onChange={(text) => setUsername(text.target.value)}
          />
          <TextField
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
            value={email}
            onChange={(text) => setEmail(text.target.value)}
          />

          <TextField
            type="date"
            fullWidth
            required
            value={dob}
            onChange={(date) => setDob(date.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>

        <Typography>
          Already have an account?<Link to="/signin">Sign In</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Register;
