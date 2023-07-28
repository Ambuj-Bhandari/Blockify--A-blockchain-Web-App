require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/m9HW9ZCrqMSwAXi4srhawWGBeo80RkB6',
      accounts: ['d6deba594e8b39eb3a560f111599b0b904c9837362127912e9ca1200b6e55ad4'],
    },
  },
};