import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("YourCollectible");
  const c = await contract.deploy("Your Collectable", "YCB");

  await c.deployed();

  console.log("Contract deployed to:", c.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });