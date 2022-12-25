import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme } from "@mui/material/styles";
import { account_admin, toWei } from "../../utils";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import {
  Button,
  Popover,
  TextareaAutosize,
  TextField,
  Tooltip,
} from "@mui/material";
import EmoStyled from "@emotion/styled";

import logoWeb from "../../assets/img/weshare.svg";
import { useState } from "react";

// styled search
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// style search icon
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const DeleteIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  right: "0",
  top: "0",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "gray",
}));

// style input base
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "75ch",
    },
  },
}));

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  position: sticky;

  top: 0;
  left: 0;
  box-shadow: none;
  transition: all 0.4s ease 0s;
  &.colorChange {
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  }
`;

export default function PrimarySearchAppBar({ web3Handler }) {
  const [price, setPrice] = React.useState(0);
  const [colorChange, setColorchange] = React.useState(false);

  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const { account } = useSelector((state) => state.solidity);

  const history = useHistory();

  // initial the state and the function to change the state

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "donate" : undefined;

  //handle on donate

  const handleOnDonate = async () => {
    if (!window.ethereum) return alert("Please install metamask first");
    if (!account) alert("Please connect account");

    const amount_eth = toWei(price);

    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: account,
          to: account_admin,
          gas: "0x5208",
          value: amount_eth._hex,
        },
      ],
    });

    alert("Thank you for your donation!");
    if (pathname == "history") window.location.reload();
  };
  const handleConnectWallet = () => {
    web3Handler();
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [displayDelIcon, setDisplayDelIcon] = useState(false);
  const handleSearch = (e) => {
    if (e.key == "Enter") {
      setDisplayDelIcon(true)
      history.push(`/search/?value=${searchQuery}`);
    }
  };

  const handleDeleteSearch = () => {
    setSearchQuery("");
    setDisplayDelIcon(false)
    history.push("/");
  };

  const handleBlur = () => {
    if(!searchQuery) setDisplayDelIcon(false)
     else setDisplayDelIcon(true)
  }
  
  return (
    <StyledAppBar
      color="transparent"
      className={colorChange ? "navbar colorChange" : "navbar"}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={logoWeb} alt="logo" style={{ width: 40, height: 40 }} />
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", letterSpacing: 4 }}
          >
            WESHARE
          </Typography>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyPress={handleSearch}
            onBlur={handleBlur}
          />
          {displayDelIcon && (
            <DeleteIconWrapper onClick={handleDeleteSearch}>
              <HighlightOffIcon />
            </DeleteIconWrapper>
          )}
        </Search>

        <Box
          sx={{
            paddingLeft: 2,
            flex: 1,
            marginLeft: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            startIcon={<AssessmentIcon />}
            aria-describedby={id}
            variant="outlined"
            onClick={() => {
              history.push("/all-auction");
            }}
          >
            Auctions
          </Button>
          <Button
            startIcon={<BloodtypeIcon />}
            aria-describedby={id}
            variant="outlined"
            onClick={handleClick}
          >
            Donate
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{ mt: "20px" }}
          >
            <Box
              sx={{
                p: 2,
                width: 300,
                height: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Typography variant="body1" className="PopoverTitle">
                If you want to donate directory to us, please send your donation
                to the following address:
              </Typography>
              <Tooltip title="Copy to clipboard" placement="top">
                <Typography
                  variant="body1"
                  className="PopoverTitle"
                  noWrap="false"
                  // click to copy

                  onClick={() => {
                    navigator.clipboard.writeText(
                      "0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907"
                    );
                    alert("Copied to clipboard");
                  }}
                  sx={{
                    border: "1px solid lightgreen ",
                    borderRadius: "4px",
                    padding: "4px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907
                </Typography>
              </Tooltip>
              <Typography variant="body1">
                Please send your donation in ETH:
              </Typography>
              <TextField
                fullWidth
                label="Amount"
                variant="outlined"
                type="number"
                min={0}
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                inputProps={{
                  step: "0.001",
                }}
              />
              <Typography variant="body1">
                Please leave a message for us:
              </Typography>
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                placeholder="Leave the message in here"
                multiline
                rows={3}
              />
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleOnDonate}
              >
                Donate to us
              </Button>
            </Box>
          </Popover>
          <Typography
            onClick={() => {
              account ? console.log("") : web3Handler();
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "30px",
              marginLeft: "40px",
              cursor: "pointer",
            }}
          >
            {account
              ? `${account.slice(0, 5) + "..." + account.slice(38, 42)}`
              : "Connect Wallet"}
          </Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
