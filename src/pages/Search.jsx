import {
  Box,
  Typography,
  Tabs,
  Tab,
  CircularProgress,
  Card,
  Button,
  Link,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fromWei, account_admin } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { getAuction } from "../actions/auction";
import MyNFTInfo from "../components/NFT_info/NFT_info";
import { DataGrid } from "@mui/x-data-grid";

import styled from "styled-components";

const etherscanApi = (acc) =>
  `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${acc}&startblock=0&endblock=99999999&sort=asc&apikey=WYDQJ7MTFSEQENZJIZ1P3V8F75VVKIURMA`;

const linkStyle = {
  textDecoration: "none",
  color: "rgb(0, 221, 162)",
  overflow: "hidden",
};

const linkStyle2 = {
  textDecoration: "none",
  color: "rgb(0, 221, 162)",
};

const etherscanHash = (hash) => `https://goerli.etherscan.io/tx/${hash}`;
const etherscanAcc = (acc) => `https://goerli.etherscan.io/address/${acc}`;

function useQuery() {
  //  useLocation().search =  ?page=1
  return new URLSearchParams(useLocation().search);
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const StyledListAuction = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 60px;
`;
const StyledAllAuction = styled(Box)`
  padding: 24px;
`;

const HeaderTitleStyled = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  & .title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: 5px;
    background-color: ;
  }
`;

// item auction
const StyledItemAuction = styled(Card)`
  width: 450px;

  .cardContainer {
    width: 100%;
    height: 300px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:hover {
        transform: scale(1.1);
        transition: all 0.5s ease;
      }
    }
  }

  .cardContent {
    padding: 10px;
    width: 100%;
    height: 100%;
    .cardTitle {
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .cardDescription {
    }

    .auctionTimeLeft {
      margin-top: 10px;
      font-size: 20 px;
      font-weight: 700;
    }

    .buttonSeeMore {
      margin-top: 10px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 20px;
    }
  }
`;

const ItemAuction = ({ auc }) => {
  const history = useHistory();

  return (
    <StyledItemAuction>
      <Box className="cardContainer">
        <img src={auc?.img1_url} alt="auction_img" />
      </Box>
      <Box className="cardContent">
        <Typography variant="h6" className="cardTitle">
          {auc?.title}
        </Typography>
        <Typography
          className="cardDescription"
          sx={{
            textAlign: "justify",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
          variant="body1"
        >
          {auc?.description}
        </Typography>

        <Typography variant="body1" className="auctionTimeLeft">
          Time left: 1 day 2 hours 30 minutes
        </Typography>

        <Button
          className="buttonSeeMore"
          variant="outlined"
          onClick={() => {
            history.push(`/auction/${auc?.nft_id}`);
          }}
        >
          See more
        </Button>
      </Box>
    </StyledItemAuction>
  );
};

const columns = [
  {
    field: "hash",
    headerName: "Hash code",
    width: 300,
    renderCell: (params) => {
      return (
        <Link
          to={{ pathname: etherscanHash(params.row.hash) }}
          target="_blank"
          style={linkStyle}
        >
          {params.row.hash}
        </Link>
      );
    },
  },
  { field: "type", headerName: "Type", width: 200 },
  {
    field: "timestamp",
    headerName: "Time",
    width: 200,
    renderCell: (params) => {
      const a = new Date(params.row.timestamp * 1000);
      return <p>{a.toLocaleString()}</p>;
    },
  },
  {
    field: "to",
    headerName: "To",
    width: 250,
    renderCell: (params) => {
      return (
        <Link
          to={{ pathname: etherscanAcc(params.row.to) }}
          target="_blank"
          style={linkStyle}
        >
          {params.row.to}
        </Link>
      );
    },
  },
  { field: "value", headerName: "Value", width: 200 },
  { field: "gasPrice", headerName: "Gas Price", width: 200 },
];

const Search = () => {
  const [value, setValue] = useState(0);
  const [trans, setTrans] = useState([]);

  let isExitNFT = false;
  let isExitAuc = false;
  const { nftList, account, isLoading, marketplaceContract, nftContract } =
    useSelector((state) => state.solidity);
  const { auctions, isLoading: aucLoading } = useSelector(
    (state) => state.auction
  );

  const query = useQuery().get("value"); // localhost/?value=abc
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuction());

    fetch(etherscanApi(account))
      .then((res) => res.json())
      .then((json) => {
        let arr = [];
        console.log(json.result);
        json.result.reverse().map((item) => {
          if (item.to.toLowerCase() == account_admin.toLowerCase())
            arr.push({
              type: "Donate ETH",
              to: item.to,
              timestamp: item.timeStamp,
              value: fromWei(item.value) + " ETH",
              gasPrice: Number(fromWei(item.gasPrice)).toFixed(14) + " ETH",
              hash: item.hash,
            });
          else if (item.functionName.includes("bid"))
            arr.push({
              type: "Bid",
              to: item.to,
              timestamp: item.timeStamp,
              value: fromWei(item.value) + " ETH",
              gasPrice: Number(fromWei(item.gasPrice)).toFixed(14) + " ETH",
              hash: item.hash,
            });
          else if (item.functionName.includes("mint"))
            arr.push({
              type: "Mint NFT",
              to: item.to,
              timestamp: item.timeStamp,
              value: "",
              gasPrice: Number(fromWei(item.gasPrice)).toFixed(14) + " ETH",
              hash: item.hash,
            });
          setTrans(arr);
        });
      });
  }, [account]);

  return (
    <Box sx={{ mt: "50px", ml: "20px" }}>
      <Typography variant="h4">Search Page</Typography>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {account && <Tab label="Collections" {...a11yProps(0)} />}
          <Tab label="Auctions" {...a11yProps(account ? 1 : 0)} />
        </Tabs>
        {account && <TabPanel value={value} index={0}>
          {" "}
          {/*Collection */}
          {isLoading ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography component={"span"}>
                Waiting for loading from smart contract
              </Typography>
              <CircularProgress />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {nftList.length == 0 ? (
                <Typography component={"span"}>
                  Sorry, you don't have any NFT in your account
                </Typography>
              ) : (
                <>
                  {nftList.map((item, id) => {
                    if (item.name.toLowerCase().includes(query.toLowerCase())) {
                      isExitNFT = true;
                      return (
                        <MyNFTInfo
                          key={id}
                          id={item.tokenId}
                          image={item.image}
                          name={item.name}
                          description={item.description}
                          price={item.startPrice}
                          marketplaceContract={marketplaceContract}
                          nftContract={nftContract}
                          account={account}
                          isSearch={true}
                        />
                      );
                    }
                  })}
                  {!isExitNFT && <Typography variant="h5" sx={{color:'red', opacity: '0.8'}}>No NFT Found</Typography>}
                </>
              )}
            </Box>
          )}
        </TabPanel>}
        <TabPanel value={value} index={account ? 1 : 0}>
          {" "}
          {/*Auction */}
          {aucLoading ? (
            <CircularProgress />
          ) : (
            <>
              <StyledListAuction>
                {auctions.map((auc, index) => {
                  if (auc.title.toLowerCase().includes(query.toLowerCase())) {
                    isExitAuc = true;
                    return (<ItemAuction key={index} auc={auc} />);
                  }
                })}
              </StyledListAuction>
              {!isExitAuc &&  <Typography variant="h5" sx={{color:'red', opacity: '0.8'}}>No Auction Found</Typography>}
            </>
          )}
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Search;
