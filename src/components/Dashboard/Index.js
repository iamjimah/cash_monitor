import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../Details/styles";
import DetailsCard from "../Details/Details";
import Main from "../Main/Main";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.grid}
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={4} className={classes.mobile}>
        <DetailsCard title="Income" />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.main}>
        <Main />
      </Grid>

      <Grid item xs={12} sm={4} className={classes.last}>
        <DetailsCard title="Expense" />
      </Grid>
    </Grid>
  );
};

export default Home;
