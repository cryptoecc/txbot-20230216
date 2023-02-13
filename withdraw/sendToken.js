const cron = require('node-cron');
const Web3 = require('web3');
const MIN_TOKEN_AMOUNT_TO_WITHDRAW = 1;
const { minAbi4tx } = require('./configs/abis');
const GAS_LIMIT_TOKEN = '';
const contractaddress = '0xD3e86b4db395ca81640230F915552564f70EA648';
const tokenAddress = '0xD3e86b4db395ca81640230F915552564f70EA648';
var Tx = require('ethereumjs-tx').Transaction;
let web3 = new Web3(new Web3.providers.HttpProvider('http://bcast1.net:30413'));
const sendToken = async (jdata) => {
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

cron.schedule('*/10 * * * * *', () => {
  let jdata1 = {
    senderaddress: '0xef9C90128e60f9F90e6d5eB10C69F4Cfdc01F9f9',
    // amount: '0.00192823123348952',
    amount: '1000000000000000000',
    rxaddr: '0x052D8b13fF06e02E148066842e766060A9EDB431',
    private_key:
      '0x972a9bf032808fe8af712ca8463f1e056f1af880088e0af65e329f744d98b8df',
  };
  let jdata2 = {
    senderaddress: '0x052D8b13fF06e02E148066842e766060A9EDB431',
    amount: '1000000000000000000',
    rxaddr: '0xef9C90128e60f9F90e6d5eB10C69F4Cfdc01F9f9',
    private_key:
      'bc1cd3d650705e07e257c9b3fd8a0f8f4b90127a5f591ea79e3c3eab5ebdc32b',
  };
  // setInterval(() => {
  //   sendToken(jdata2);
  // }, 15000);
  sendToken(jdata1);
});

module.exports = { sendToken };

// false &&
//   withdraw({
//     address: '0xef9C90128e60f9F90e6d5eB10C69F4Cfdc01F9f9', // sender address
//     private_key:
//       '6c38eb59e306653e005aefcea757bbd297f3ee70ac4242a7c9651881e47693a7',
//     amount: '2000000000000000000', // amount to send
//     rxaddr: '0x052D8b13fF06e02E148066842e766060A9EDB431', // receiver address
//   });

// var _hex_nonce = web3.utils.toHex(nonce);
// const rawTx = {
//   nonce: _hex_nonce,
//   from: MainAccountAddress,
//   to: contractaddress,
//   gasPrice: _hex_gasPrice,
//   gasLimit: _hex_gasLimit,
//   gas: _hex_Gas,
//   value: "0x0",
//   data: contract.methods.transfer(rxaddr, _hex_value).encodeABI(),
// };

// const tx = new Tx(rawTx, { chain: "ropsten" });
// tx.sign(privateKey);
// var serializedTx = "0x" + tx.serialize().toString("hex");
// web3.eth.sendSignedTransaction(
//   serializedTx.toString("hex"),
//   function (err, hash) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("$HASH", hash);
//     }
//   }
// );
// console.log("tx", serializedTx);

// const _gasLimit = "3000000";
// const _gasPrice = "250000";

// var _hex_gasLimit = web3.utils.toHex((_gasLimit + 1000000).toString());
// var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());
// var _hex_value = web3.utils.toHex(amt2sendwei);
// var _hex_Gas = web3.utils.toHex("60000");
// const Tx = require("@ethereumjs/tx").Transaction;
// const privateKey = Buffer.from(MainAccountPrivateKey, "hex");
