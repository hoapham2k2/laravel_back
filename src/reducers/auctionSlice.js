import {
  FETCH_AUCTION, START_LOADING_AUCTION, CREATE_AUCTION, FETCH_AUCTION_BY_ID
} from "../constraint/actionTypes";

const initState = {
  auctions: [],
  currAuction: null,
  isLoading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case START_LOADING_AUCTION: {
      return { ...state, isLoading: true };
    }
    case FETCH_AUCTION:
      return {
        ...state,
        auctions: action.payload,
        isLoading: false,
      };
    case FETCH_AUCTION_BY_ID:
      return {
        ...state,
        currAuction: action.payload,
        isLoading: false,
      };
    case CREATE_AUCTION:
      return {
        ...state,
        auctions: [...state.auctions, action.payload.auction],
        isLoading: false,
      };

    default:
      return state;
  }
};
