import * as React from "react";
import {
  Box,
  CssBaseline,
  Button,
  Tooltip,
  IconButton,
  Toolbar,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
// import logo from "../../assets/litecoin.svg";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CampaignIcon from "@mui/icons-material/Campaign";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
// import bottomSideBar from "../../assets/bottomSidebarImage.svg";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useSelector } from "react-redux";
const drawerWidth = 70;

export default function MySidebar() {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  const { account } = useSelector((state) => state.solidity);

  const backLink = {
    backgroundColor: "rgb(0, 221, 162)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <CssBaseline />
      <Toolbar
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Tooltip title="Home" placement="right-end">
          <IconButton
            onClick={() => {
              history.push("/");
            }}
            sx={pathname == "" ? backLink : {}}
          >
            <HomeIcon />
          </IconButton>
        </Tooltip>

        {account && (
          <>
            <Tooltip title="Account" placement="right-end">
              <IconButton
                onClick={() => {
                  history.push("/account");
                }}
                sx={pathname == "account" ? backLink : {}}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="History" placement="right-end">
              <IconButton
                onClick={() => {
                  history.push("/history");
                }}
                sx={pathname == "history" ? backLink : {}}
              >
                <ReceiptLongIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Create NFT" placement="right-end">
              <IconButton
                onClick={() => {
                  history.push("/create_nft");
                }}
                sx={pathname == "create_nft" ? backLink : {}}
              >
                <CloudUploadIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Toolbar>
    </Drawer>
  );
}
