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
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import EmoStyled from "@emotion/styled";

import logoWeb from "../assets/img/weshare.svg";

// styled search
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// style search icon
// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// style input base
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

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
  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const account = useSelector((state) => state.solidity.account);
  return (
    <StyledAppBar
      color="transparent"
      className={colorChange ? "navbar colorChange" : "navbar"}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={logoWeb} alt="logo" style={{ width: 40, height: 40 }} />
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", letterSpacing: 4 }}
          >
            WESHARE
          </Typography>
        </Box>
        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "30px",
            }}
          >
            <BorderColorIcon sx={{ marginRight: "4px" }} />
            Create
          </Typography> */}
          <Button startIcon={<BorderColorIcon />}>Create</Button>
          <Button startIcon={<BloodtypeIcon />}>Donate</Button>

          <Typography
            onClick={() => {
              account ? console.log("") : web3Handler();
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "30px",
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
