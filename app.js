let contract;

window.addEventListener('load', async () => {
    // Check if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('MetaMask is connected');
            
            const contractABI =[
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_convictName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_provision",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_state",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_place",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_crimeCommitted",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_convictionDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "_punishment",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_facts",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_ipfsHash",
                            "type": "string"
                        }
                    ],
                    "name": "addOffender",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "offenderAddress",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "convictName",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "provision",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "state",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "place",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "crimeCommitted",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "convictionDate",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "punishment",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "facts",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "ipfsHash",
                            "type": "string"
                        }
                    ],
                    "name": "OffenderAdded",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_offenderAddress",
                            "type": "address"
                        }
                    ],
                    "name": "getOffender",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_index",
                            "type": "uint256"
                        }
                    ],
                    "name": "getOffenderAddress",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "getOffendersCount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ];

            const contractAddress = '0xe7cfCcCb38cE07Ba9D8D13431afe8Cf6172DE031';  
            
            contract = new web3.eth.Contract(contractABI, contractAddress);
            console.log('Contract:', contract);
            
        } catch (error) {
            console.error('User denied account access:', error);
        }
    } else {
        // Fallback to localhost; use dev console port by default...
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        console.log('No web3 instance injected, using Local web3.');
        
        const contractABI =[
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_convictName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_provision",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_state",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_place",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_crimeCommitted",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_convictionDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_punishment",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_facts",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_ipfsHash",
                        "type": "string"
                    }
                ],
                "name": "addOffender",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "offenderAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "convictName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "provision",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "state",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "place",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "crimeCommitted",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "convictionDate",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "punishment",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "facts",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "ipfsHash",
                        "type": "string"
                    }
                ],
                "name": "OffenderAdded",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_offenderAddress",
                        "type": "address"
                    }
                ],
                "name": "getOffender",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "getOffenderAddress",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getOffendersCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
        
        const contractAddress = '0xe7cfCcCb38cE07Ba9D8D13431afe8Cf6172DE031';
        
        contract = new web3.eth.Contract(contractABI, contractAddress);
        console.log('Contract:', contract);
    }
});

async function addOffender() {
    const convictName = document.getElementById("convictNameInput").value;
    const provision = document.getElementById("provisionInput").value;
    const state = document.getElementById("stateInput").value;
    const place = document.getElementById("placeInput").value;
    const crimeCommitted = document.getElementById("crimeCommittedInput").value;
    const convictionDateInput = document.getElementById("convictionDateInput").value;
    const convictionDate = Math.floor(new Date(convictionDateInput).getTime() / 1000);
    const punishment = document.getElementById("punishmentInput").value;
    const facts = document.getElementById("factsInput").value;
    const ipfsHash = document.getElementById("ipfsHashInput").value;

    try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        if (!account) {
            console.error("No accounts found. Please ensure MetaMask is connected.");
            alert("No accounts found. Please ensure MetaMask is connected.");
            return;
        }

        const gas = await contract.methods.addOffender(convictName, provision, state,place, crimeCommitted, convictionDate, punishment, facts, ipfsHash).estimateGas({ from: account });

        contract.methods.addOffender(convictName, provision, state,place, crimeCommitted, convictionDate, punishment, facts, ipfsHash).send({ from: account, gas })
            .on('receipt', function(receipt) {
                console.log(receipt);
                alert("Offender added successfully!");
            })
            .on('error', function(error) {
                console.error("Error adding offender: ", error);
                alert("Error adding offender. Please try again.");
            });
    } catch (error) {
        console.error("An error occurred: ", error);
        alert("An error occurred. Please check the console for details.");
    }
}
const uniqueOffenderAddresses = new Set();


async function retrieveData() {
    try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        if (!account) {
            console.error("No accounts found. Please ensure MetaMask is connected.");
            return;
        }

        // Retrieve the number of offenders
        const offendersCountBigInt = await contract.methods.getOffendersCount().call();
        const offendersCount = Number(offendersCountBigInt); // Convert BigInt to number
        
        // Create a Set to store unique offender addresses
        const uniqueOffenderAddresses = new Set();

        // Loop through all offenders and add their addresses to the set
        for (let i = 0; i < offendersCount; i++) {
            const offenderAddress = await contract.methods.getOffenderAddress(i).call();
            uniqueOffenderAddresses.add(offenderAddress);
        }

        // Loop through unique offender addresses and fetch their data
        for (const offenderAddress of uniqueOffenderAddresses) {
            const offenderData = await contract.methods.getOffender(offenderAddress).call();

            const convictName = offenderData[0];
            const provision = offenderData[1];
            const state = offenderData[2];
            const place = offenderData[3];
            const crimeCommitted = offenderData[4];
            const convictionDate = new Date(Number(offenderData[5]) * 1000).toLocaleDateString(); // Convert BigInt to number and then to date
            const punishment = offenderData[6];
            const facts = offenderData[7];
            const ipfsHash = offenderData[8];

            console.log(`Offender: ${convictName}`);
            console.log(`  Provision: ${provision}`);
            console.log(`  State: ${state}`);
            console.log(`  Place: ${place}`);
            console.log(`  Crime Committed: ${crimeCommitted}`);
            console.log(`  Conviction Date: ${convictionDate}`);
            console.log(`  Punishment: ${punishment}`);
            console.log(`  Facts: ${facts}`);
            console.log(`  IPFS Hash: ${ipfsHash}`);

            // Display the data on the web page
            const offenderList = document.getElementById("offenderList");
            const offenderItem = document.createElement("li");
            offenderItem.textContent = `Convict Name: ${convictName}, Provision: ${provision}, State: ${state}, Place: ${place}, Crime Committed: ${crimeCommitted}, Conviction Date: ${convictionDate}, Punishment: ${punishment}, Facts: ${facts}, IPFS Hash: ${ipfsHash}`;
            offenderList.appendChild(offenderItem);
        }
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}


