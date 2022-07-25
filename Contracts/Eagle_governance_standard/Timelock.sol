//We want to wait for a new vote to be executed

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract Timelock is TimelockController{
    //minDElay: How long to wait before executing 
    //proposers: who can propose?
    //executors: who can executes?
    constructor (
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
    )TimelockController(minDelay, proposers, executors) {}

}