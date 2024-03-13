// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    address private initialOwner;
    constructor() ERC20("Airdrop", "Airdrop") {
        initialOwner = msg.sender;
    }

    function mint(address account, uint256 amount) public {
        require(msg.sender == initialOwner, "Token: only owner can mint.");
        _mint(account, amount);
    }
}
