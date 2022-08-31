import { task } from "hardhat/config";
// import "@nomiclabs/hardhat-waffle";
import 'hardhat-watcher';
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import dotenv from "dotenv"
dotenv.config()


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  watcher: {
    compilation: {
      tasks: ['compile'],
    },
    node: {
      tasks: ['node'],
    },
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/1dc931d842b449c0a674b754ee15aafd",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    },
    matic: {
      url: "https://polygon-rpc.com/",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    },
    matic_mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};
