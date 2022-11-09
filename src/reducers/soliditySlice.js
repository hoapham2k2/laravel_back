import {
  FETCH_SOLIDITY,
  START_LOADING_SOLIDITY,
  CONNECT_ACC,
} from "../constraint/actionTypes";

const initState = {
  account: null,
  nftContract: null,
  marketplaceContract: null,
  nftList: [],
  isLoading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case START_LOADING_SOLIDITY: {
      return { ...state, isLoading: true };
    }
    case FETCH_SOLIDITY:
      return {
        ...state,
        nftContract: action.payload.nftContract,
        marketplaceContract: action.payload.marketplaceContract,
        nftList: action.payload.nftList,
        isLoading: false
      };
    case CONNECT_ACC:
      return {
        ...state,
        account: action.payload.account,
      };
    
    default:
      return state;
  }
};
