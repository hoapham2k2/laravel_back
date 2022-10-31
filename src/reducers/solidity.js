import {
  FETCH_SOLIDITY,
  START_LOADING,
  END_LOADING,
  CONNECT_ACC
} from "../constraint/actionTypes";

const initState = {
  account: null,
  nftContract: null,
  marketplaceContract: null,
  isLoading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case START_LOADING: {
      return { ...state, isLoading: true };
    }
    case END_LOADING: {
      return { ...state, isLoading: false };
    }
    case FETCH_SOLIDITY:
      return {
        ...state,
        account: action.payload.account,
        nftContract: action.payload.nftContract,
        marketplaceContract: action.payload.marketplaceContract,
      };
    case CONNECT_ACC:
      return {
        ...state,
        account: action.payload.account
      };
   

    default:
      return state;
  }
};