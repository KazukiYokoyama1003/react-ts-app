import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import "./dialog.sass";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="dialog-container"
      >
        <DialogTitle id="alert-dialog-title" className="MuiDialogTitle-root">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="MuiDialogContentText-root">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="MuiDialogActions-root">
          <Button onClick={handleClose} className="dialog-button disagree-button">Disagree</Button>
          <Button onClick={handleClose} className="dialog-button agree-button"autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
