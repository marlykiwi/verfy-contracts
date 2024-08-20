// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Verfy {
    struct Data {
        string hashHex;
        string publicKey;
        string signature;
    }

    mapping(string => Data) public hashHexToData;

    function set(string calldata _hashHex, string calldata _publicKey, string calldata _signature) public {
        Data memory data;
        data.hashHex = _hashHex;
        data.publicKey = _publicKey;
        data.signature = _signature;

        hashHexToData[_hashHex] = data;
    }

    function get(string memory _hashHex) public view returns (Data memory) {
        return hashHexToData[_hashHex];
    }
}
