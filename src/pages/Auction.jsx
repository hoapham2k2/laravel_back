import { Box, Typography } from "@material-ui/core";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import * as React from "react";
export default function Auction() {
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        // full height
        height: "calc(100vh - 64px)",
      }}
    >
      {/* nesting two image */}
      <img
        style={{
          width: "80%",
          height: "40%",
          position: "relative",
          top: "50px",
          left: "40px",
        }}
        src={img1}
        alt=""
      />

      <img
        style={{
          height: "60%",
          position: "absolute",
          top: "40%",
          right: "50%",
        }}
        src={img2}
        alt=""
      />
    </Box>
  );
}
