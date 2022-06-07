require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/R3-swUVSNsT7AGrenV51CWEl5S3uqOwV",
      accounts: [
        "f715d917c2bd150cb3088b00d9d3bb96093072de6ef31c870346d4e26a0c961a",
      ],
    },
  },
};
