import * as React from "react";
import { Box, CssBaseline, Button, Tooltip, IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

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

export default function MySidebar() {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  console.log(pathname);

  const backLink = {
    backgroundColor: "rgb(0, 221, 162)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  };

  return (
    <Box sx={{ display: `flex`, flexDirection: "column" }}>
      <CssBaseline />

      <Box sx={{ display: `flex`, height: `100px`, margin: `0 auto` }}>
        <Box
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <Box>{/* <img src={logo} alt="logo" /> */}</Box>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: `flex`,
          flexDirection: "column",
          justifyContent: "start",
          gap: 3,
        }}
      >
        <Button
          onClick={() => {
            history.push("/");
          }}
          sx={pathname == "" ? backLink : {}}
        >
          <Tooltip title="Home" placement="right-end">
            <IconButton>
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </Button>

        <Button
          onClick={() => {
            history.push("/list_nft");
          }}
          sx={pathname == "list_nft" ? backLink : {}}
        >
          <Tooltip title="List NFT" placement="right-end">
            <IconButton>
              <FormatListBulletedIcon />
            </IconButton>
          </Tooltip>
        </Button>

        <Button
          onClick={() => {
            history.push("/history");
          }}
          sx={pathname == "history" ? backLink : {}}
        >
          <Tooltip title="History" placement="right-end">
            <IconButton>
              <ReceiptLongIcon />
            </IconButton>
          </Tooltip>
        </Button>

        <Button
          onClick={() => {
            history.push("/auction");
          }}
          sx={pathname == "auction" ? backLink : {}}
        >
          <Tooltip title="Auction" placement="right-end">
            <IconButton>
              <ShoppingCartCheckoutIcon />
            </IconButton>
          </Tooltip>
        </Button>

        <Button
          onClick={() => {
            history.push("/create_nft");
          }}
          sx={pathname == "create_nft" ? backLink : {}}
        >
          <Tooltip title="Create NFT" placement="right-end">
            <IconButton>
              <CloudUploadIcon />
            </IconButton>
          </Tooltip>
        </Button>
        <Button>
          <SettingsIcon />
        </Button>
        <Divider />
      </Box>

      {/* start phan footer */}
      <Box
        sx={{
          display: `flex`,
          flex: `1`,
          alignItems: `flex-end`,
          justifyContent: `center`,
          paddingBottom: `10px`,
        }}
      >
        {/* <img src={bottomSideBar} alt="anhBottom" /> */}
      </Box>
    </Box>
  );
}
