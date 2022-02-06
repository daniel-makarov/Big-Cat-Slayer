require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/-8lRnTx2kfKYsrsK_Hwi0J3Xjs926UyQ',
      accounts: ['52f27af6435b30bd888bc2a406cb53211b475d76db55a711801a50c6b5ac2b04'],
    },
  },
};
