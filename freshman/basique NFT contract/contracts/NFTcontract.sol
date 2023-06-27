// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// NFTee is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract NFTEnzo is ERC721 {
    string _name;
    string _symb;

    constructor() ERC721(_name, _symb) {
        _mint(msg.sender, 1);
    }
}
