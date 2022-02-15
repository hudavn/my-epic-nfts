require('@nomiclabs/hardhat-waffle');
require("dotenv").config();

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: process.env.STAG_ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}