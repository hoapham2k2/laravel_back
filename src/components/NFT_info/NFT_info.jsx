import React, { useEffect, useState } from "react";

import { Button, Card, Box, Typography, Input } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useSelector } from "react-redux";
import * as api from "../../apis";

import styled from "@emotion/styled";

function toBase64(arr) {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

export default function MyNFTInfo({
  id,
  image,
  name,
  description,
  price,
  marketplaceContract,
  nftContract,
  account,
}) {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  const transNFT = async () => {
    await (await marketplaceContract.transItem(nftContract.address, id)).wait();
    const noti = {
      account_address: account,
      title: "Donate NFT to system",
      description: desc,
      isRead: false,
    };
    await api.createNoti(noti);
    await window.location.reload();
    await handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDesc("");
  };

  const NFTItemStyled = styled(Card)`
    width: 300px;

    .cardContainer {
      display: flex;
      flex-direction: column;
      .cardImg {
        width: 100%;
        height: 300px;
        overflow: hidden;

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          &:hover {
            transform: scale(1.1);
            transition: all 0.5s ease;
          }
        }
      }

      .cardContent {
        padding: 20px;
        display: flex;
        flex-direction: column;

        .cardContent_header {
          width: 100%;
          display: flex;

          .contentLeft {
            flex: 1;
            display: flex;
            flex-direction: column;

            .title {
              width: 150px;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 1rem;
              text-transform: uppercase;
              letter-spacing: 5px;
              font-weight: 700;
            }
          }
          .contentRight {
            align-self: center;
            .price {
              width: 100%;
              text-overfow: ellipsis;
              font-size: 1.5rem;
              font-weight: 700;
              text-transform: uppercase;
            }
          }
        }

        .cardButton {
          color: lightgreen;
          font-size: 1.2rem;
          text-transform: uppercase;
          font-weight: 700;

          &:hover {
            background-color: lightgreen;
            color: white;
          }
        }
      }
    }
  `;

  return (
    <NFTItemStyled>
      <Box className="cardContainer">
        <Box className="cardImg">
          <img
            className="img"
            src={`data:image/png;base64,${toBase64(image.buffer.data)}`}
            alt="nft_img"
          />
        </Box>
        <Box className="cardContent">
          <Box className="cardContent_header">
            <Box className="contentLeft">
              <Typography className="id">#{id}</Typography>
              <Typography className="title" gutterBottom>
                {name}
              </Typography>
            </Box>
            <Box className="contentRight">
              <Typography className="price">{price} ETH</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              className="cardButton"
              variant="outlined"
              fullWidth
              onClick={handleClickOpen}
            >
              Donate this NFT
            </Button>
          </Box>
        </Box>

        {/* the dialog will appear when we click button donate */}
        <Dialog keepMounted open={open} onClose={handleClose}>
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
              sx={{ marginTop: "20px" }}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Short Description"
              value={description}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              fullWidth
              variant="standard"
              sx={{ marginTop: "10px" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={transNFT}>Submit</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </NFTItemStyled>
  );
}
