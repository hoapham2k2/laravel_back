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
  Tabs,
} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import MyNFTInfo from "../components/NFT_info/NFT_info";
import AccountIcon from "../assets/img/ethereum.svg";
import AvatarImg from "../assets/img/avatar.jpg";
import cover from "../assets/img/account_cover.png";

import styled from "@emotion/styled";
import TabsList from "../components/YourNFTComponent/TabList";

const Your_NFT = () => {
  let { nftList, isLoading, account, marketplaceContract, nftContract } =
    useSelector((state) => state.solidity);

  // let myNFT = [...nftList];
  let myNFT = nftList.filter(
    (nft) => nft.owner.toLowerCase() === account.toLowerCase()
  );
  console.log("myNFT:", myNFT);

  console.log("nftlist: ", nftList);
  // tabs list initiabl state and

  console.log("account", account);

  const StyledAccountPages = styled(Box)`
    width: 100%;
    min-height: 100vh;

    .imgContainer {
      width: 100%;
      height: 380px;
      overflow: hidden;
      position: relative;
      .img-cover {
        width: 100%;
        height: 320px;
        object-fit: cover;
      }
      .img-avatar {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 5px solid #fff;
        position: absolute;
        bottom: 0;
        left: 40px;
      }
    }

    .infoContainer {
      margin-top: 16px;
      margin-left: 48px;
      display: flex;
      flex-direction: column;
      .infoAccount {
        display: flex;
        align-items: center;
        .infoAccountIcon {
          width: 20px;
          height: 20px;
        }
        .infoAccountAddress {
          width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  `;

  return (
    <StyledAccountPages>
      {/* a box to contain image */}
      <Box className="imgContainer">
        <img className="img-cover" src={cover} alt="img_cover_account" />
        <img className="img-avatar" src={AvatarImg} alt="img_avatar" />
      </Box>
      {/* a box to contain info */}
      <Box className="infoContainer">
        <Typography variant="h5" fontWeight={700}>
          Account Info
        </Typography>
        <Box className="infoAccount">
          <img
            src={AccountIcon}
            alt="account_icon"
            className="infoAccountIcon"
          />
          <Typography variant="body2" className="infoAccountAddress">
            {account ? account : "0x0000000000000000000000000000000000000000"}
          </Typography>
        </Box>
      </Box>

      {/* tablist  */}
      <TabsList
        myNFT={myNFT}
        isLoading={isLoading}
        account={account}
        marketplaceContract={marketplaceContract}
        nftContract={nftContract}
      />
    </StyledAccountPages>
  );
  // isLoading ? (
  //   <CircularProgress />
  // ) : (
  //   <Box>
  //     <Box>
  //       {myNFT.map((item, id) => (
  //         <Box item md={6}>
  //           <MyNFTInfo
  //             id={item.tokenId}
  //             image={item.image}
  //             name={item.name}
  //             description={item.description}
  //             price={item.startPrice}
  //             marketplaceContract={marketplaceContract}
  //             nftContract={nftContract}
  //             account={account}
  //           />
  //         </Box>
  //       ))}
  //     </Box>
  //   </Box>
  // );
};

export default Your_NFT;
