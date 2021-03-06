import fs from "fs";
import pinataSdk from "@pinata/sdk";
import path from "path";
import config from "./metadata-config.json";

const pinataClient = pinataSdk(
  process.env.PINATA_API_KEY!,
  process.env.PINATA_SECRET_API_KEY!
);

type NftConfig = {
  userAddress: string;
  fileName: string;
  rarity: string;
  fileTitle: string;
  description: string;
  collection: string;
  partnership: string;
};

async function prepareNfts() {
  const nftConfigs: NftConfig[] = config;

  const preparedNfts: { ipfs: string; user: string; transferred: boolean }[] =
    [];

  try {
    for (let nftConfig of nftConfigs) {
      const nftPath = path.join(__dirname, "nfts", nftConfig.fileName);
      console.log(`prepare ${nftConfig.fileName} for ${nftConfig.userAddress}`);
      const readableStreamForFile = fs.createReadStream(nftPath);
      const pinImageResponse = await pinataClient.pinFileToIPFS(
        readableStreamForFile
      );

      const {
        fileName,
        fileTitle,
        description,
        rarity,
        collection,
        partnership,
      } = nftConfig;

      const metadata = {
        name: fileTitle,
        description: description,
        image: `ipfs://${pinImageResponse.IpfsHash}`,
        fileName,
        rarity,
        collection,
        partnership,
      };
      const pinMetadataResponse = await pinataClient.pinJSONToIPFS(metadata, {
        pinataMetadata: {
          name: `${nftConfig.fileName.replace(".png", "")}_metadata`,
        },
      });
      console.log("response", JSON.stringify(pinMetadataResponse));
      preparedNfts.push({
        user: nftConfig.userAddress,
        ipfs: pinMetadataResponse.IpfsHash,
        transferred: false,
      });
    }
  } catch (error) {
    console.log("error preparing nfts, storing current results");
  } finally {
    fs.writeFileSync(
      path.join(__dirname, `prepared_nfts.json`),
      JSON.stringify(preparedNfts)
    );
  }
}

prepareNfts()
  .then(() => console.log("done"))
  .catch((error) => {
    console.error(error);
  });
