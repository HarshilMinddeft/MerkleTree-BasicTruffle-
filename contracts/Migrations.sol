// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

contract Migrations {
    address public initialOwner;
    uint256 public last_completed_migration;

    constructor(){
        initialOwner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == initialOwner) _;
    }

    function setCompleted(uint256 completed) public restricted {
        last_completed_migration = completed;
    }
}
