import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
const NFTItem = () => {
  return (
    <Card sx={{ width: "100%" }}>
      <Box
        sx={{
          flex: 1,
          height: "190px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <CardMedia
          component="img"
          image={img2}
          sx={{ height: "100%", width: "100%" }}
        /> */}
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

export default NFTItem;
