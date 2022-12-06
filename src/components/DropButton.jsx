import { Box, Card } from "@mui/material";
import * as React from "react";
import { DropzoneArea } from "react-mui-dropzone";

export default function DropButton({ setImage }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DropzoneArea
        acceptedFiles={["image/*"]}
        dropzoneText={"Drag and drop an image here or click"}
        onChange={(files) => {
          console.log("Files:", files[0]);
          setImage(files[0]);
        }}
        // onAlert={(message, variant) => alert(`${variant}: ${message}`)}
        filesLimit={1}
        showPreviews={true}
        showPreviewsInDropzone={false}
        previewText="Selected files"
      />
    </Box>
  );
}
