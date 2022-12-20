import React from 'react'

import {
  Button,
  Card,
  CssBaseline,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Box,
} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export function AlertLoading({text}) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") 
        return;
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick 
      >
        <DialogTitle id="alert-dialog-title" align='center'>
          In Progress
        </DialogTitle>
          <Typography align='center'>{text}</Typography>
        <Box sx={{padding: '50px 100px 80px 100px'}}>
          <CircularProgress />
        </Box>
      </Dialog>
    </div>
  );
}

export default AlertLoading