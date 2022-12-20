import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import MyNFTInfo from "../NFT_info/NFT_info";
import _ from "lodash";
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsList(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // if else statement to check if the nftList is empty or not

  let result;

  if (_.isEmpty(props.myNFT)) {
    result = (
      <Typography component={"span"}>
        Sorry, you don't have any NFT in your account
      </Typography>
    );
  } else {
    result = props.myNFT.map((item, id) => (
      <MyNFTInfo
        key={id}
        id={item.tokenId}
        image={item.image}
        name={item.name}
        description={item.description}
        price={item.startPrice}
        marketplaceContract={props.marketplaceContract}
        nftContract={props.nftContract}
        account={props.account}
      />
    ));
  }

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Collection" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          {props.isLoading ? (
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
              {result}
            </Box>
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
     
    </Box>
  );
}
