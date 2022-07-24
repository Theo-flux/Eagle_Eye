import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deploygovernorContract: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const {getNamedAccounts, deployments, network}=  hre;
    const {deploy, log, get}= deployments;
    const {deployer}= await getNamedAccounts();
    const eagleToken= await get("EagleToken");
    const timelock= await get("Timelock");


    log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    log ("deploying our GovernorContract...");
    const governorContract= await deploy("GovernorContract", {
        from: deployer,
        args: [eagleToken.address, timelock.address],
        log: true
    })
    log (`deployed governor contract to ${governorContract.address}`)

    
    }


export default deploygovernorContract;