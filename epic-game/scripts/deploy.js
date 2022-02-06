const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Zero Two", "Toga", "John"],
    ["https://i.imgur.com/WRBEBGZ.jpeg",
    "https://i.imgur.com/ciDYIbJ.png", 
    "https://i.imgur.com/sPP2yrBb.jpg"],
    [200, 100, 450],
    [150, 200, 50],
    "Ramnaroo",
    "https://i.imgur.com/avGR8E3b.jpg",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();