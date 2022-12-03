import React, { useEffect, useState } from "react";
import NFTItem from "../components/NFTItem";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardMedia,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";
import MyNFTInfo from "../components/NFT_info/NFT_info";
const Your_NFT = () => {
  let { nftList, isLoading, account, marketplaceContract, nftContract } =
    useSelector((state) => state.solidity);

  let myNFT = nftList.filter(
    (nft) => nft.owner.toLowerCase() == account.toLowerCase()
  );
  console.log(nftList);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Box>
      <Box
        // disableEqualOverflow={true}
        md={12}
        sx={{
          display: `flex`,
          flexDirection: `column`,
          padding: `20px 40px 15px 40px`,
        }}
      >
        {/* start all content in here */}

        {/* toolbar box to search or filter somthing */}

        {/* an box to contain the body */}
        <Box sx={{ marginTop: `25px` }}>
          <Box>
            {myNFT.map((item, id) => (
              <Box item md={6}>
                <MyNFTInfo
                  id={item.tokenId}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.startPrice}
                  marketplaceContract={marketplaceContract}
                  nftContract={nftContract}
                  account={account}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Your_NFT;
