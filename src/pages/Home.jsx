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
import Footer from "../components/Footer";

// declare some constant of campaign
const BORDER = "1px solid #E5E5E5";
const CARD_BORDER_RADIUS = "16px";
const CARD_PADDING = "20px";
const COLUMN_GAP = 2;
const FULL_WIDTH = "100%";
const PART_MARGIN_TOP = 3;
const SETTING_FLEX_COL = { display: "flex", flexDirection: "column" };
const TEXT_MARGIN_BOTTOM = 1;

const ItemTitle = styled(Box)`
  .title {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .detail {
    font-size: 1rem;
  }
`;
// Item of Campaign
const ItemCampaignDemo = () => {
  return (
    <Card
      sx={{
        display: "flex",
        width: FULL_WIDTH,
        gap: COLUMN_GAP,
        border: BORDER,
        borderRadius: CARD_BORDER_RADIUS,
        padding: CARD_PADDING,
      }}
    >
      <Avatar
        sx={{
          height: 56,
          width: 56,
          borderRadius: CARD_BORDER_RADIUS,
          border: BORDER,
        }}
        src={img2}
      />

      <ItemTitle sx={{ ...SETTING_FLEX_COL, justifyContent: "space-between" }}>
        <Typography className="title">SuperIdol</Typography>
        <Typography className="detail">02:18:25s</Typography>
      </ItemTitle>

      <Button variant="text" sx={{ marginLeft: "auto" }}>
        Join now
      </Button>
    </Card>
  );
};

//  styled img and both nft

const StyledImg = styled.img`
  width: ${FULL_WIDTH};
  height: ${FULL_WIDTH};
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
      <Box sx={{ display: "block", padding: "16px" }}>
        <Box sx={{ ...SETTING_FLEX_COL }}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              textTransform: "uppercase",
              letterSpacing: "5px",
              fontWeight: 700,
            }}
          >
            The Lonely Guy
          </Typography>
          <Box
            sx={{
              width: FULL_WIDTH,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="subtitle1">3:20:19s</Typography>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ textTransform: "uppercase", color: "lightgreen" }}
            >
              5.0 ETH
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const NFTList = () => {
  return (
    <Box mt={PART_MARGIN_TOP} sx={SETTING_FLEX_COL}>
      <Box
        mb={TEXT_MARGIN_BOTTOM}
        sx={{
          display: "flex",
          justifyContent: "space-between",
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

// Campaign List

const CampaignList = () => {
  return (
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

      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
  );
};

const HeaderTitleStyled = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  & .title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 50px;
    letter-spacing: 5px;
    font-size: 72px;
    background: -webkit-linear-gradient(#68b984, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
      <CampaignList />
      {/* nft 101 */}
      {/* footer */}
      <Footer />
    </HomePages>
  );
};
