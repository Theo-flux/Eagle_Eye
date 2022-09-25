import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployTimelock: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const {getNamedAccounts, deployments, network}=  hre;
    const {deploy, log}= deployments;
    const {deployer}= await getNamedAccounts();

    log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    log ("Deploying Timelock contract...");
    const timelock= await deploy("Timelock", {
        from: deployer,
        args: [10, [], []],
        log: true
    })
    log (`deployed Timelock to ${timelock.address}`)

    
    }


export default deployTimelock;