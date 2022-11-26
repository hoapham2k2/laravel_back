import React, {useEffect, useState} from "react";

import { Card, Box, Typography, Input } from "@mui/material";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {useSelector} from 'react-redux'
import * as api from '../../apis'

function toBase64(arr) {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

export default function MyNFTInfo({ id, image, name, description, price, marketplaceContract, nftContract, account }) {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState('')

  const transNFT = async () => {
    await(await marketplaceContract.transItem(nftContract.address, id)).wait()
    const noti = {
      account_address: account,
      title: "Donate NFT to system",
      description: desc,
      isRead: false
    }
    await api.createNoti(noti)
    window.location.reload();
  }

  const handleClickOpen = () => {
    setOpen(true);
  
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Card>
      <Box sx={{ display: `flex`, padding: `10px` }}>
        <Box flex={1} sx={{ display: `flex`, alignItems: 'center'}}>
          <img
            src={`data:image/png;base64,${toBase64(image.buffer.data)}`}
            alt=""
            width={230}
            height={300}
            style={{borderRadius:'5px'}}
          />
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ padding: `10px` }}
          height={300}
        >
          <Box display="flex">
            <Box flex={1}>
              <Typography variant="title2" sx={{ fontWeight: `700` }}>
                Name
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography variant="title2">{name}</Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Box flex={1} sx={{marginTop: '15px'}}>
              <Typography variant="title2" sx={{ fontWeight: `700` }}>
                Description
              </Typography>
            </Box>
            <Box flex={1} sx={{height: '250px', overflow: "scroll", marginTop: '15px'}}>
              <Typography variant="title2">{description}</Typography>
            </Box>
            
          </Box>
          <Box flex={1}>
              <Button onClick={handleClickOpen}>Donate this NFT</Button>
            </Box>
          {/* <Box display="flex">
            <Box flex={1}>
              <Typography variant="title2" sx={{ fontWeight: `700` }}>
                Price
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography variant="title2">{price}</Typography>
            </Box>
          </Box> */}
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Transform NFT To System</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To transform NFT please enter short description and submit. We
            thank you for your contribution.
          </DialogContentText>
          <TextField
            margin="dense"
            label="NFT Name"
            value={name}
            fullWidth
            variant="standard"
            sx={{marginTop: "20px"}}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Short Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            fullWidth
            variant="standard"
            sx={{marginTop: "10px"}}
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={transNFT}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
