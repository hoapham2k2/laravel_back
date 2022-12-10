import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const etherscanApi = (acc) =>
  `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${acc}&startblock=0&endblock=99999999&sort=asc&apikey=WYDQJ7MTFSEQENZJIZ1P3V8F75VVKIURMA`;

const displayInfo = {
  type: '', //mint NFT, bid, donate, 
  to: '',
  timestamp: '',
  value: 0,
  gasPrice: 0,
  hash: ''
}
const HistoryTransaction = () => {
  const {account} = useSelector(state=>state.solidity)

  useEffect(()=>{
    fetch(etherscanApi(account))
    .then(res=>res.json())
    .then(json=>{
      console.log(json.result[101])
    })
  })
  return <div>HistoryTransaction</div>;
};

export default HistoryTransaction;
