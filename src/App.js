import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Grid, Box, Container, ThemeProvider } from "@mui/material";
import { ethers } from "ethers";
import MarketplaceAbi from "./utils/contractsData/Marketplace.json";
import MarketplaceAddress from "./utils/contractsData/Marketplace-address.json";
import NFTAbi from "./utils/contractsData/NFT.json";
import NFTAddress from "./utils/contractsData/NFT-address.json";
import create_nft from "./pages/Create_NFT";
import Sidebar from "./components/Sidebar";
import Appbar from "./components/AppComponent/Appbar";
import { CONNECT_ACC } from "./constraint/actionTypes";
import { Home } from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchSolidity } from "./actions/solidity";
import "./App.css";
import Auction from "./pages/Auction";
import Your_NFT from "./pages/Your_NFT";
import createTheme from "@mui/material/styles/createTheme";
import ErrorPages from "./pages/ErrorPages";
import HistoryTransaction from "./pages/HistoryTransaction.jsx/HistoryTransaction";

const App = () => {
  const dispatch = useDispatch();
  let accounts;

  const web3Handler = async () => {
    // connect metamask
    accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async function (accounts) {
      await web3Handler();
    });
    dispatch({
      type: CONNECT_ACC,
      payload: {
        account: accounts[0],
      },
    });
  };

  useEffect(() => {
    web3Handler();
    dispatch(fetchSolidity());
  });

  // darkmode
  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#fff",
          },
        },
      }),
    [darkMode]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Box
          className="content"
          sx={{ width: "100%", height: "100%", display: "flex" }}
        >
          {/* sidebar */}
          <Sidebar />

          {/* right part of app */}
          <Box
            className="right_box"
            sx={{
              flex: 1,
              height: "100%",
              overFlow: "hidden",
            }}
          >
            <Appbar web3Handler={web3Handler} />
            <Box className="pages_box">
              <Switch>
                <Route path="/create_nft" exact component={create_nft} />
                <Route path="/history" exact component={HistoryTransaction} />
                <Route path="/auction/:nft_id" exact component={Auction} />
                <Route path="/auction" exact component={Auction} />
                <Route path="/list_nft" exact component={Your_NFT} />
                <Route path="/" exact component={Home} />
                <Route path="*" component={ErrorPages} />
              </Switch>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
