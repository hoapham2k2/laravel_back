import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Avatar, Card, CardMedia } from "@mui/material";
import landscape2 from "../assets/img/slider1.jpg";
import landscape1 from "../assets/img/slider2.jpg";
import img1 from "../assets/img/img1.png";
import { Box } from "@mui/system";

export default function Slider(props) {
  var items = [
    {
      name: "anh cover #1",
      img: landscape1,
    },
    {
      name: "anh cover #2",
      img: landscape2,
    },
    {
      name: "anh cover #3",
      img: img1,
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={6000}
      animation="slide"
      duration={3000}
      swipe={true}
      indicators
      cycleNavigation={true}
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
  );

  function Item(props) {
    return (
      <Card
        sx={{
          height: "300px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={props.item.img}
          style={{
            width: "80%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Card>
    );
  }
}
