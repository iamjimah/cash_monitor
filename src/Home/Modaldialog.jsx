import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Profile from "./Form";

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
     
      <Profile handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
