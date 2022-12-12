import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
const etherscanApi = (acc) =>
  `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${acc}&startblock=0&endblock=99999999&sort=asc&apikey=WYDQJ7MTFSEQENZJIZ1P3V8F75VVKIURMA`;

const displayInfo = {
  type: "", //mint NFT, bid, donate,
  to: "",
  timestamp: "",
  value: 0,
  gasPrice: 0,
  hash: "",
};

const columns = [
  { field: "TxnHash", headerName: "TxnHash", width: 300 },
  { field: "Method", headerName: "Method", width: 200 },
  { field: "Age", headerName: "Age", width: 200 },
  { field: "From", headerName: "From", width: 200 },
  { field: "To", headerName: "To", width: 200 },
  { field: "Value", headerName: "Value", width: 80 },
  { field: "TxnFee", headerName: "TxnFee", width: 200 },
];

const rows = [
  {
    TxnHash:
      "0xeb087b9179c882d01dbdff5323155a8121825b1832fc21ec497ffc67c3d3bc71",
    Method: "mintNFT",
    Age: "1 day ago",
    From: "0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907",
    To: "0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907",
    Value: "0",
    TxnFee: "0.000000000000000001",
  },
  {
    TxnHash:
      "0xeb087b9179c882d01dbdff5323155a8121825b1832fc21ec497ffc67c3d3bc72",
    Method: "Transfer",
    Age: "1 day ago",
    From: "0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907",
    To: "0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907",
    Value: "0",
    TxnFee: "0.000000000000000001",
  },
  {
    TxnHash:
      "0xeb087b9179c882d01dbdff5323155a8121825b1832fc21ec497ffc67c3d3bc73",
    Method: "bid",
    Age: "1 day ago",
    From: "0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907",
    To: "0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907",
    Value: "0",
    TxnFee: "0.000001",
  },
];

const HistoryTransaction = () => {
  const [trans, setTrans] = useState([]);
  console.log(trans);
  const { account } = useSelector((state) => state.solidity);
  const admin_address = "0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907";
  useEffect(() => {
    fetch(etherscanApi(account))
      .then((res) => res.json())
      .then((json) => {
        let arr = [];
        console.log(json.result);
        json.result.reverse().map((item) => {
          if (item.to == admin_address)
            arr.push({
              type: "Donate ETH",
              to: item.to,
              timestamp: item.timestamp,
              value: item.value,
              gasPrice: item.gasPrice,
              hash: item.hash,
            });
          else if (item.functionName.includes("bid"))
            arr.push({
              type: "Bid",
              to: item.to,
              timestamp: item.timestamp,
              value: item.value,
              gasPrice: item.gasPrice,
              hash: item.hash,
            });
          else if (item.functionName.includes("mint"))
            arr.push({
              type: "Mint NFT",
              to: item.to,
              timestamp: item.timestamp,
              value: item.value,
              gasPrice: item.gasPrice,
              hash: item.hash,
            });
          setTrans(arr);
        });
      });
  }, [account]);

  // handle on cell click to console log all fields
  const handleOnCellClick = (params) => {
    console.log("id: ", params.id);
    console.log("field: ", params.field);
    console.log("value: ", params.value);
    console.log("row: ", params.row);
  };

  return (
    <>
      <h1 style={{ marginLeft: "24px", textTransform: "uppercase" }}>
        History Transaction
      </h1>
      <Box sx={{ height: "75vh", width: "100%", padding: "0 24px" }}>
        <DataGrid
          headerHeight={40}
          rowHeight={56}
          rows={rows}
          columns={columns}
          getRowId={(row) => row.TxnHash}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          onCellClick={handleOnCellClick}
        />
      </Box>
    </>
  );
};

export default HistoryTransaction;
