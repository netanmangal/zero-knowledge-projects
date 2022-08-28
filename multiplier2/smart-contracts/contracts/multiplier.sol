// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.11;

interface IVerifier {
    function verifyProof(
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[1] memory input
        ) external view returns (bool);
}

contract Multiplier {
    mapping(string => bool) public knowsMultiples;
    IVerifier public verifier;

    constructor(address verifier_) {
        verifier = IVerifier(verifier_);
    }

    function iKnowMultipliers(
            string memory name_, 
            uint[2] memory a_, 
            uint[2][2] memory b_, 
            uint[2] memory c_, 
            uint[1] memory input_
        ) public {

        require(
            knowsMultiples[name_] == false,
            "You already knows the multiples"
        );

        require(
            verifier.verifyProof(a_, b_, c_, input_), 
            "Invalid proof"
        );

        knowsMultiples[name_] = true;
    }
}