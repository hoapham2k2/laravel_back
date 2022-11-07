import { Box, Card } from "@material-ui/core";
import * as React from "react";
import { DropzoneArea } from "react-mui-dropzone";

export default function DropButton() {
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
        onChange={(files) => console.log("Files:", files)}
        onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
        filesLimit={1}
        showPreviews={true}
        showPreviewsInDropzone={false}
        previewText="Selected files"
      />
    </Box>
  );
}
