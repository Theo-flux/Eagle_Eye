import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployGovernanceToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const {getNamedAccounts, deployments, network}=  hre;
    const {deploy, log}= deployments;
    const {deployer}= await getNamedAccounts();

    log ("deploying Eagle Token...");
    const eagleToken= await deploy("EagleToken", {
        from: deployer,
        args: [],
        log: true
    })
    log (`deployed Eagle Token to ${eagleToken.address}`)

    
    }


export default deployGovernanceToken;