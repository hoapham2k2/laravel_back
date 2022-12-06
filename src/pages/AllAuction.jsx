import { Box, Button, Card, Typography, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuction } from "../actions/auction";
import { useHistory } from "react-router-dom";
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

const ItemAuction = ({ auc }) => {
  const history = useHistory();

  return (
    <StyledItemAuction>
      <Box className="cardContainer">
        <img src={auc?.img1_url} alt="auction_img" />
      </Box>
      <Box className="cardContent">
        <Typography variant="h6" className="cardTitle">
          {auc?.title}
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
          {auc?.description}
        </Typography>

        <Typography variant="body1" className="auctionTimeLeft">
          Time left: 1 day 2 hours 30 minutes
        </Typography>

        <Button
          className="buttonSeeMore"
          variant="outlined"
          onClick={() => {
            history.push(`/auction/${auc?.nft_id}`);
          }}
        >
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
  const { auctions, isLoading } = useSelector((state) => state.auction);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuction());
  }, []);

  return (
    <>
      <StyledAllAuction>
        <HeaderTitleStyled>
          <Typography className="title">All Auction</Typography>
        </HeaderTitleStyled>
        {/* <ItemAuction /> */}
        {isLoading ? (
          <CircularProgress />
        ) : (
          <StyledListAuction>
            {auctions.map((auc, index) => {
              return <ItemAuction key={index} auc={auc} />;
            })}
          </StyledListAuction>
        )}
      </StyledAllAuction>
      <Footer />
    </>
  );
};

export default AllAuction;
