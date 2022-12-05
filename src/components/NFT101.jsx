import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, Typography, Box } from "@mui/material";
import lesson1 from "../assets/img/what-is-nft.jpg";
import lesson2 from "../assets/img/what-is-crypto-wallet.jpg";
import lesson3 from "../assets/img/what-are-gas-fees.jpg";
import lesson4 from "../assets/img/how-to-buy-nft.jpg";
import lesson5 from "../assets/img/how-to-create-nft.jpg";
import lesson6 from "../assets/img/how-to-sell-nft.jpg";
import lesson7 from "../assets/img/what-is-minting.jpg";
import lesson8 from "../assets/img/who-is-opensea.jpg";
import lesson9 from "../assets/img/ethereum_topic.jpg";

export default function NFT101(props) {
  var items = [
    [
      {
        title: "What is an NFT?",
        img: lesson1,
        URL: "https://opensea.io/learn/what-are-nfts",
      },
      {
        title: "What is a crypto wallet?",
        img: lesson2,
        URL: "https://opensea.io/learn/what-is-crypto-wallet",
      },
      {
        title: "What are blockchain gas fees?",
        img: lesson3,
        URL: "https://opensea.io/learn/nft-gas-fees",
      },
    ],
    [
      {
        title: "How to buy an NFT",
        img: lesson4,
        URL: "https://opensea.io/learn/how-to-buy-nft",
      },
      {
        title: "How to create an NFT on Opensea",
        img: lesson5,
        URL: "https://opensea.io/learn/how-to-create-an-nft",
      },
      {
        title: "How to sell an NFT on Opensea",
        img: lesson6,
        URL: "https://opensea.io/learn/how-to-sell-nfts",
      },
    ],
    [
      {
        title: "What is minting?",
        img: lesson7,
        URL: "https://opensea.io/learn/what-is-minting-nft",
      },
      {
        title: "Who is Opensea?",
        img: lesson8,
        URL: "https://opensea.io/learn/who-is-opensea",
      },
      {
        title: "What is Ethereum?",
        img: lesson9,
        URL: "https://coin98.net/ethereum-la-gi",
      },
    ],
  ];

  return (
    <Box className="NFT101" sx={{ mt: "24px" }}>
      <Typography variant="h4" gutterBottom>
        NFT 101
      </Typography>
      <Carousel
        autoPlay
        interval={4000}
        animation="slide"
        duration={2000}
        swipe
        indicators
        navButtonsAlwaysVisible
        sx={{
          ".css-1m9128y": {
            display: "none",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );

  function Item(props) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 24px",
        }}
      >
        {props.item.map((item, i) => (
          <Card
            key={i}
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "16px",
            }}
            onClick={() => window.open(item.URL, "_blank")}
          >
            <Box
              sx={{
                width: "100%",
                height: 300,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={item.img}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ width: "100%", padding: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    );
  }
}
