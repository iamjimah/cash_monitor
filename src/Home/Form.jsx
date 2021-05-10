import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "teal",
    height: "50vh",
    width: "30vw",
    overflow: "hidden",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  const iconStyle = {
    backGround: "green",
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <AccountCircleIcon style={iconStyle} fontSize="large" />

      <div>
        <Typography variant="h6">
          <p>Email:Jimmy@mail.com</p>
          <p>Username:Jimmy</p>
        </Typography>

        <Button type="submit" variant="contained" color="secondary">
          LOGOUT
        </Button>
      </div>
    </form>
  );
};

export default Form;
