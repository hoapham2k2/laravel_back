import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import Slider from "../components/Slider";

import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import styled from "@emotion/styled";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

// Item of Campaign
const ItemCampaignDemo = () => {
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        gap: "16px",
        border: "1px solid #E5E5E5",
        borderRadius: "8px",
        padding: "20px",
        height: 100,
      }}
    >
      <Avatar sx={{ height: 56, width: 56, borderRadius: "15px" }} src={img2} />

      <Box sx={{ flexShrink: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
          Title
        </Typography>
        <Typography variant="body1">Remaining time</Typography>
      </Box>

      <Button sx={{ marginLeft: "auto" }}>Join now</Button>
    </Card>
  );
};

//  styled img and both nft

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);

    transition: all 0.3s ease-in-out;
  }
`;

const NFTItem = () => {
  return (
    <Card>
      <Box
        sx={{
          flex: 1,
          width: 300,
          height: 300,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StyledImg src={img1} />
      </Box>
      <Box sx={{ display: "flex", padding: "16px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
            Title
          </Typography>
          <Typography variant="body1">Remaining time...</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
            Price
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

const NFTList = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h4">NFT</Typography>
        <Button variant="text">View all</Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: "50px",
        }}
      >
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
      </Box>
    </Box>
  );
};

const HeaderTitleStyled = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  & .title {
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 30px 50px;
    letter-spacing: 5px;
    color: lightgreen;
  }
`;

const HomePages = styled(Box)``;

const HeaderPages = styled(Box)``;

export const Home = () => {
  return (
    <HomePages>
      <HeaderPages>
        <HeaderTitleStyled>
          <Typography className="title">Giving is receiving</Typography>
        </HeaderTitleStyled>
        <Slider />
      </HeaderPages>
      <NFTList />
      <Box mt={3}>
        {/* information of campaign list demo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography variant="h4">New Campaign</Typography>
          <Button variant="text">See more</Button>
        </Box>
        {/* <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <ItemCampaignDemo></ItemCampaignDemo>
          <ItemCampaignDemo></ItemCampaignDemo>
          <ItemCampaignDemo></ItemCampaignDemo>
        </Box> */}

        <Grid2 container spacing={3}>
          <Grid2 xs={6}>
            <ItemCampaignDemo />
          </Grid2>
          <Grid2 xs={6}>
            <ItemCampaignDemo />
          </Grid2>
          <Grid2 xs={6}>
            <ItemCampaignDemo />
          </Grid2>
          <Grid2 xs={6}>
            <ItemCampaignDemo />
          </Grid2>
          <Grid2 xs={6}>
            <ItemCampaignDemo />
          </Grid2>
          <Grid2 xs={6}>
            <ItemCampaignDemo />
          </Grid2>
        </Grid2>
      </Box>

      {/* nft 101 */}
      <Box mt={3}></Box>
    </HomePages>
  );
};
