import React, { useState, useEffect, useContext } from "react";
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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ArrowForward } from "@material-ui/icons";
import { UsersContext } from "../context/usersContext";

const Login = ({ history, location }) => {
  const { userLogin, userInfo } = useContext(UsersContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo.token) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };
    userLogin(userInfo);
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 480,
    background: "#dedede",
    borderRadius: "0px 0px 100px 0px ",
  };
  const style = {
    display: "flex",
    margin: 0,
  };
  const cardStyle = {
    padding: 20,
    height: "70vh",
    width: 480,
    borderRadius: "100px 0px 0px 0px",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };
  const btnstyle = { margin: "8px 0" };
  const iconStyles = {
    marginLeft: "88%",
    marginTop: "30%",
    backgroundColor: "Red",
  };
  return (
    <Grid style={style} className="grid">
      <Paper style={cardStyle} id="login" onSubmit={handleSubmit}>
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
          <h2>SIGN IN</h2>
        </Grid>
        <form>
          <TextField
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>
        <Typography>
          <Link to="">Forgot password ?</Link>
        </Typography>
        <Typography>
          Not Yet a User? <Link to="/signup">Sign Up</Link>
        </Typography>
        <Link to="/dashboard">GO HOME</Link>
      </Paper>
    </Grid>
  );
};

export default Login;
