import fs from "fs";
import { ethers, network } from "hardhat";
import { BeethovenxPartnerNft } from "../types";
import path from "path";
import userMapping from "./prepared_nfts.json";

async function mintNfts() {
  console.log("network: ", network.name);
  const preparedNfts: {
    ipfs: string;
    transferred: boolean;
    user: string;
    txHash?: string;
  }[] = userMapping;

  const nftContract = (await ethers.getContractAt(
    "BeethovenxPartnerNft",
    "0x07FE1B2242D376234c46648A1a5dF3795cD81ea3"
  )) as BeethovenxPartnerNft;

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
