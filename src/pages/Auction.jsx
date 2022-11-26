import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import React, { useState, useEffect, useRef, useMemo } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { bgcolor } from "@mui/system";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuctionById } from "../actions/auction";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toBase64, toWei, fromWei } from "../utils";
import DateCountdown from "react-date-countdown-timer";
export default function Auction() {
  const [price, setPrice] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const { nft_id } = useParams();
  const { currAuction } = useSelector((state) => state.auction);

  const { nftList, marketplaceContract, isLoading } = useSelector(
    (state) => state.solidity
  );

  const nft = nftList.filter((nft) => nft.id == nft_id)[0];

  let endAt;
  if (nft) {
    endAt = new Date(nft.endAt * 1000);
  }
  console.log(nft)

  const colors = [currAuction?.img1_url, currAuction?.img2_url];
  const delay = 7000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const date = new Date(Date.now());

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  // const endAuc = async () => {
  //   if (date > endAt && nft.isStarted == true) {
  //     // window.location.reload();
  //     if (nft.isStarted == true) {
  //       console.log(1);
  //       await (await marketplaceContract.endAuction(nft.id)).wait();
  //     }
  //   }
  // };
  // const a = useMemo(()=>{endAuc()}, [nft])
  // if(nft) {
  //   a
  // }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctionById(nft_id));
  }, [nft_id]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

 

  const handleOffer = (e) => {
    setIsDisplay(!isDisplay); 
  };

  const bid = async (e) => {
    if (isDisplay) {
      // if (price < nft.startPrice) {
      //   alert("price less than current price");
      //   return;
      // }
      await (
        await marketplaceContract.bid(nft_id, { value: toWei(price) })
      ).wait();
    }
  };

  if (!currAuction) return null;

  return (isLoading ? (
    <CircularProgress />
  ) : (
    <Box sx={{ padding: "16px 50px", height: "100%" }}>
      <Box
        className="slideshow"
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Box
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((img, index) => (
            <img className="slide" key={index} src={img} />
          ))}
        </Box>

        <Box className="slideshowDots">
          {colors.map((_, idx) => (
            <Box
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          zIndex: 2,
          justifyContent: "space-between",
          flex: 1,
          position: "relative",
        }}
      >
        {nft && (
          <img
            src={`data:image/png;base64,${toBase64(nft?.image?.buffer?.data)}`}
            style={{
              maxWidth: "21%",
              height: "300px",
              borderRadius: "13px",
              flex: 1,
              position: "absolute",
              top: "-85px",
              left: "70px",
            }}
            alt=""
          />
        )}

        <Box
          sx={{
            display: "flex",
            marginTop: "15px",
            marginLeft: "350px",
            flex: 2,
            padding: "0px 30px",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" gutterBottom>
            {currAuction.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Remaining Time
          </Typography>
          {endAt && (
            <DateCountdown
              dateTo={endAt}
              callback={() => {
                alert("Time out");
              }}
            />
          )}
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
            <Typography variant="h5">{`${
              nft?.highestBid 
            } ETH`}</Typography>
          </Box>
          <Typography variant="subtitle1" gutterBottom>
            Description
          </Typography>
          <Typography align="justify" paragraph>
            {currAuction.desc}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "#21b6ae",
              padding: "18px 36px",
              fontSize: "18px",
              marginBottom: "20px",
            }}
            variant="contained"
            size="large"
            onClick={handleOffer}
          >
            Make Offer
          </Button>
          {isDisplay && (
            <>
              <TextField
                type="number"
                name="price"
                variant="standard"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                inputProps={{
                  step: "0.0001",
                }}
              />
              <Button onClick={bid}>Offer</Button>
            </>
          )}
        </Box>
      </Box>
    </Box>)
  );
}
