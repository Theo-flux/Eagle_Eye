import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const setupGovernancecontracts: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const {getNamedAccounts, deployments, network}=  hre;
    const {deploy, log}= deployments;
    const {deployer}= await getNamedAccounts();
    const timelock= await ethers.getContract("Timelock", deployer)
    const governor= await ethers.getContract("GovernorContract", deployer)


    log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    log("setting up roles....")

    const proposerRole= await timelock.PROPOSER_ROLE()
    const executorRole= await timelock.EXECUTOR_ROLE()
    const adminRole= await timelock.TIMELOCK_ADMIN_ROLE()
    
    const proposerTX= await timelock.grantRole(proposerRole, governor.address)
    await proposerTX.wait(1)
    const executorTX= await timelock.grantRole(executorRole, "0x0000000000000000000000000000000000000000")
    await executorTX.wait(1)
    const revokeTX= await timelock.revokeRole(adminRole, deployer)
    await revokeTX.wait(1)

    
    }


export default setupGovernancecontracts ;