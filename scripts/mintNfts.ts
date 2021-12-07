import fs from "fs";
import { ethers, network } from "hardhat";
import { BeethovenxEarlyLudwigsNft } from "../types";
import path from "path";
import userMapping from "./earlyLudwigsByUser.json";

async function mintNfts() {
  console.log("network: ", network.name);
  const preparedNfts: {
    ipfs: string;
    transferred: boolean;
    user: string;
    txHash?: string;
  }[] = userMapping;

  const nftContract = (await ethers.getContractAt(
    "BeethovenxEarlyLudwigsNft",
    "0xf2558d6a252C1041a3902870B1FdB0B7524B3098"
  )) as BeethovenxEarlyLudwigsNft;

  for (let nftConfig of preparedNfts) {
    if (!nftConfig.transferred) {
      console.log(
        `minting ipfs ${nftConfig.ipfs} for user ${nftConfig.user}....`
      );
      const transaction = await nftContract.mint(
        nftConfig.user,
        `ipfs://${nftConfig.ipfs}`
      );
      const receipt = await transaction.wait();
      console.log("Done with tx: ", receipt.transactionHash);
      nftConfig.transferred = true;
      nftConfig.txHash = receipt.transactionHash;
      console.log("saving to file");

      fs.writeFileSync(
        path.join(__dirname, `earlyLudwigsByUser.json`),
        JSON.stringify(preparedNfts)
      );
      console.log("done");
    }
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }
}

mintNfts()
  .then(() => console.log("done"))
  .catch((error) => {
    console.error(error);
  });
