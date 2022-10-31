import React from 'react'
import { Grid, Box, Typography } from "@material-ui/core";
import { useState } from "react";
import { ethers } from "ethers";
import { Buffer } from "buffer";
import { pinJSONToIPFS } from "../utils/pinata.js";
import { useDispatch, useSelector } from "react-redux";

const Create_NFT = () => {
  const {nftContract, marketplaceContract} = useSelector((state) => state.solidity)
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [buffer, setBuffer] = useState(null);
  const [waiting, setwaiting] = useState("");

  const createNFT = async () => {
    if (!image || !price || !name || !description) return;
    try {
      // var f = new File([""], "filename.txt", {type: "text/plain",lastModified: '101010'})
      //console.log(f)
      //console.log(image)
      const sample = {};
      sample.name = image.name;
      const reader = new window.FileReader(); //Interface FileReader trong Javascript được thiết kế để đọc các nguồn dữ liệu trên máy tính của người dùng.
      reader.readAsArrayBuffer(image);  // readAsArrayBuffer(blob) – reading data in binary format ArrayBuffer.

      reader.onloadend = () => {
        setBuffer({ buffer: Buffer(reader.result) });
        console.log("buffer", buffer);
      };

      if (buffer === null) {
        return;
      }
      setwaiting("Wait...");
      console.log(waiting)
      const metadata = {};
      metadata.name = name;
      metadata.image = buffer;
      metadata.description = description;

      const pinataResponse1 = await pinJSONToIPFS(metadata);

      if (!pinataResponse1.success) {
        setwaiting("Error try again");
        console.log(waiting)
        return {
          success: false,
          status: "Something went wrong while uploading your tokenURI.",
        };
      }
      const tokenURI = pinataResponse1.pinataUrl;
      console.log('token uri', tokenURI)
      
      mintThenList(tokenURI);
    } catch (error) {
      console.log("ipfs uri upload error: ", error);
    }
  };
  const mintThenList = async (result) => {
    const uri = result;
    console.log(uri);
   
    try {
      await(await nftContract.mint(uri)).wait()
    // get tokenId of new nft 
    const id = await nftContract.tokenCount()
    // approve marketplace to spend nft
    await(await nftContract.setApprovalForAll(marketplaceContract.address, true)).wait()
    // add nft to marketplace
    const listingPrice = ethers.utils.parseEther(price.toString())
    await(await marketplaceContract.makeItem(nftContract.address, id, listingPrice)).wait()
    console.log('item count: ',marketplaceContract.itemCount())
    setwaiting("");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Box>
      <Typography>CREATE A NEW NFT</Typography>
      <Typography>You can set preferred display name, create your profile, URL and manage other personal settings</Typography>
      <Typography>IMAGE, VIDEO, AUDIO, or 3D MODEL</Typography>
      <Typography>File types supported: JPG, PNG, GIF, MP4, WEBM, max size: 20 MB</Typography>

      <div className="row">
          <main
            role="main"
            className="col-lg-12 mx-auto"
            style={{
              maxWidth: "1000px",
            }}
          >
            <div className="content mx-auto">
                {/* <input
                type="file"
                required
                name="file"
                onChange={(e) => setImage(e.target.value)}
                // onChange={uploadToIPFS}
              /> */}
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
                <input
                  onChange={(e) => setName(e.target.value)}
                  size="lg"
                  required
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  size="lg"
                  required
                  as="textarea"
                  placeholder="Description"
                />
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  size="lg"
                  required
                  type="number"
                  step="0.001"
                  placeholder="Price in ETH"
                />
                <div className="d-grid px-0">
                  <button onClick={createNFT} variant="primary" size="lg">
                    Create & List NFT!
                  </button>
                </div>
            </div>
          </main>
        </div>

    </Box>
  )
}

export default Create_NFT