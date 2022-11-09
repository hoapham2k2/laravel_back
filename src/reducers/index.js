import { combineReducers } from "redux";

import solidity from "./soliditySlice";
import campaign from "./campaignSlice";
import auction from "./auctionSlice";

export const reducers = combineReducers({
  solidity,
  campaign,
  auction
});
