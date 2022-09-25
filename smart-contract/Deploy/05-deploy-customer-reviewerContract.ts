import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployTreasuryContract: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const {getNamedAccounts, deployments, network}=  hre;
    const {deploy, log}= deployments;
    const {deployer}= await getNamedAccounts();

    log ("deploying customer-reviewer contract...");
    const  treasuryContract= await deploy("Treasury",{
    from: deployer,
    args: [],
    log: true
});

    log (`deployed treasuryContract at: ${treasuryContract.address}`)
    }


export default deployTreasuryContract;