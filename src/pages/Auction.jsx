import { Box, Typography, TextField, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { bgcolor } from "@mui/system";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuctionById } from "../actions/auction";
export default function Auction() {
  const { nft_id } = useParams();
  const [displayImg1, setDisplayImg1] = useState(true);

  const { currCampaign } = useSelector((state) => state.campaign);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctionById(nft_id));
  }, [nft_id]);

  if (!currCampaign) return null;

  return (
    <Box >
     
      
      
      <Box
        sx={{
            display: "flex",
          zIndex: 2,
          justifyContent: "space-between",
          flex: 1,

        }}
      >
        <img
          src={img2}
          style={{
            maxWidth: "21%",
            height: "auto",
            marginLeft: "10%",
            flex: 1,
          }}
          alt=""
          srcset=""
        />

        <Box
          sx={{
            display: "flex",
            marginTop: "10%",
            // marginLeft: "300px",
            flex: 2,
            padding: "0px 30px",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" gutterBottom>
            {currCampaign.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Remaining Time ( End at)
          </Typography>
          <Box
            sx={{
              padding: "8px 16px",
              bgcolor: "#fff",
              maxWidth: "300px",
              border: "1px solid #ccc",
              borderRadius: "30px",
              marginBottom: "8px",
            }}
          >
            <Typography variant="h5">Current Value</Typography>
          </Box>
          <Typography variant="subtitle1" gutterBottom>
            Description
          </Typography>
          <Typography align="justify" paragraph>
            {currCampaign.desc}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "#21b6ae",
              padding: "18px 36px",
              fontSize: "18px",
            }}
            variant="contained"
            size="large"
          >
            Make Offer
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
