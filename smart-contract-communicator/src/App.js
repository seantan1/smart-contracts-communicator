import React, { useState } from 'react';
import './App.css';
import Web3 from '../node_modules/web3';
import detectEthereumProvider from '@metamask/detect-provider';

// import constants
import {
    TOKEN_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    MULTICALL_CONTRACT_ADDRESS,
    MULTICALL_CONTRACT_ABI
} from './contractData.js';

function App() {

    // user
    const [account, setAccount] = useState('');
    const [authorised, setAuthorised] = useState(false);

    const executeContract = () => {
        let web3 = new Web3(window.ethereum);
        let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);


        let contractMulti = new web3.eth.Contract(MULTICALL_CONTRACT_ABI, MULTICALL_CONTRACT_ADDRESS);

        let amount = web3.utils.toWei('0.01', 'ether');

        contract.methods.addAdminAddress('0x00E7629989EFe8CdB01A01e7F0b5042dAa98C406').send({
            from: account
        })
        .then(function (result) {
            console.log(result);
        });

        // contractMulti.methods.setNFTContractAddress(TOKEN_CONTRACT_ADDRESS).send({
        //     from: account
        // })
        // .then(function (result) {
        //     console.log(result);
        // });

        // var amount_float = new Unit(parseFloat(amount)).asEther().toWei().toString();
        // gas value
        // const gas = 6721900;

        // web3.eth.getTransactionReceipt('0x53d82d4d8a8def1a9d00d8ffb4203a30af4fc2f76c82a4aea07f59946da89827')
        //     .then(function (result) {
        //         console.log(result.status);
        //     });

        // add admin
        // contract.methods.addAdminAddress('0x6aa016A1532A90A5537FC844F5822B63c5764D16').send({
        //     from: account
        // })
        // .on('transactionHash', function (hash) {
        //     console.log(hash);
        // });

        // mint token
        // contract.methods.mint('0x8f47F1ce13AC5F291Cb045a08Df8214F5B667ada', '001', '002').send({
        //     from: account
        // })
        // .on('transactionHash', function (hash) {
        //     console.log(hash);
        // });

        // listNFTOnMarket
        // contract.methods.listNFTOnMarket(2, amount).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // multiCallNFTsOnMarket
        // contractMulti.methods.multiCallNFTsOnMarket().call()
        // .then(function(result) {
        //     console.log(result);
        // });

        // multiCallNFTsOnMarket by seller
        // contractMulti.methods.multiCallNFTsOnMarket(account).call()
        // .then(function(result) {
        //     console.log(result);
        // });

        // contract.methods.NFTsOnMarketByAddress(account).call()
        // .then(function(result) {
        //     console.log(result);
        // });

        // contractMulti.methods.multiCallTransactionDataByUser(account).call()
        // .then(function(result) {
        //     console.log(result);
        // });

        // purchaseNFT
        // contract.methods.purchaseNFT(1).send({
        //     from: account,
        //     value: amount
        // }).then(function(result) {
        //     console.log(result);
        // });

        // STARTUP, add vault and liquidity pool to exclusion
        // addToExcludeFromSlashFee
        // contract.methods.addToExcludeFromSlashFee(VAULT_CONTRACT_ADDRESS).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });
        // addToExcludeFromSlashFee
        // contract.methods.addToExcludeFromSlashFee('0x28f36903cfdf34bba0ec5b9b7dd0e5db39a73ba4').send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // addToAuthorisedContracts
        // contract.methods.addToAuthorisedContracts(VAULT_CONTRACT_ADDRESS).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // setTokenContractInstance
        // contractVault.methods.setTokenContractInstance(TOKEN_CONTRACT_ADDRESS).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // vault addToAuthorisedContracts
        // contractVault.methods.addToAuthorisedContracts('0xEDEFA97721F659b5120B359f11372f0C0AB361a7').send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });
        // END OF STARTUP

        // addToExcludeFromSlashFee
        // contract.methods.addToExcludeFromSlashFee('0x52Dd24b1ee7FD49b325C7a08287C0f6802410313').send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // contractVault.methods.reduceRating('0xEDEFA97721F659b5120B359f11372f0C0AB361a7',amount).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // setTxLimit
        // contract.methods.setTxLimit(amount).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // get symbol
        // contract.methods.symbol().call().then(function(result) {
        //     console.log(result);
        // });

        // set slash fee
        // contract.methods.setSlashFeePercent(30).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // approve
        // contract.methods.approve(VAULT_CONTRACT_ADDRESS, amount).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });



        // create deposit
        // contractVault.methods.createDeposit(31, amount).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // distributeRewards
        // contractVault.methods.distributeRewards().send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // reward rating
        // contractVault.methods.rewardRating("0xEDEFA97721F659b5120B359f11372f0C0AB361a7", amount).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // reduce rating
        // contractVault.methods.reduceRating("0x03eE38AB1896Fbd78700F398F6839a5B2787bD0E", amount).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // get rating
        // contractVault.methods.getRatingValueByAddress("0x9a39a3a32a2726d5202da9b9ac04c6125a29d1ef").call({
        //     from: account
        // }).then(function(result) {
        //     console.log(web3.utils.fromWei(result));
        // });

        // contractVault.methods.getRewardSharePercentage("0x9a39a3a32a2726d5202da9b9ac04c6125a29d1ef").call().then(function (result) {
        //     // console.log("result");
        //     // console.log(result);
        //     let rewardShare = result / 10000000;
        //     console.log(rewardShare);
        // });

        // getDepositsByOwner
        // contractVault.methods.getDepositsByOwner('0x9a39a3a32a2726d5202da9b9ac04c6125a29d1ef').call({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // getDepositById
        // contractVault.methods.getDepositById(18).call({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        //     console.log("token amount: "+web3.utils.fromWei(result[2]));
        // });

        // getOwnerDepositCount
        // contractVault.methods.getOwnerAddressByDepositId(10).call({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // getDepositById
        // contractVault.methods.getDepositById(0).call({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // getDistributeRewardBounty
        // contractVault.methods.totalRating().call().then(function(result) {
        //     console.log(result);
        // });

        // isExcludeFromSlashFee
        // contract.methods.isExcludeFromSlashFee("0x67C129e1Ed62F0169971002799767A317758111D").call({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // isAuthorisedContract
        // contract.methods.isAuthorisedContract(VAULT_CONTRACT_ADDRESS).call({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });
    }

    // metamask accounts change handler
    const handleAccountsChanged = accounts => {
        if (accounts.length === 0) {
            // console.error('Not found accounts');
        } else {
            setAccount(accounts[0]);
            console.log('address: ' + account);
        }
    };

    // metamask sign in handler
    const signInMetamask = async () => {
        const provider = await detectEthereumProvider();

        // @ts-ignore
        if (provider !== window.ethereum) {
            console.error('Do you have multiple wallets installed?');
        }

        if (!provider) {
            console.error('Metamask not found');
            return;
        }

        // MetaMask events
        provider.on('accountsChanged', handleAccountsChanged);

        provider.on('disconnect', () => {
            // console.log('disconnect');
            setAuthorised(false);
            setAccount('');
            attemptMetamaskConnection(provider);

        });

        provider.on('chainIdChanged', (chainId) => {
            // console.log('chainIdChanged', chainId);
            setAuthorised(false);
            setAccount('');
        });

        // detect Network account change
        provider.on('networkChanged', (networkId) => {
            console.log('networkChanged', networkId);
            setAuthorised(false);
            setAccount('');
        });

        attemptMetamaskConnection(provider);
    };

    // metamask attempt connection function
    const attemptMetamaskConnection = (provider) => {
        provider.request({ method: 'eth_requestAccounts' })
            .then(async params => {
                handleAccountsChanged(params);
                setAuthorised(true);
            })
            .catch(err => {
                setAuthorised(false);

                if (err.code === 4001) {
                    // console.error('Please connect to MetaMask.');
                } else {
                    // console.error(err);
                }
            });
    }


    return (
        <div className="App">
            <div className="connect-wallet-button-container">
                {!authorised && <button className="connect-wallet-button" onClick={signInMetamask}>Connect Wallet</button>}
                {authorised && <button className="connect-wallet-button">{account.substring(0, 11)}...</button>}
            </div>
            <button onClick={executeContract}>Execute</button>
        </div>
    );
}

export default App;
