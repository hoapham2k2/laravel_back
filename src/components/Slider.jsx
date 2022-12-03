import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card } from "@mui/material";
import landscape1 from "../assets/img/slider1.jpg";
import landscape2 from "../assets/img/slider2.jpg";
import landscape3 from "../assets/img/slider3.jpg";
import landscape4 from "../assets/img/slider4.jpg";

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
      img: landscape3,
    },
    {
      name: "anh cover #3",
      img: landscape4,
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={4000}
      animation="fade"
      duration={2000}
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
          height: 520,
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
          alt={props.item.name}
        />
      </Card>
    );
  }
}
