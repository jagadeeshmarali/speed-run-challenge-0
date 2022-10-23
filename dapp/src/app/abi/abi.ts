export const abi = {
  "_format": "hh-sol-artifact-1",
  "contractName": "YourCollectible",
  "sourceName": "contracts/your-collectables.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "file_type",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address payable",
          "name": "uploader",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "created_at",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "updated_at",
          "type": "uint256"
        }
      ],
      "name": "FileUploaded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "files",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "file_type",
          "type": "string"
        },
        {
          "internalType": "address payable",
          "name": "uploader",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "created_at",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "updated_at",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "filesCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
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
      "name": "getMyFiles",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "hash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "size",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "file_type",
              "type": "string"
            },
            {
              "internalType": "address payable",
              "name": "uploader",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "created_at",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updated_at",
              "type": "uint256"
            }
          ],
          "internalType": "struct Upload.File[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMyFilesCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "filesCount",
          "type": "uint256"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "mintItem",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
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
      "inputs": [],
      "name": "owner",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
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
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_hash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_size",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_type",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        }
      ],
      "name": "uploadFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50614998806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806370a08231116100de578063b119490e11610097578063c87b56dd11610071578063c87b56dd1461049d578063dfb5e9ba146104cd578063e985e9c5146104eb578063f2fde38b1461051b5761018e565b8063b119490e14610449578063b51efc6f14610465578063b88d4fde146104815761018e565b806370a0823114610399578063715018a6146103c95780638da5cb5b146103d357806390a4b0df146103f157806395d89b411461040f578063a22cb4651461042d5761018e565b806323b872dd1161014b57806342842e0e1161012557806342842e0e146102ff5780634f6ccce71461031b578063526774101461034b5780636352211e146103695761018e565b806323b872dd1461027b5780632ba6978e146102975780632f745c59146102cf5761018e565b806301ffc9a71461019357806306fdde03146101c3578063081812fc146101e1578063095ea7b314610211578063110bcd451461022d57806318160ddd1461025d575b600080fd5b6101ad60048036038101906101a8919061356f565b610537565b6040516101ba9190613d0b565b60405180910390f35b6101cb610549565b6040516101d89190613d41565b60405180910390f35b6101fb60048036038101906101f69190613717565b6105db565b6040516102089190613c82565b60405180910390f35b61022b60048036038101906102269190613533565b610621565b005b610247600480360381019061024291906134df565b610739565b6040516102549190613fa3565b60405180910390f35b610265610773565b6040516102729190613fa3565b60405180910390f35b610295600480360381019061029091906133d9565b610780565b005b6102b160048036038101906102ac9190613533565b6107e0565b6040516102c699989796959493929190613fbe565b60405180910390f35b6102e960048036038101906102e49190613533565b610a8c565b6040516102f69190613fa3565b60405180910390f35b610319600480360381019061031491906133d9565b610b31565b005b61033560048036038101906103309190613717565b610b51565b6040516103429190613fa3565b60405180910390f35b610353610be8565b6040516103609190613fa3565b60405180910390f35b610383600480360381019061037e9190613717565b610c33565b6040516103909190613c82565b60405180910390f35b6103b360048036038101906103ae9190613374565b610cba565b6040516103c09190613fa3565b60405180910390f35b6103d1610d72565b005b6103db610d86565b6040516103e89190613c82565b60405180910390f35b6103f9610db0565b6040516104069190613ce9565b60405180910390f35b610417611114565b6040516104249190613d41565b60405180910390f35b610447600480360381019061044291906134a3565b6111a6565b005b610463600480360381019061045e91906135c1565b6111bc565b005b61047f600480360381019061047a9190613640565b611307565b005b61049b60048036038101906104969190613428565b6115e7565b005b6104b760048036038101906104b29190613717565b611649565b6040516104c49190613d41565b60405180910390f35b6104d561165b565b6040516104e29190613fa3565b60405180910390f35b6105056004803603810190610500919061339d565b611662565b6040516105129190613d0b565b60405180910390f35b61053560048036038101906105309190613374565b6116f6565b005b60006105428261177a565b9050919050565b606060658054610558906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610584906142ec565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b5050505050905090565b60006105e6826117f4565b6069600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061062c82610c33565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561069d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069490613f23565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106bc61183f565b73ffffffffffffffffffffffffffffffffffffffff1614806106eb57506106ea816106e561183f565b611662565b5b61072a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072190613f43565b60405180910390fd5b6107348383611847565b505050565b6000610746610130611900565b6000610753610130611916565b905061075f8482611924565b6107698184611942565b8091505092915050565b6000609980549050905090565b61079161078b61183f565b826119b6565b6107d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c790613d63565b60405180910390fd5b6107db838383611a4b565b505050565b61012e60205281600052604060002081815481106107fd57600080fd5b906000526020600020906009020160009150915050806000015490806001018054610827906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610853906142ec565b80156108a05780601f10610875576101008083540402835291602001916108a0565b820191906000526020600020905b81548152906001019060200180831161088357829003601f168201915b5050505050908060020180546108b5906142ec565b80601f01602080910402602001604051908101604052809291908181526020018280546108e1906142ec565b801561092e5780601f106109035761010080835404028352916020019161092e565b820191906000526020600020905b81548152906001019060200180831161091157829003601f168201915b505050505090806003018054610943906142ec565b80601f016020809104026020016040519081016040528092919081815260200182805461096f906142ec565b80156109bc5780601f10610991576101008083540402835291602001916109bc565b820191906000526020600020905b81548152906001019060200180831161099f57829003601f168201915b5050505050908060040154908060050180546109d7906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610a03906142ec565b8015610a505780601f10610a2557610100808354040283529160200191610a50565b820191906000526020600020905b815481529060010190602001808311610a3357829003601f168201915b5050505050908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154908060080154905089565b6000610a9783610cba565b8210610ad8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acf90613d83565b60405180910390fd5b609760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610b4c838383604051806020016040528060008152506115e7565b505050565b6000610b5b610773565b8210610b9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9390613f63565b60405180910390fd5b60998281548110610bd6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b600061012e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905090565b600080610c3f83611d41565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca890613f03565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2290613e63565b60405180910390fd5b606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610d7a611d7e565b610d846000611dfc565b565b600060fb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606061012e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561110b57838290600052602060002090600902016040518061012001604052908160008201548152602001600182018054610e50906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7c906142ec565b8015610ec95780601f10610e9e57610100808354040283529160200191610ec9565b820191906000526020600020905b815481529060010190602001808311610eac57829003601f168201915b50505050508152602001600282018054610ee2906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0e906142ec565b8015610f5b5780601f10610f3057610100808354040283529160200191610f5b565b820191906000526020600020905b815481529060010190602001808311610f3e57829003601f168201915b50505050508152602001600382018054610f74906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610fa0906142ec565b8015610fed5780601f10610fc257610100808354040283529160200191610fed565b820191906000526020600020905b815481529060010190602001808311610fd057829003601f168201915b5050505050815260200160048201548152602001600582018054611010906142ec565b80601f016020809104026020016040519081016040528092919081815260200182805461103c906142ec565b80156110895780601f1061105e57610100808354040283529160200191611089565b820191906000526020600020905b81548152906001019060200180831161106c57829003601f168201915b505050505081526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016007820154815260200160088201548152505081526020019060010190610e12565b50505050905090565b606060668054611123906142ec565b80601f016020809104026020016040519081016040528092919081815260200182805461114f906142ec565b801561119c5780601f106111715761010080835404028352916020019161119c565b820191906000526020600020905b81548152906001019060200180831161117f57829003601f168201915b5050505050905090565b6111b86111b161183f565b8383611ec2565b5050565b60008060019054906101000a900460ff161590508080156111ed5750600160008054906101000a900460ff1660ff16105b8061121a57506111fc3061202f565b1580156112195750600160008054906101000a900460ff1660ff16145b5b611259576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125090613ea3565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015611296576001600060016101000a81548160ff0219169083151502179055505b6112a08484612052565b6112a86120af565b80156113015760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516112f89190613d26565b60405180910390a15b50505050565b600085511161131557600080fd5b600084511161132357600080fd5b600082511161133157600080fd5b600081511161133f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561137957600080fd5b6000831161138657600080fd5b6000600161012e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506113d8919061417b565b905061012e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518061012001604052808381526020018781526020018881526020018481526020018681526020018581526020013373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020014281525090806001815401808255809150506001900390600052602060002090600902016000909190919091506000820151816000015560208201518160010190805190602001906114bf929190613198565b5060408201518160020190805190602001906114dc929190613198565b5060608201518160030190805190602001906114f9929190613198565b506080820151816004015560a0820151816005019080519060200190611520929190613198565b5060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e082015181600701556101008201518160080155505061012d60008154809291906115939061434f565b91905055507fa68037b095bd3be1232831fe9b3f92d3e66940b872ea82bf5e0da5eb99aa7def8186888588883342426040516115d799989796959493929190613fbe565b60405180910390a1505050505050565b6115f86115f261183f565b836119b6565b611637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162e90613d63565b60405180910390fd5b61164384848484612108565b50505050565b606061165482612164565b9050919050565b61012d5481565b6000606a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6116fe611d7e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561176e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176590613dc3565b60405180910390fd5b61177781611dfc565b50565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806117ed57506117ec82612277565b5b9050919050565b6117fd81612359565b61183c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183390613f03565b60405180910390fd5b50565b600033905090565b816069600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166118ba83610c33565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001816000016000828254019250508190555050565b600081600001549050919050565b61193e82826040518060200160405280600081525061239a565b5050565b61194b82612359565b61198a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198190613e83565b60405180910390fd5b8060c9600084815260200190815260200160002090805190602001906119b1929190613198565b505050565b6000806119c283610c33565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611a045750611a038185611662565b5b80611a4257508373ffffffffffffffffffffffffffffffffffffffff16611a2a846105db565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611a6b82610c33565b73ffffffffffffffffffffffffffffffffffffffff1614611ac1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ab890613de3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2890613e23565b60405180910390fd5b611b3c8383836123f5565b8273ffffffffffffffffffffffffffffffffffffffff16611b5c82610c33565b73ffffffffffffffffffffffffffffffffffffffff1614611bb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba990613de3565b60405180910390fd5b6069600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001606860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611d3c838383612405565b505050565b60006067600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b611d8661183f565b73ffffffffffffffffffffffffffffffffffffffff16611da4610d86565b73ffffffffffffffffffffffffffffffffffffffff1614611dfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611df190613ee3565b60405180910390fd5b565b600060fb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160fb60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611f31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f2890613e43565b60405180910390fd5b80606a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516120229190613d0b565b60405180910390a3505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff166120a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209890613f83565b60405180910390fd5b6120ab828261240a565b5050565b600060019054906101000a900460ff166120fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120f590613f83565b60405180910390fd5b61210661248b565b565b612113848484611a4b565b61211f848484846124ec565b61215e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161215590613da3565b60405180910390fd5b50505050565b606061216f826117f4565b600060c96000848152602001908152602001600020805461218f906142ec565b80601f01602080910402602001604051908101604052809291908181526020018280546121bb906142ec565b80156122085780601f106121dd57610100808354040283529160200191612208565b820191906000526020600020905b8154815290600101906020018083116121eb57829003601f168201915b505050505090506000612219612683565b905060008151141561222f578192505050612272565b60008251111561226457808260405160200161224c929190613c5e565b60405160208183030381529060405292505050612272565b61226d846126c0565b925050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061234257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80612352575061235182612728565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661237b83611d41565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6123a48383612792565b6123b160008484846124ec565b6123f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123e790613da3565b60405180910390fd5b505050565b6124008383836129ac565b505050565b505050565b600060019054906101000a900460ff16612459576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161245090613f83565b60405180910390fd5b816065908051906020019061246f929190613198565b508060669080519060200190612486929190613198565b505050565b600060019054906101000a900460ff166124da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124d190613f83565b60405180910390fd5b6124ea6124e561183f565b611dfc565b565b600061250d8473ffffffffffffffffffffffffffffffffffffffff1661202f565b15612676578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261253661183f565b8786866040518563ffffffff1660e01b81526004016125589493929190613c9d565b602060405180830381600087803b15801561257257600080fd5b505af19250505080156125a357506040513d601f19601f820116820180604052508101906125a09190613598565b60015b612626573d80600081146125d3576040519150601f19603f3d011682016040523d82523d6000602084013e6125d8565b606091505b5060008151141561261e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161261590613da3565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061267b565b600190505b949350505050565b60606040518060400160405280601581526020017f68747470733a2f2f697066732e696f2f697066732f0000000000000000000000815250905090565b60606126cb826117f4565b60006126d5612683565b905060008151116126f55760405180602001604052806000815250612720565b806126ff84612ac0565b604051602001612710929190613c5e565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612802576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127f990613ec3565b60405180910390fd5b61280b81612359565b1561284b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161284290613e03565b60405180910390fd5b612857600083836123f5565b61286081612359565b156128a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161289790613e03565b60405180910390fd5b6001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46129a860008383612405565b5050565b6129b7838383612be4565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156129fa576129f581612be9565b612a39565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612a3857612a378382612c32565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612a7c57612a7781612d9f565b612abb565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614612aba57612ab98282612ee2565b5b5b505050565b606060006001612acf84612f61565b01905060008167ffffffffffffffff811115612b14577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612b465781602001600182028036833780820191505090505b509050600082602001820190505b600115612bd9578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612bc3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0494506000851415612bd457612bd9565b612b54565b819350505050919050565b505050565b609980549050609a600083815260200190815260200160002081905550609981908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001612c3f84610cba565b612c4991906141d1565b9050600060986000848152602001908152602001600020549050818114612d2e576000609760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080609760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816098600083815260200190815260200160002081905550505b6098600084815260200190815260200160002060009055609760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001609980549050612db391906141d1565b90506000609a6000848152602001908152602001600020549050600060998381548110612e09577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060998381548110612e51577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020018190555081609a600083815260200190815260200160002081905550609a6000858152602001908152602001600020600090556099805480612ec6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000612eed83610cba565b905081609760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806098600084815260200190815260200160002081905550505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612fe5577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612fdb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613048576d04ee2d6d415b85acef8100000000838161303e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506020810190505b662386f26fc10000831061309d57662386f26fc100008381613093577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506010810190505b6305f5e10083106130ec576305f5e10083816130e2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506008810190505b612710831061313757612710838161312d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506004810190505b606483106131805760648381613176577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506002810190505b600a831061318f576001810190505b80915050919050565b8280546131a4906142ec565b90600052602060002090601f0160209004810192826131c6576000855561320d565b82601f106131df57805160ff191683800117855561320d565b8280016001018555821561320d579182015b8281111561320c5782518255916020019190600101906131f1565b5b50905061321a919061321e565b5090565b5b8082111561323757600081600090555060010161321f565b5090565b600061324e6132498461408c565b614067565b90508281526020810184848401111561326657600080fd5b6132718482856142aa565b509392505050565b600061328c613287846140bd565b614067565b9050828152602081018484840111156132a457600080fd5b6132af8482856142aa565b509392505050565b6000813590506132c681614906565b92915050565b6000813590506132db8161491d565b92915050565b6000813590506132f081614934565b92915050565b60008151905061330581614934565b92915050565b600082601f83011261331c57600080fd5b813561332c84826020860161323b565b91505092915050565b600082601f83011261334657600080fd5b8135613356848260208601613279565b91505092915050565b60008135905061336e8161494b565b92915050565b60006020828403121561338657600080fd5b6000613394848285016132b7565b91505092915050565b600080604083850312156133b057600080fd5b60006133be858286016132b7565b92505060206133cf858286016132b7565b9150509250929050565b6000806000606084860312156133ee57600080fd5b60006133fc868287016132b7565b935050602061340d868287016132b7565b925050604061341e8682870161335f565b9150509250925092565b6000806000806080858703121561343e57600080fd5b600061344c878288016132b7565b945050602061345d878288016132b7565b935050604061346e8782880161335f565b925050606085013567ffffffffffffffff81111561348b57600080fd5b6134978782880161330b565b91505092959194509250565b600080604083850312156134b657600080fd5b60006134c4858286016132b7565b92505060206134d5858286016132cc565b9150509250929050565b600080604083850312156134f257600080fd5b6000613500858286016132b7565b925050602083013567ffffffffffffffff81111561351d57600080fd5b61352985828601613335565b9150509250929050565b6000806040838503121561354657600080fd5b6000613554858286016132b7565b92505060206135658582860161335f565b9150509250929050565b60006020828403121561358157600080fd5b600061358f848285016132e1565b91505092915050565b6000602082840312156135aa57600080fd5b60006135b8848285016132f6565b91505092915050565b6000806000606084860312156135d657600080fd5b600084013567ffffffffffffffff8111156135f057600080fd5b6135fc86828701613335565b935050602084013567ffffffffffffffff81111561361957600080fd5b61362586828701613335565b92505060406136368682870161335f565b9150509250925092565b600080600080600060a0868803121561365857600080fd5b600086013567ffffffffffffffff81111561367257600080fd5b61367e88828901613335565b955050602086013567ffffffffffffffff81111561369b57600080fd5b6136a788828901613335565b94505060406136b88882890161335f565b935050606086013567ffffffffffffffff8111156136d557600080fd5b6136e188828901613335565b925050608086013567ffffffffffffffff8111156136fe57600080fd5b61370a88828901613335565b9150509295509295909350565b60006020828403121561372957600080fd5b60006137378482850161335f565b91505092915050565b600061374c8383613b66565b905092915050565b61375d81614217565b82525050565b61376c81614217565b82525050565b61377b81614205565b82525050565b600061378c826140fe565b613796818561412c565b9350836020820285016137a8856140ee565b8060005b858110156137e457848403895281516137c58582613740565b94506137d08361411f565b925060208a019950506001810190506137ac565b50829750879550505050505092915050565b6137ff81614229565b82525050565b600061381082614109565b61381a818561413d565b935061382a8185602086016142b9565b61383381614425565b840191505092915050565b61384781614298565b82525050565b600061385882614114565b613862818561414e565b93506138728185602086016142b9565b61387b81614425565b840191505092915050565b600061389182614114565b61389b818561415f565b93506138ab8185602086016142b9565b6138b481614425565b840191505092915050565b60006138ca82614114565b6138d48185614170565b93506138e48185602086016142b9565b80840191505092915050565b60006138fd602d8361415f565b915061390882614436565b604082019050919050565b6000613920602b8361415f565b915061392b82614485565b604082019050919050565b600061394360328361415f565b915061394e826144d4565b604082019050919050565b600061396660268361415f565b915061397182614523565b604082019050919050565b600061398960258361415f565b915061399482614572565b604082019050919050565b60006139ac601c8361415f565b91506139b7826145c1565b602082019050919050565b60006139cf60248361415f565b91506139da826145ea565b604082019050919050565b60006139f260198361415f565b91506139fd82614639565b602082019050919050565b6000613a1560298361415f565b9150613a2082614662565b604082019050919050565b6000613a38602e8361415f565b9150613a43826146b1565b604082019050919050565b6000613a5b602e8361415f565b9150613a6682614700565b604082019050919050565b6000613a7e60208361415f565b9150613a898261474f565b602082019050919050565b6000613aa160208361415f565b9150613aac82614778565b602082019050919050565b6000613ac460188361415f565b9150613acf826147a1565b602082019050919050565b6000613ae760218361415f565b9150613af2826147ca565b604082019050919050565b6000613b0a603d8361415f565b9150613b1582614819565b604082019050919050565b6000613b2d602c8361415f565b9150613b3882614868565b604082019050919050565b6000613b50602b8361415f565b9150613b5b826148b7565b604082019050919050565b600061012083016000830151613b7f6000860182613c40565b5060208301518482036020860152613b97828261384d565b91505060408301518482036040860152613bb1828261384d565b91505060608301518482036060860152613bcb828261384d565b9150506080830151613be06080860182613c40565b5060a083015184820360a0860152613bf8828261384d565b91505060c0830151613c0d60c0860182613754565b5060e0830151613c2060e0860182613c40565b50610100830151613c35610100860182613c40565b508091505092915050565b613c4981614281565b82525050565b613c5881614281565b82525050565b6000613c6a82856138bf565b9150613c7682846138bf565b91508190509392505050565b6000602082019050613c976000830184613772565b92915050565b6000608082019050613cb26000830187613772565b613cbf6020830186613772565b613ccc6040830185613c4f565b8181036060830152613cde8184613805565b905095945050505050565b60006020820190508181036000830152613d038184613781565b905092915050565b6000602082019050613d2060008301846137f6565b92915050565b6000602082019050613d3b600083018461383e565b92915050565b60006020820190508181036000830152613d5b8184613886565b905092915050565b60006020820190508181036000830152613d7c816138f0565b9050919050565b60006020820190508181036000830152613d9c81613913565b9050919050565b60006020820190508181036000830152613dbc81613936565b9050919050565b60006020820190508181036000830152613ddc81613959565b9050919050565b60006020820190508181036000830152613dfc8161397c565b9050919050565b60006020820190508181036000830152613e1c8161399f565b9050919050565b60006020820190508181036000830152613e3c816139c2565b9050919050565b60006020820190508181036000830152613e5c816139e5565b9050919050565b60006020820190508181036000830152613e7c81613a08565b9050919050565b60006020820190508181036000830152613e9c81613a2b565b9050919050565b60006020820190508181036000830152613ebc81613a4e565b9050919050565b60006020820190508181036000830152613edc81613a71565b9050919050565b60006020820190508181036000830152613efc81613a94565b9050919050565b60006020820190508181036000830152613f1c81613ab7565b9050919050565b60006020820190508181036000830152613f3c81613ada565b9050919050565b60006020820190508181036000830152613f5c81613afd565b9050919050565b60006020820190508181036000830152613f7c81613b20565b9050919050565b60006020820190508181036000830152613f9c81613b43565b9050919050565b6000602082019050613fb86000830184613c4f565b92915050565b600061012082019050613fd4600083018c613c4f565b8181036020830152613fe6818b613886565b90508181036040830152613ffa818a613886565b9050818103606083015261400e8189613886565b905061401d6080830188613c4f565b81810360a083015261402f8187613886565b905061403e60c0830186613763565b61404b60e0830185613c4f565b614059610100830184613c4f565b9a9950505050505050505050565b6000614071614082565b905061407d828261431e565b919050565b6000604051905090565b600067ffffffffffffffff8211156140a7576140a66143f6565b5b6140b082614425565b9050602081019050919050565b600067ffffffffffffffff8211156140d8576140d76143f6565b5b6140e182614425565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061418682614281565b915061419183614281565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156141c6576141c5614398565b5b828201905092915050565b60006141dc82614281565b91506141e783614281565b9250828210156141fa576141f9614398565b5b828203905092915050565b600061421082614261565b9050919050565b600061422282614261565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006142a38261428b565b9050919050565b82818337600083830152505050565b60005b838110156142d75780820151818401526020810190506142bc565b838111156142e6576000848401525b50505050565b6000600282049050600182168061430457607f821691505b60208210811415614318576143176143c7565b5b50919050565b61432782614425565b810181811067ffffffffffffffff82111715614346576143456143f6565b5b80604052505050565b600061435a82614281565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561438d5761438c614398565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b61490f81614205565b811461491a57600080fd5b50565b61492681614229565b811461493157600080fd5b50565b61493d81614235565b811461494857600080fd5b50565b61495481614281565b811461495f57600080fd5b5056fea26469706673582212208fa8449829a7a6ef83f9007a755c653ed1c1b0ad162b4fcfa0cf52940625ce9264736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061018e5760003560e01c806370a08231116100de578063b119490e11610097578063c87b56dd11610071578063c87b56dd1461049d578063dfb5e9ba146104cd578063e985e9c5146104eb578063f2fde38b1461051b5761018e565b8063b119490e14610449578063b51efc6f14610465578063b88d4fde146104815761018e565b806370a0823114610399578063715018a6146103c95780638da5cb5b146103d357806390a4b0df146103f157806395d89b411461040f578063a22cb4651461042d5761018e565b806323b872dd1161014b57806342842e0e1161012557806342842e0e146102ff5780634f6ccce71461031b578063526774101461034b5780636352211e146103695761018e565b806323b872dd1461027b5780632ba6978e146102975780632f745c59146102cf5761018e565b806301ffc9a71461019357806306fdde03146101c3578063081812fc146101e1578063095ea7b314610211578063110bcd451461022d57806318160ddd1461025d575b600080fd5b6101ad60048036038101906101a8919061356f565b610537565b6040516101ba9190613d0b565b60405180910390f35b6101cb610549565b6040516101d89190613d41565b60405180910390f35b6101fb60048036038101906101f69190613717565b6105db565b6040516102089190613c82565b60405180910390f35b61022b60048036038101906102269190613533565b610621565b005b610247600480360381019061024291906134df565b610739565b6040516102549190613fa3565b60405180910390f35b610265610773565b6040516102729190613fa3565b60405180910390f35b610295600480360381019061029091906133d9565b610780565b005b6102b160048036038101906102ac9190613533565b6107e0565b6040516102c699989796959493929190613fbe565b60405180910390f35b6102e960048036038101906102e49190613533565b610a8c565b6040516102f69190613fa3565b60405180910390f35b610319600480360381019061031491906133d9565b610b31565b005b61033560048036038101906103309190613717565b610b51565b6040516103429190613fa3565b60405180910390f35b610353610be8565b6040516103609190613fa3565b60405180910390f35b610383600480360381019061037e9190613717565b610c33565b6040516103909190613c82565b60405180910390f35b6103b360048036038101906103ae9190613374565b610cba565b6040516103c09190613fa3565b60405180910390f35b6103d1610d72565b005b6103db610d86565b6040516103e89190613c82565b60405180910390f35b6103f9610db0565b6040516104069190613ce9565b60405180910390f35b610417611114565b6040516104249190613d41565b60405180910390f35b610447600480360381019061044291906134a3565b6111a6565b005b610463600480360381019061045e91906135c1565b6111bc565b005b61047f600480360381019061047a9190613640565b611307565b005b61049b60048036038101906104969190613428565b6115e7565b005b6104b760048036038101906104b29190613717565b611649565b6040516104c49190613d41565b60405180910390f35b6104d561165b565b6040516104e29190613fa3565b60405180910390f35b6105056004803603810190610500919061339d565b611662565b6040516105129190613d0b565b60405180910390f35b61053560048036038101906105309190613374565b6116f6565b005b60006105428261177a565b9050919050565b606060658054610558906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610584906142ec565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b5050505050905090565b60006105e6826117f4565b6069600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061062c82610c33565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561069d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069490613f23565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106bc61183f565b73ffffffffffffffffffffffffffffffffffffffff1614806106eb57506106ea816106e561183f565b611662565b5b61072a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072190613f43565b60405180910390fd5b6107348383611847565b505050565b6000610746610130611900565b6000610753610130611916565b905061075f8482611924565b6107698184611942565b8091505092915050565b6000609980549050905090565b61079161078b61183f565b826119b6565b6107d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c790613d63565b60405180910390fd5b6107db838383611a4b565b505050565b61012e60205281600052604060002081815481106107fd57600080fd5b906000526020600020906009020160009150915050806000015490806001018054610827906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610853906142ec565b80156108a05780601f10610875576101008083540402835291602001916108a0565b820191906000526020600020905b81548152906001019060200180831161088357829003601f168201915b5050505050908060020180546108b5906142ec565b80601f01602080910402602001604051908101604052809291908181526020018280546108e1906142ec565b801561092e5780601f106109035761010080835404028352916020019161092e565b820191906000526020600020905b81548152906001019060200180831161091157829003601f168201915b505050505090806003018054610943906142ec565b80601f016020809104026020016040519081016040528092919081815260200182805461096f906142ec565b80156109bc5780601f10610991576101008083540402835291602001916109bc565b820191906000526020600020905b81548152906001019060200180831161099f57829003601f168201915b5050505050908060040154908060050180546109d7906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610a03906142ec565b8015610a505780601f10610a2557610100808354040283529160200191610a50565b820191906000526020600020905b815481529060010190602001808311610a3357829003601f168201915b5050505050908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154908060080154905089565b6000610a9783610cba565b8210610ad8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acf90613d83565b60405180910390fd5b609760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610b4c838383604051806020016040528060008152506115e7565b505050565b6000610b5b610773565b8210610b9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9390613f63565b60405180910390fd5b60998281548110610bd6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b600061012e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905090565b600080610c3f83611d41565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca890613f03565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2290613e63565b60405180910390fd5b606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610d7a611d7e565b610d846000611dfc565b565b600060fb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606061012e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561110b57838290600052602060002090600902016040518061012001604052908160008201548152602001600182018054610e50906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7c906142ec565b8015610ec95780601f10610e9e57610100808354040283529160200191610ec9565b820191906000526020600020905b815481529060010190602001808311610eac57829003601f168201915b50505050508152602001600282018054610ee2906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0e906142ec565b8015610f5b5780601f10610f3057610100808354040283529160200191610f5b565b820191906000526020600020905b815481529060010190602001808311610f3e57829003601f168201915b50505050508152602001600382018054610f74906142ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610fa0906142ec565b8015610fed5780601f10610fc257610100808354040283529160200191610fed565b820191906000526020600020905b815481529060010190602001808311610fd057829003601f168201915b5050505050815260200160048201548152602001600582018054611010906142ec565b80601f016020809104026020016040519081016040528092919081815260200182805461103c906142ec565b80156110895780601f1061105e57610100808354040283529160200191611089565b820191906000526020600020905b81548152906001019060200180831161106c57829003601f168201915b505050505081526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016007820154815260200160088201548152505081526020019060010190610e12565b50505050905090565b606060668054611123906142ec565b80601f016020809104026020016040519081016040528092919081815260200182805461114f906142ec565b801561119c5780601f106111715761010080835404028352916020019161119c565b820191906000526020600020905b81548152906001019060200180831161117f57829003601f168201915b5050505050905090565b6111b86111b161183f565b8383611ec2565b5050565b60008060019054906101000a900460ff161590508080156111ed5750600160008054906101000a900460ff1660ff16105b8061121a57506111fc3061202f565b1580156112195750600160008054906101000a900460ff1660ff16145b5b611259576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125090613ea3565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015611296576001600060016101000a81548160ff0219169083151502179055505b6112a08484612052565b6112a86120af565b80156113015760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516112f89190613d26565b60405180910390a15b50505050565b600085511161131557600080fd5b600084511161132357600080fd5b600082511161133157600080fd5b600081511161133f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561137957600080fd5b6000831161138657600080fd5b6000600161012e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506113d8919061417b565b905061012e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518061012001604052808381526020018781526020018881526020018481526020018681526020018581526020013373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020014281525090806001815401808255809150506001900390600052602060002090600902016000909190919091506000820151816000015560208201518160010190805190602001906114bf929190613198565b5060408201518160020190805190602001906114dc929190613198565b5060608201518160030190805190602001906114f9929190613198565b506080820151816004015560a0820151816005019080519060200190611520929190613198565b5060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e082015181600701556101008201518160080155505061012d60008154809291906115939061434f565b91905055507fa68037b095bd3be1232831fe9b3f92d3e66940b872ea82bf5e0da5eb99aa7def8186888588883342426040516115d799989796959493929190613fbe565b60405180910390a1505050505050565b6115f86115f261183f565b836119b6565b611637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162e90613d63565b60405180910390fd5b61164384848484612108565b50505050565b606061165482612164565b9050919050565b61012d5481565b6000606a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6116fe611d7e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561176e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176590613dc3565b60405180910390fd5b61177781611dfc565b50565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806117ed57506117ec82612277565b5b9050919050565b6117fd81612359565b61183c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183390613f03565b60405180910390fd5b50565b600033905090565b816069600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166118ba83610c33565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001816000016000828254019250508190555050565b600081600001549050919050565b61193e82826040518060200160405280600081525061239a565b5050565b61194b82612359565b61198a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198190613e83565b60405180910390fd5b8060c9600084815260200190815260200160002090805190602001906119b1929190613198565b505050565b6000806119c283610c33565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611a045750611a038185611662565b5b80611a4257508373ffffffffffffffffffffffffffffffffffffffff16611a2a846105db565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611a6b82610c33565b73ffffffffffffffffffffffffffffffffffffffff1614611ac1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ab890613de3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2890613e23565b60405180910390fd5b611b3c8383836123f5565b8273ffffffffffffffffffffffffffffffffffffffff16611b5c82610c33565b73ffffffffffffffffffffffffffffffffffffffff1614611bb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba990613de3565b60405180910390fd5b6069600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001606860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611d3c838383612405565b505050565b60006067600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b611d8661183f565b73ffffffffffffffffffffffffffffffffffffffff16611da4610d86565b73ffffffffffffffffffffffffffffffffffffffff1614611dfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611df190613ee3565b60405180910390fd5b565b600060fb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160fb60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611f31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f2890613e43565b60405180910390fd5b80606a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516120229190613d0b565b60405180910390a3505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff166120a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209890613f83565b60405180910390fd5b6120ab828261240a565b5050565b600060019054906101000a900460ff166120fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120f590613f83565b60405180910390fd5b61210661248b565b565b612113848484611a4b565b61211f848484846124ec565b61215e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161215590613da3565b60405180910390fd5b50505050565b606061216f826117f4565b600060c96000848152602001908152602001600020805461218f906142ec565b80601f01602080910402602001604051908101604052809291908181526020018280546121bb906142ec565b80156122085780601f106121dd57610100808354040283529160200191612208565b820191906000526020600020905b8154815290600101906020018083116121eb57829003601f168201915b505050505090506000612219612683565b905060008151141561222f578192505050612272565b60008251111561226457808260405160200161224c929190613c5e565b60405160208183030381529060405292505050612272565b61226d846126c0565b925050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061234257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80612352575061235182612728565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661237b83611d41565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6123a48383612792565b6123b160008484846124ec565b6123f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123e790613da3565b60405180910390fd5b505050565b6124008383836129ac565b505050565b505050565b600060019054906101000a900460ff16612459576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161245090613f83565b60405180910390fd5b816065908051906020019061246f929190613198565b508060669080519060200190612486929190613198565b505050565b600060019054906101000a900460ff166124da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124d190613f83565b60405180910390fd5b6124ea6124e561183f565b611dfc565b565b600061250d8473ffffffffffffffffffffffffffffffffffffffff1661202f565b15612676578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261253661183f565b8786866040518563ffffffff1660e01b81526004016125589493929190613c9d565b602060405180830381600087803b15801561257257600080fd5b505af19250505080156125a357506040513d601f19601f820116820180604052508101906125a09190613598565b60015b612626573d80600081146125d3576040519150601f19603f3d011682016040523d82523d6000602084013e6125d8565b606091505b5060008151141561261e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161261590613da3565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061267b565b600190505b949350505050565b60606040518060400160405280601581526020017f68747470733a2f2f697066732e696f2f697066732f0000000000000000000000815250905090565b60606126cb826117f4565b60006126d5612683565b905060008151116126f55760405180602001604052806000815250612720565b806126ff84612ac0565b604051602001612710929190613c5e565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612802576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127f990613ec3565b60405180910390fd5b61280b81612359565b1561284b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161284290613e03565b60405180910390fd5b612857600083836123f5565b61286081612359565b156128a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161289790613e03565b60405180910390fd5b6001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46129a860008383612405565b5050565b6129b7838383612be4565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156129fa576129f581612be9565b612a39565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612a3857612a378382612c32565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612a7c57612a7781612d9f565b612abb565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614612aba57612ab98282612ee2565b5b5b505050565b606060006001612acf84612f61565b01905060008167ffffffffffffffff811115612b14577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612b465781602001600182028036833780820191505090505b509050600082602001820190505b600115612bd9578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612bc3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0494506000851415612bd457612bd9565b612b54565b819350505050919050565b505050565b609980549050609a600083815260200190815260200160002081905550609981908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001612c3f84610cba565b612c4991906141d1565b9050600060986000848152602001908152602001600020549050818114612d2e576000609760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080609760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816098600083815260200190815260200160002081905550505b6098600084815260200190815260200160002060009055609760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001609980549050612db391906141d1565b90506000609a6000848152602001908152602001600020549050600060998381548110612e09577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060998381548110612e51577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020018190555081609a600083815260200190815260200160002081905550609a6000858152602001908152602001600020600090556099805480612ec6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000612eed83610cba565b905081609760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806098600084815260200190815260200160002081905550505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612fe5577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612fdb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613048576d04ee2d6d415b85acef8100000000838161303e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506020810190505b662386f26fc10000831061309d57662386f26fc100008381613093577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506010810190505b6305f5e10083106130ec576305f5e10083816130e2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506008810190505b612710831061313757612710838161312d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506004810190505b606483106131805760648381613176577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506002810190505b600a831061318f576001810190505b80915050919050565b8280546131a4906142ec565b90600052602060002090601f0160209004810192826131c6576000855561320d565b82601f106131df57805160ff191683800117855561320d565b8280016001018555821561320d579182015b8281111561320c5782518255916020019190600101906131f1565b5b50905061321a919061321e565b5090565b5b8082111561323757600081600090555060010161321f565b5090565b600061324e6132498461408c565b614067565b90508281526020810184848401111561326657600080fd5b6132718482856142aa565b509392505050565b600061328c613287846140bd565b614067565b9050828152602081018484840111156132a457600080fd5b6132af8482856142aa565b509392505050565b6000813590506132c681614906565b92915050565b6000813590506132db8161491d565b92915050565b6000813590506132f081614934565b92915050565b60008151905061330581614934565b92915050565b600082601f83011261331c57600080fd5b813561332c84826020860161323b565b91505092915050565b600082601f83011261334657600080fd5b8135613356848260208601613279565b91505092915050565b60008135905061336e8161494b565b92915050565b60006020828403121561338657600080fd5b6000613394848285016132b7565b91505092915050565b600080604083850312156133b057600080fd5b60006133be858286016132b7565b92505060206133cf858286016132b7565b9150509250929050565b6000806000606084860312156133ee57600080fd5b60006133fc868287016132b7565b935050602061340d868287016132b7565b925050604061341e8682870161335f565b9150509250925092565b6000806000806080858703121561343e57600080fd5b600061344c878288016132b7565b945050602061345d878288016132b7565b935050604061346e8782880161335f565b925050606085013567ffffffffffffffff81111561348b57600080fd5b6134978782880161330b565b91505092959194509250565b600080604083850312156134b657600080fd5b60006134c4858286016132b7565b92505060206134d5858286016132cc565b9150509250929050565b600080604083850312156134f257600080fd5b6000613500858286016132b7565b925050602083013567ffffffffffffffff81111561351d57600080fd5b61352985828601613335565b9150509250929050565b6000806040838503121561354657600080fd5b6000613554858286016132b7565b92505060206135658582860161335f565b9150509250929050565b60006020828403121561358157600080fd5b600061358f848285016132e1565b91505092915050565b6000602082840312156135aa57600080fd5b60006135b8848285016132f6565b91505092915050565b6000806000606084860312156135d657600080fd5b600084013567ffffffffffffffff8111156135f057600080fd5b6135fc86828701613335565b935050602084013567ffffffffffffffff81111561361957600080fd5b61362586828701613335565b92505060406136368682870161335f565b9150509250925092565b600080600080600060a0868803121561365857600080fd5b600086013567ffffffffffffffff81111561367257600080fd5b61367e88828901613335565b955050602086013567ffffffffffffffff81111561369b57600080fd5b6136a788828901613335565b94505060406136b88882890161335f565b935050606086013567ffffffffffffffff8111156136d557600080fd5b6136e188828901613335565b925050608086013567ffffffffffffffff8111156136fe57600080fd5b61370a88828901613335565b9150509295509295909350565b60006020828403121561372957600080fd5b60006137378482850161335f565b91505092915050565b600061374c8383613b66565b905092915050565b61375d81614217565b82525050565b61376c81614217565b82525050565b61377b81614205565b82525050565b600061378c826140fe565b613796818561412c565b9350836020820285016137a8856140ee565b8060005b858110156137e457848403895281516137c58582613740565b94506137d08361411f565b925060208a019950506001810190506137ac565b50829750879550505050505092915050565b6137ff81614229565b82525050565b600061381082614109565b61381a818561413d565b935061382a8185602086016142b9565b61383381614425565b840191505092915050565b61384781614298565b82525050565b600061385882614114565b613862818561414e565b93506138728185602086016142b9565b61387b81614425565b840191505092915050565b600061389182614114565b61389b818561415f565b93506138ab8185602086016142b9565b6138b481614425565b840191505092915050565b60006138ca82614114565b6138d48185614170565b93506138e48185602086016142b9565b80840191505092915050565b60006138fd602d8361415f565b915061390882614436565b604082019050919050565b6000613920602b8361415f565b915061392b82614485565b604082019050919050565b600061394360328361415f565b915061394e826144d4565b604082019050919050565b600061396660268361415f565b915061397182614523565b604082019050919050565b600061398960258361415f565b915061399482614572565b604082019050919050565b60006139ac601c8361415f565b91506139b7826145c1565b602082019050919050565b60006139cf60248361415f565b91506139da826145ea565b604082019050919050565b60006139f260198361415f565b91506139fd82614639565b602082019050919050565b6000613a1560298361415f565b9150613a2082614662565b604082019050919050565b6000613a38602e8361415f565b9150613a43826146b1565b604082019050919050565b6000613a5b602e8361415f565b9150613a6682614700565b604082019050919050565b6000613a7e60208361415f565b9150613a898261474f565b602082019050919050565b6000613aa160208361415f565b9150613aac82614778565b602082019050919050565b6000613ac460188361415f565b9150613acf826147a1565b602082019050919050565b6000613ae760218361415f565b9150613af2826147ca565b604082019050919050565b6000613b0a603d8361415f565b9150613b1582614819565b604082019050919050565b6000613b2d602c8361415f565b9150613b3882614868565b604082019050919050565b6000613b50602b8361415f565b9150613b5b826148b7565b604082019050919050565b600061012083016000830151613b7f6000860182613c40565b5060208301518482036020860152613b97828261384d565b91505060408301518482036040860152613bb1828261384d565b91505060608301518482036060860152613bcb828261384d565b9150506080830151613be06080860182613c40565b5060a083015184820360a0860152613bf8828261384d565b91505060c0830151613c0d60c0860182613754565b5060e0830151613c2060e0860182613c40565b50610100830151613c35610100860182613c40565b508091505092915050565b613c4981614281565b82525050565b613c5881614281565b82525050565b6000613c6a82856138bf565b9150613c7682846138bf565b91508190509392505050565b6000602082019050613c976000830184613772565b92915050565b6000608082019050613cb26000830187613772565b613cbf6020830186613772565b613ccc6040830185613c4f565b8181036060830152613cde8184613805565b905095945050505050565b60006020820190508181036000830152613d038184613781565b905092915050565b6000602082019050613d2060008301846137f6565b92915050565b6000602082019050613d3b600083018461383e565b92915050565b60006020820190508181036000830152613d5b8184613886565b905092915050565b60006020820190508181036000830152613d7c816138f0565b9050919050565b60006020820190508181036000830152613d9c81613913565b9050919050565b60006020820190508181036000830152613dbc81613936565b9050919050565b60006020820190508181036000830152613ddc81613959565b9050919050565b60006020820190508181036000830152613dfc8161397c565b9050919050565b60006020820190508181036000830152613e1c8161399f565b9050919050565b60006020820190508181036000830152613e3c816139c2565b9050919050565b60006020820190508181036000830152613e5c816139e5565b9050919050565b60006020820190508181036000830152613e7c81613a08565b9050919050565b60006020820190508181036000830152613e9c81613a2b565b9050919050565b60006020820190508181036000830152613ebc81613a4e565b9050919050565b60006020820190508181036000830152613edc81613a71565b9050919050565b60006020820190508181036000830152613efc81613a94565b9050919050565b60006020820190508181036000830152613f1c81613ab7565b9050919050565b60006020820190508181036000830152613f3c81613ada565b9050919050565b60006020820190508181036000830152613f5c81613afd565b9050919050565b60006020820190508181036000830152613f7c81613b20565b9050919050565b60006020820190508181036000830152613f9c81613b43565b9050919050565b6000602082019050613fb86000830184613c4f565b92915050565b600061012082019050613fd4600083018c613c4f565b8181036020830152613fe6818b613886565b90508181036040830152613ffa818a613886565b9050818103606083015261400e8189613886565b905061401d6080830188613c4f565b81810360a083015261402f8187613886565b905061403e60c0830186613763565b61404b60e0830185613c4f565b614059610100830184613c4f565b9a9950505050505050505050565b6000614071614082565b905061407d828261431e565b919050565b6000604051905090565b600067ffffffffffffffff8211156140a7576140a66143f6565b5b6140b082614425565b9050602081019050919050565b600067ffffffffffffffff8211156140d8576140d76143f6565b5b6140e182614425565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061418682614281565b915061419183614281565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156141c6576141c5614398565b5b828201905092915050565b60006141dc82614281565b91506141e783614281565b9250828210156141fa576141f9614398565b5b828203905092915050565b600061421082614261565b9050919050565b600061422282614261565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006142a38261428b565b9050919050565b82818337600083830152505050565b60005b838110156142d75780820151818401526020810190506142bc565b838111156142e6576000848401525b50505050565b6000600282049050600182168061430457607f821691505b60208210811415614318576143176143c7565b5b50919050565b61432782614425565b810181811067ffffffffffffffff82111715614346576143456143f6565b5b80604052505050565b600061435a82614281565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561438d5761438c614398565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b61490f81614205565b811461491a57600080fd5b50565b61492681614229565b811461493157600080fd5b50565b61493d81614235565b811461494857600080fd5b50565b61495481614281565b811461495f57600080fd5b5056fea26469706673582212208fa8449829a7a6ef83f9007a755c653ed1c1b0ad162b4fcfa0cf52940625ce9264736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
