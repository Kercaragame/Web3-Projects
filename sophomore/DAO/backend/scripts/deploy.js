const { ethers } = require("hardhat");

//* How to change this file
/*
- Fill in the `ContractName` with your contract name.
- Uncomment the verification process if you want to verify your contract but make sure to uncomment the same in the `hardhat.config.js` and change the values as required.

You can pass in values into your contract like doing the following :
ex : Asssume you have a string and a number to pass
` const lock = await Lock.deploy("hello", 5);`
*/

//* Sample Deployment
/*
  const Lock = await hre.ethers.getContractFactory("ContractName");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log("Contract Deployed to : ", lock.address);

  console.log("Sleeping...");
  await sleep(50000);
  await hre.run("verify:verify", {
    address: lock.address,
    constructorArguments: [],
  });
*/

const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

/**
 * Fake nft market place deployed to : 0x4c079f7A4098A8Ed9e1446aa0711467406eC8B45
 * CryptoDevsDAO deployed to : 0x1758cd9e208a448378B3861693631F46aaD66A50
 */
async function main() {
  // Write your deployment files here
  const FakeNFTMarketPlace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNFTMarketPlace = await FakeNFTMarketPlace.deploy();
  await fakeNFTMarketPlace.deployed();

  console.log(
    "Fake nft market place deployed to : " + fakeNFTMarketPlace.address
  );

  const CryptoDevsDAO = await ethers.getContractFactory(
    "CryptoDevsDAOContract"
  );
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNFTMarketPlace.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    {
      value: ethers.utils.parseEther("0.2"),
    }
  );
  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to : " + cryptoDevsDAO.address);
}

// Async Sleep function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
