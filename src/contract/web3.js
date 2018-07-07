import Web3 from 'web3';
import ABI from '@/contract/bancor.json';
import Promise from 'bluebird';

const web3Provider = window.web3 ? window.web3.currentProvider : null;
const web3 = web3Provider
  ? new Web3(web3Provider)
  : new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/DQtbJQhdBnp43bneIiqp"));//config.defaultNetwork.rpc));

web3.eth.defaultAccount = web3.eth.accounts[0];
var contractat = '0x7e1bb814755e5e793ae40eb27473ef04f003c2e7';
var contract = web3.eth.contract(ABI).at(contractat);

export const buy = (amount) => new Promise((resolve, reject) => {
    contract.buy(amount,{
        value: 0,
        gasPrice: 1000000000 * 5
    },
    (err, result) => (err ? reject(err) : resolve(result)));
});
export const sell = (amount) => new Promise((resolve, reject) => {
    contract.sell(amount,{
        value: 0,
        gasPrice: 1000000000 * 5
    },
    (err, result) => (err ? reject(err) : resolve(result)));
});

export const getprice = async () => {
    return await Promise.promisify(contract.price)();
}