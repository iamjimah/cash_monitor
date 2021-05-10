import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CopyrightIcon from "@material-ui/icons/Copyright";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    marginTop:'45%',
    width: "auto",
    height: "140px",
    justifyContent: "space-between",
    background: "transparent",
  },
});

export function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        color="#000"
        label="COPYRIGHT 2021.ALL RIGHTS RESERVED. ELITE DEV LAB "
        icon={<CopyrightIcon fontSize="large" color="primary" />}
      />
      <BottomNavigationAction
        label="BUILT WITH ❤️ BY JIMAH"
        icon={<FavoriteIcon fontSize="large" color="primary" />}
      />
      <BottomNavigationAction
        label="XX-13952-7686 GHANA"
        icon={<LocationOnIcon fontSize="large" color="primary" />}
      />
      <BottomNavigationAction
        label="TEL: 0247869062/0207331450"
        icon={<PhoneIphoneIcon fontSize="large" color="primary" />}
      />
    </BottomNavigation>
  );
}
