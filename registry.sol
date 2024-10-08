// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OffenderRegistry {
    struct Offender {
        string convictName;
        string provision;
        string state;
        string place;
        string crimeCommitted;
        uint256 convictionDate;
        string punishment;
        string facts;
        string ipfsHash; // IPFS hash for additional documents/images
        address offenderAddress;
    }

    Offender[] public offenders;

    event OffenderAdded(
        address indexed offenderAddress, 
        string convictName, 
        string provision, 
        string state, 
        string place, 
        string crimeCommitted, 
        uint256 convictionDate, 
        string punishment, 
        string facts, 
        string ipfsHash
    );

    function addOffender(
        string memory _convictName,
        string memory _provision,
        string memory _state,
        string memory _place,
        string memory _crimeCommitted,
        uint256 _convictionDate,
        string memory _punishment,
        string memory _facts,
        string memory _ipfsHash
    ) public {
        require(bytes(_convictName).length > 0, "Convict name cannot be empty");
        require(bytes(_provision).length > 0, "Provision cannot be empty");
        require(bytes(_state).length > 0, "State cannot be empty");
        require(bytes(_place).length > 0, "Place cannot be empty");
        require(bytes(_crimeCommitted).length > 0, "Crime committed cannot be empty");
        require(_convictionDate > 0, "Invalid conviction date");
        require(bytes(_punishment).length > 0, "Punishment cannot be empty");
        require(bytes(_facts).length > 0, "Facts cannot be empty");

        Offender memory newOffender = Offender({
            convictName: _convictName,
            provision: _provision,
            state: _state,
            place: _place,
            crimeCommitted: _crimeCommitted,
            convictionDate: _convictionDate,
            punishment: _punishment,
            facts: _facts,
            ipfsHash: _ipfsHash,
            offenderAddress: msg.sender
        });

        offenders.push(newOffender);

        emit OffenderAdded(msg.sender, _convictName, _provision, _state, _place, _crimeCommitted, _convictionDate, _punishment, _facts, _ipfsHash);
    }

    function getOffender(uint256 _index) public view returns (
        string memory, 
        string memory, 
        string memory, 
        string memory, 
        string memory, 
        uint256, 
        string memory, 
        string memory, 
        string memory
    ) {
        require(_index < offenders.length, "Invalid index");
        Offender memory offender = offenders[_index];
        return (
            offender.convictName, 
            offender.provision, 
            offender.state, 
            offender.place, 
            offender.crimeCommitted, 
            offender.convictionDate, 
            offender.punishment, 
            offender.facts, 
            offender.ipfsHash
        );
    }

    function getOffendersCount() public view returns (uint256) {
        return offenders.length;
    }

    function getOffenderAddress(uint256 _index) public view returns (address) {
        require(_index < offenders.length, "Invalid index");
        return offenders[_index].offenderAddress;
    }
}