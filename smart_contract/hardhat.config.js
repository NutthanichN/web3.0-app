require('@nomiclabs/hardhat-waffle');

// https://hardhat.org/guides/create-task.html

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/eFJs4GzsnYa_nW1bG3A67aPKxQk38SGN',
      accounts: ['']
    }
  }
};
