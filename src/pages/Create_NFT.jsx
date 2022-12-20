import styled from "@emotion/styled";
import {
  Button,
  Card,
  CssBaseline,
  TextField,
  Typography,
  Alert,
  CircularProgress
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DropButton from "../components/DropButton";
import { ethers } from "ethers";
import { Buffer } from "buffer";
import { pinJSONToIPFS } from "../utils/pinata.js";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AlertLoading from '../components/AlertLoading'

const StyledCreateNFTPages = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;
`;

export function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm create NFT?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Confirm and click submit button again to mint your NFT. We thanks for your contributor.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// export function AlertLoading({stepTxt}) {
//   const [open, setOpen] = React.useState(true);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title" align='center'>
//           Minting NFT
//         </DialogTitle>
//           <Typography align='center'>{stepTxt}</Typography>
//         <Box sx={{padding: '50px 100px 80px 100px'}}>
//           <CircularProgress />
//         </Box>
//       </Dialog>
//     </div>
//   );
// }

const Create_NFT = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [buffer, setBuffer] = useState();
  const [loading, setLoading] = useState(false);
  const [cnt, setCnt] = useState(0);
  const [stepTxt, setStepTxt] = useState('Step 0/3')
  const { nftContract, marketplaceContract } = useSelector(
    (state) => state.solidity
  );
  const history = useHistory()

   const createNFT = async () => {
    if (!image || !name || !description) return;
    setCnt((prev)=>{return prev==2? 0 : prev+1});
    try {
      // var f = new File([""], "filename.txt", {type: "text/plain",lastModified: '101010'})
      //console.log(f)
      //console.log(image)
      const sample = {};
      sample.name = image.name;
      const reader = new window.FileReader(); //Interface FileReader trong Javascript được thiết kế để đọc các nguồn dữ liệu trên máy tính của người dùng.
      reader.readAsArrayBuffer(image);  // readAsArrayBuffer(blob) – reading data in binary format ArrayBuffer.

      reader.onloadend = () => {
        setBuffer({ buffer: Buffer(reader.result) });
        console.log("buffer", buffer);
      };

      if (buffer === null ||  buffer == undefined) { 
        return;
      }
      setLoading(true);
      const metadata = {};
      metadata.name = name;
      metadata.image = buffer;
      metadata.description = description;

      const pinataResponse1 = await pinJSONToIPFS(metadata);

      if (!pinataResponse1.success) {
        return {
          success: false,
          status: "Something went wrong while uploading your tokenURI.",
        };
      }
      const tokenURI = pinataResponse1.pinataUrl;
      console.log('token uri', tokenURI)
      
      mintThenList(tokenURI);
    } catch (error) {
      console.log("ipfs uri upload error: ", error);
    }
  };
  const mintThenList = async (result) => {
    const uri = result;
    console.log(uri);
   
    try {
      setStepTxt('Step 1/3')
      await(await nftContract.mint(uri)).wait()
    // get tokenId of new nft 
    const id = await nftContract.tokenCount()
    // approve marketplace to spend nft
    setStepTxt('Step 2/3')
    await(await nftContract.setApprovalForAll(marketplaceContract.address, true)).wait()
    // add nft to marketplace
    // const listingPrice = ethers.utils.parseEther(price.toString())
    setStepTxt('Step 3/3')
    await(await marketplaceContract.makeItem(nftContract.address, id)).wait()
    console.log('item count: ',marketplaceContract.itemCount())
    setLoading(false)
    window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <StyledCreateNFTPages className="createNFT_pages">
      {/* this is a box to contain all component  */}

      {/* Cssbaseline */}
      <CssBaseline />
      {/* start left box to upload nft */}
      {cnt == 1  && <AlertDialog />}
      {loading && <AlertLoading text={stepTxt} />}
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "30px solid transparent",
          borderRadius: "20px",
          flex: "2",
        }}
      >
        {/* Title */}
        <Box mb={5}>
          <Typography variant="h6">NFT Content</Typography>
          {/* Title description */}
          <Typography variant="body2">
            You can set preferred display name, create your profile, URL and
            manage other personal settings
          </Typography>
          {/* type of upload */}
          <Typography variant="body2">
            Upload image, video, audio, or 3d model. File types supported: JPG,
            PNG, GIF, MP4, WEBM.
          </Typography>
          {/* support types */}
          <Typography variant="body2" gutterBottom>
            max size: 20 MB
          </Typography>
          {/* Box upload  */}
        </Box>

        <DropButton setImage={setImage} />
      </Card>

      {/* start right box to set nft interface */}
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          border: "30px solid transparent",
          borderRadius: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* title */}
          <Typography variant="h6" gutterBottom>
            NFT Content
          </Typography>

          {/* input name */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <TextField
              label="Name"
              multiline
              type="text"
              maxRows={4}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* input description */}
            <TextField
              label="Description"
              multiline
              type="text"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
        </Box>

        {/* button create nft*/}
        <Button variant="outlined" onClick={createNFT} size="lg">
          Create & List NFT!
        </Button>
      </Card>
      {/* end right box to set nft interface */}
    </StyledCreateNFTPages>
  );
};

export default Create_NFT;
