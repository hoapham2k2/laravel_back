import {ethers} from 'ethers' 

export function toBase64(arr) {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

export const toWei = (num) => ethers.utils.parseEther(num.toString()) // eth -> wei 
  //    Parse the etherString representation of ether into a BigNumber instance of the amount of wei 1eth = 1.000.000.000 wei
export const fromWei = (num) => ethers.utils.formatEther(num)  // wei -> eth 

export const account_admin = '0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907'