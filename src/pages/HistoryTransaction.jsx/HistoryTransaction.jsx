import React,  { useEffect, useState } from "react";
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
  const [trans, setTrans]  = useState([])
  console.log(trans)
  const {account} = useSelector(state=>state.solidity)
  const admin_address = '0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907'
  useEffect(()=>{
    fetch(etherscanApi(account))
    .then(res=>res.json())
    .then(json=>{
      let arr = []
      console.log(json.result)
      json.result.reverse().map(item=> {
        if(item.to == admin_address) 
         arr.push({type: 'Donate ETH', to: item.to, timestamp: item.timestamp, value: item.value, gasPrice: item.gasPrice, hash: item.hash})
        else if(item.functionName.includes('bid')) 
           arr.push({type: 'Bid', to: item.to, timestamp: item.timestamp, value: item.value, gasPrice: item.gasPrice, hash: item.hash})
          else if(item.functionName.includes('mint')) 
           arr.push({type: 'Mint NFT', to: item.to, timestamp: item.timestamp, value: item.value, gasPrice: item.gasPrice, hash: item.hash})
      setTrans(arr)
      })
    })
  },[account])
  return <div>HistoryTransaction</div>;
};

export default HistoryTransaction;
