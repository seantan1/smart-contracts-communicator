import React, { useState } from 'react';
import './App.css';
import Web3 from '../node_modules/web3';
import detectEthereumProvider from '@metamask/detect-provider';

// import constants
import {
    TOKEN_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from './contractData.js';

function App() {

    // user
    const [account, setAccount] = useState('');
    const [authorised, setAuthorised] = useState(false);

    const executeContract = () => {
        let web3 = new Web3(window.ethereum);
        let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);

        let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

        let amount = web3.utils.toWei('10000000', 'ether');

        // var amount_float = new Unit(parseFloat(amount)).asEther().toWei().toString();
        // gas value
        // const gas = 6721900;

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

        // contractVault.methods.reduceRating('0x03eE38AB1896Fbd78700F398F6839a5B2787bD0E',amount).send({
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
        contractVault.methods.rewardRating("0x03eE38AB1896Fbd78700F398F6839a5B2787bD0E", amount).send({
            from: account
        }).then(function(result) {
            console.log(result);
        });

        // reduce rating
        // contractVault.methods.reduceRating("0x03eE38AB1896Fbd78700F398F6839a5B2787bD0E", amount).send({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // get rating
        // contractVault.methods.getRatingValueByAddress("0x03eE38AB1896Fbd78700F398F6839a5B2787bD0E").call({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
        // });

        // getDepositsByOwner
        // contractVault.methods.getDepositById(10).call({
        //     from: account
        // }).then(function(result) {
        //     console.log(result);
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
