import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Footer from "../components/AppComponent/Footer";
import imgAuctionItem from "../assets/img/slider1.jpg";

const StyledAllAuction = styled(Box)`
  padding: 24px;
`;

const HeaderTitleStyled = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  & .title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: 5px;
    background-color: ;
  }
`;

// item auction
const StyledItemAuction = styled(Card)`
  width: 450px;

  .cardContainer {
    width: 100%;
    height: 300px;
    overflow: hidden;

    img {
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
    padding: 10px;
    width: 100%;
    height: 100%;
    .cardTitle {
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .cardDescription {
    }

    .auctionTimeLeft {
      margin-top: 10px;
      font-size: 20 px;
      font-weight: 700;
    }

    .buttonSeeMore {
      margin-top: 10px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 20px;
    }
  }
`;

const ItemAuction = () => {
  return (
    <StyledItemAuction>
      <Box className="cardContainer">
        <img src={imgAuctionItem} alt="auction_img" />
      </Box>
      <Box className="cardContent">
        <Typography variant="h6" className="cardTitle">
          Helping children in Africa
        </Typography>
        <Typography
          className="cardDescription"
          sx={{
            textAlign: "justify",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
          variant="body1"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          nam suscipit, ab aspernatur beatae sint asperiores laboriosam
          consequuntur! Ipsam itaque maiores quam maxime. Molestias accusantium
          soluta corrupti id animi. Quo.
        </Typography>

        <Typography variant="body1" className="auctionTimeLeft">
          Time left: 1 day 2 hours 30 minutes
        </Typography>

        <Button className="buttonSeeMore" variant="outlined">
          See more
        </Button>
      </Box>
    </StyledItemAuction>
  );
};

// styled list auction

const StyledListAuction = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 60px;
`;

const AllAuction = () => {
  return (
    <>
      <StyledAllAuction>
        <HeaderTitleStyled>
          <Typography className="title">All Auction</Typography>
        </HeaderTitleStyled>
        {/* <ItemAuction /> */}
        <StyledListAuction>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return <ItemAuction key={index} />;
          })}
        </StyledListAuction>
      </StyledAllAuction>
      <Footer />
    </>
  );
};

export default AllAuction;
