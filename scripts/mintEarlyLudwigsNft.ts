import pinataSdk from "@pinata/sdk";
import { ethers } from "hardhat";
import { BeethovenxEarlyLudwigsNft } from "../types";

const pinataClient = pinataSdk(
  process.env.PINATA_API_KEY!,
  process.env.PINATA_SECRET_API_KEY!
);

type NftConfig = {
  user: string;
  imagePath: string;
  imageName: string;
  imageDescription: string;
};

async function mintLpNfts() {
  const nftConfigs: NftConfig[] = [];

  const earlyLudwigs = (await ethers.getContractAt(
    "BeethovenxEarlyLudwigsNft",
    "0x"
  )) as BeethovenxEarlyLudwigsNft;

  for (let nftConfig of nftConfigs) {
  }

  earlyLudwigs.mint("user", "tokenUri");
}
