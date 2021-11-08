import { ethers } from "hardhat";
import { BeethovenxEarlyLudwigsNft } from "../types";
import fs from "fs";
import path from "path";


async function exportOwners() {

  const nftContract = (await ethers.getContractAt(
    "BeethovenxEarlyLudwigsNft",
    "0xf2558d6a252C1041a3902870B1FdB0B7524B3098"
  )) as BeethovenxEarlyLudwigsNft;

  const owners: string[] = []
  for (let i = 0; i < 494; i++) {
      const owner = await nftContract.ownerOf(i);
      owners.push(owner)
  }

  fs.writeFileSync(
    path.join(__dirname, `earlyLudwigOwners.json`),
    JSON.stringify(owners)
  );
}

exportOwners().then(() => console.log('done')).catch(error => console.error(error))
