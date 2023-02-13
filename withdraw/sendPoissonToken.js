var poissonProcess = require('poisson-process');
const Web3 = require('web3');
const MIN_TOKEN_AMOUNT_TO_WITHDRAW = 1;
const { minAbi4tx } = require('./configs/abis');
const GAS_LIMIT_TOKEN = '';
const contractaddress = '0xD3e86b4db395ca81640230F915552564f70EA648';
const tokenAddress = '0xD3e86b4db395ca81640230F915552564f70EA648';
var Tx = require('ethereumjs-tx').Transaction;
let web3 = new Web3(new Web3.providers.HttpProvider('http://bcast1.net:30413'));
const sendPoissonCoin = async (jdata) => {
  return new Promise(async (resolve, reject) => {
    let { senderaddress, amount, rxaddr, private_key } = jdata;
    const getweirep = (val) => Web3.utils.toWei(val);
    var privKey =
      '0x972a9bf032808fe8af712ca8463f1e056f1af880088e0af65e329f744d98b8df';
    let sender = web3.eth.accounts.privateKeyToAccount(privKey);

    web3.eth
      .sendTransaction({
        from: sender.address,
        to: '0xef9C90128e60f9F90e6d5eB10C69F4Cfdc01F9f9',
        value: getweirep('1'),
      })
      .then(function (resp) {
        // console.log(resp);
      });
  });
};

var p = poissonProcess.create(10000, function message() {
  console.log('POISSON PROCESS');
  let jdata1 = {
    senderaddress: '0xef9C90128e60f9F90e6d5eB10C69F4Cfdc01F9f9',
    // amount: '0.00192823123348952',
    amount: '1000000000000000000',
    rxaddr: '0x052D8b13fF06e02E148066842e766060A9EDB431',
    private_key:
      '0x972a9bf032808fe8af712ca8463f1e056f1af880088e0af65e329f744d98b8df',
  };
  sendPoissonCoin(jdata1);
});
p.start();

module.exports = { sendPoissonCoin };
