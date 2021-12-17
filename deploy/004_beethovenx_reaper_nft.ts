import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function ({
  ethers,
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const { address, args, receipt } = await deploy(
    "CollabsAndConspiraciesByBeethovenXAndReaper",
    {
      from: deployer,
      log: true,
      deterministicDeployment: false,
    }
  );
}
