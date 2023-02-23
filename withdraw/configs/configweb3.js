const Web3 = require('web3');
const infuraurlmain =
  'https://mainnet.infura.io/v3/cd35bc...';
const infuraurlropsten =
  'https://ropsten.infura.io/v3/cd35bc...';
const NETCLASS = 'testnet';
console.log(NETCLASS);
const jnetkind = { mainnet: 'mainnet', testnet: 'ropsten' };
const jnettype = { mainnet: 'mainnet', testnet: 'testnet' };
const jinfuraurl = { mainnet: infuraurlmain, testnet: infuraurlropsten };
const infuraurl = jinfuraurl[NETCLASS]; //
const netkind = jnetkind[NETCLASS],
  nettype = jnettype[NETCLASS]; 
let web3 = new Web3(new Web3.providers.HttpProvider(infuraurl));
module.exports = { web3, netkind, nettype };

//8545