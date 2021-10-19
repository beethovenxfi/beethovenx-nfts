/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BeethovenxHelpinLudwigsNft,
  BeethovenxHelpinLudwigsNftInterface,
} from "../BeethovenxHelpinLudwigsNft";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600f81526e48656c70696e67204c75647769677360881b60208083019182528351808501909452600d84526c48454c50494e4c55445749475360981b9084015281519192916200006e9160029162000261565b5080516200008490600390602084019062000261565b5050600c805460ff19169055506200009e600033620000fc565b620000ca7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000fc565b620000f67f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000fc565b62000344565b6200011382826200013f60201b62000f0f1760201c565b60008281526001602090815260409091206200013a91839062000f1d6200014f821b17901c565b505050565b6200014b82826200016f565b5050565b600062000166836001600160a01b0384166200020f565b90505b92915050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200014b576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001cb3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000818152600183016020526040812054620002585750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000169565b50600062000169565b8280546200026f9062000307565b90600052602060002090601f016020900481019282620002935760008555620002de565b82601f10620002ae57805160ff1916838001178555620002de565b82800160010185558215620002de579182015b82811115620002de578251825591602001919060010190620002c1565b50620002ec929150620002f0565b5090565b5b80821115620002ec5760008155600101620002f1565b600181811c908216806200031c57607f821691505b602082108114156200033e57634e487b7160e01b600052602260045260246000fd5b50919050565b61294380620003546000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80636352211e1161010f578063b88d4fde116100a2578063d539139311610071578063d5391393146103f7578063d547741f1461041e578063e63ab1e914610431578063e985e9c51461045857600080fd5b8063b88d4fde146103ab578063c87b56dd146103be578063ca15c873146103d1578063d0def521146103e457600080fd5b806391d14854116100de57806391d148541461037557806395d89b4114610388578063a217fddf14610390578063a22cb4651461039857600080fd5b80636352211e1461033457806370a08231146103475780638456cb591461035a5780639010d07c1461036257600080fd5b80632f2ff15d1161018757806342842e0e1161015657806342842e0e146102f057806342966c68146103035780634f6ccce7146103165780635c975abb1461032957600080fd5b80632f2ff15d146102af5780632f745c59146102c257806336568abe146102d55780633f4ba83a146102e857600080fd5b8063095ea7b3116101c3578063095ea7b31461025257806318160ddd1461026757806323b872dd14610279578063248a9ca31461028c57600080fd5b806301ffc9a7146101ea57806306fdde0314610212578063081812fc14610227575b600080fd5b6101fd6101f836600461257d565b610494565b60405190151581526020015b60405180910390f35b61021a6104a5565b60405161020991906126c4565b61023a61023536600461251f565b610537565b6040516001600160a01b039091168152602001610209565b6102656102603660046124f5565b6105c4565b005b600a545b604051908152602001610209565b61026561028736600461239f565b6106da565b61026b61029a36600461251f565b60009081526020819052604090206001015490565b6102656102bd366004612538565b61070c565b61026b6102d03660046124f5565b61072e565b6102656102e3366004612538565b6107c4565b6102656107e6565b6102656102fe36600461239f565b61088e565b61026561031136600461251f565b6108a9565b61026b61032436600461251f565b610923565b600c5460ff166101fd565b61023a61034236600461251f565b6109b6565b61026b610355366004612351565b610a2d565b610265610ab4565b61023a61037036600461255b565b610b58565b6101fd610383366004612538565b610b77565b61021a610ba0565b61026b600081565b6102656103a6366004612457565b610baf565b6102656103b93660046123db565b610c74565b61021a6103cc36600461251f565b610cac565b61026b6103df36600461251f565b610e23565b6102656103f2366004612493565b610e3a565b61026b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61026561042c366004612538565b610f05565b61026b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6101fd61046636600461236c565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b600061049f82610f32565b92915050565b6060600280546104b49061281f565b80601f01602080910402602001604051908101604052809291908181526020018280546104e09061281f565b801561052d5780601f106105025761010080835404028352916020019161052d565b820191906000526020600020905b81548152906001019060200180831161051057829003601f168201915b5050505050905090565b600061054282610f57565b6105a85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006105cf826109b6565b9050806001600160a01b0316836001600160a01b0316141561063d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161059f565b336001600160a01b038216148061065957506106598133610466565b6106cb5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161059f565b6106d58383610f74565b505050565b6106e5335b82610fe2565b6107015760405162461bcd60e51b815260040161059f90612729565b6106d58383836110c8565b6107168282611273565b60008281526001602052604090206106d59082610f1d565b600061073983610a2d565b821061079b5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161059f565b506001600160a01b03919091166000908152600860209081526040808320938352929052205490565b6107ce8282611299565b60008281526001602052604090206106d59082611313565b6108107f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610b77565b610884576040805162461bcd60e51b81526020600482015260248101919091527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f20756e7061757365606482015260840161059f565b61088c611328565b565b6106d583838360405180602001604052806000815250610c74565b6108b2336106df565b6109175760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201526f1b995c881b9bdc88185c1c1c9bdd995960821b606482015260840161059f565b610920816113bb565b50565b600061092e600a5490565b82106109915760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161059f565b600a82815481106109a4576109a46128cb565b90600052602060002001549050919050565b6000818152600460205260408120546001600160a01b03168061049f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161059f565b60006001600160a01b038216610a985760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161059f565b506001600160a01b031660009081526005602052604090205490565b610ade7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610b77565b610b505760405162461bcd60e51b815260206004820152603e60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f2070617573650000606482015260840161059f565b61088c6113fb565b6000828152600160205260408120610b709083611476565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600380546104b49061281f565b6001600160a01b038216331415610c085760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161059f565b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610c7e3383610fe2565b610c9a5760405162461bcd60e51b815260040161059f90612729565b610ca684848484611482565b50505050565b6060610cb782610f57565b610d1d5760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b606482015260840161059f565b6000828152600e602052604081208054610d369061281f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d629061281f565b8015610daf5780601f10610d8457610100808354040283529160200191610daf565b820191906000526020600020905b815481529060010190602001808311610d9257829003601f168201915b505050505090506000610dcd60408051602081019091526000815290565b9050805160001415610de0575092915050565b815115610e12578082604051602001610dfa9291906125e3565b60405160208183030381529060405292505050919050565b610e1b846114b5565b949350505050565b600081815260016020526040812061049f9061158c565b610e647f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610b77565b610ed65760405162461bcd60e51b815260206004820152603d60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d7573742068617665206d696e74657220726f6c6520746f206d696e74000000606482015260840161059f565b6000610ee1600d5490565b9050610eed8382611596565b610ef781836116d5565b6106d5600d80546001019055565b6107ce8282611760565b610f198282611786565b5050565b6000610b70836001600160a01b03841661180a565b60006001600160e01b0319821663780e9d6360e01b148061049f575061049f82611859565b6000908152600460205260409020546001600160a01b0316151590565b600081815260066020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610fa9826109b6565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610fed82610f57565b61104e5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161059f565b6000611059836109b6565b9050806001600160a01b0316846001600160a01b031614806110945750836001600160a01b031661108984610537565b6001600160a01b0316145b80610e1b57506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff16610e1b565b826001600160a01b03166110db826109b6565b6001600160a01b0316146111435760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161059f565b6001600160a01b0382166111a55760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161059f565b6111b0838383611899565b6111bb600082610f74565b6001600160a01b03831660009081526005602052604081208054600192906111e49084906127c5565b90915550506001600160a01b038216600090815260056020526040812080546001929061121290849061277a565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60008281526020819052604090206001015461128f81336118a4565b6106d58383611786565b6001600160a01b03811633146113095760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161059f565b610f198282611908565b6000610b70836001600160a01b03841661196d565b600c5460ff166113715760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161059f565b600c805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6113c481611a60565b6000818152600e6020526040902080546113dd9061281f565b159050610920576000818152600e60205260408120610920916121ec565b600c5460ff16156114415760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161059f565b600c805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861139e3390565b6000610b708383611b07565b61148d8484846110c8565b61149984848484611b31565b610ca65760405162461bcd60e51b815260040161059f906126d7565b60606114c082610f57565b6115245760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161059f565b600061153b60408051602081019091526000815290565b9050600081511161155b5760405180602001604052806000815250610b70565b8061156584611c3e565b6040516020016115769291906125e3565b6040516020818303038152906040529392505050565b600061049f825490565b6001600160a01b0382166115ec5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161059f565b6115f581610f57565b156116425760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161059f565b61164e60008383611899565b6001600160a01b038216600090815260056020526040812080546001929061167790849061277a565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6116de82610f57565b6117415760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b606482015260840161059f565b6000828152600e6020908152604090912082516106d592840190612226565b60008281526020819052604090206001015461177c81336118a4565b6106d58383611908565b6117908282610b77565b610f19576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556117c63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008181526001830160205260408120546118515750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561049f565b50600061049f565b60006001600160e01b031982166380ac58cd60e01b148061188a57506001600160e01b03198216635b5e139f60e01b145b8061049f575061049f82611d3c565b6106d5838383611d61565b6118ae8282610b77565b610f19576118c6816001600160a01b03166014611dd3565b6118d1836020611dd3565b6040516020016118e2929190612612565b60408051601f198184030181529082905262461bcd60e51b825261059f916004016126c4565b6119128282610b77565b15610f19576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60008181526001830160205260408120548015611a565760006119916001836127c5565b85549091506000906119a5906001906127c5565b9050818114611a0a5760008660000182815481106119c5576119c56128cb565b90600052602060002001549050808760000184815481106119e8576119e86128cb565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611a1b57611a1b6128b5565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061049f565b600091505061049f565b6000611a6b826109b6565b9050611a7981600084611899565b611a84600083610f74565b6001600160a01b0381166000908152600560205260408120805460019290611aad9084906127c5565b909155505060008281526004602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6000826000018281548110611b1e57611b1e6128cb565b9060005260206000200154905092915050565b60006001600160a01b0384163b15611c3357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611b75903390899088908890600401612687565b602060405180830381600087803b158015611b8f57600080fd5b505af1925050508015611bbf575060408051601f3d908101601f19168201909252611bbc9181019061259a565b60015b611c19573d808015611bed576040519150601f19603f3d011682016040523d82523d6000602084013e611bf2565b606091505b508051611c115760405162461bcd60e51b815260040161059f906126d7565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610e1b565b506001949350505050565b606081611c625750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611c8c5780611c768161285a565b9150611c859050600a83612792565b9150611c66565b60008167ffffffffffffffff811115611ca757611ca76128e1565b6040519080825280601f01601f191660200182016040528015611cd1576020820181803683370190505b5090505b8415610e1b57611ce66001836127c5565b9150611cf3600a86612875565b611cfe90603061277a565b60f81b818381518110611d1357611d136128cb565b60200101906001600160f81b031916908160001a905350611d35600a86612792565b9450611cd5565b60006001600160e01b03198216635a05180f60e01b148061049f575061049f82611f6f565b611d6c838383611fa4565b600c5460ff16156106d55760405162461bcd60e51b815260206004820152602b60248201527f4552433732315061757361626c653a20746f6b656e207472616e73666572207760448201526a1a1a5b19481c185d5cd95960aa1b606482015260840161059f565b60606000611de28360026127a6565b611ded90600261277a565b67ffffffffffffffff811115611e0557611e056128e1565b6040519080825280601f01601f191660200182016040528015611e2f576020820181803683370190505b509050600360fc1b81600081518110611e4a57611e4a6128cb565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611e7957611e796128cb565b60200101906001600160f81b031916908160001a9053506000611e9d8460026127a6565b611ea890600161277a565b90505b6001811115611f20576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611edc57611edc6128cb565b1a60f81b828281518110611ef257611ef26128cb565b60200101906001600160f81b031916908160001a90535060049490941c93611f1981612808565b9050611eab565b508315610b705760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161059f565b60006001600160e01b03198216637965db0b60e01b148061049f57506301ffc9a760e01b6001600160e01b031983161461049f565b6001600160a01b038316611fff57611ffa81600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b612022565b816001600160a01b0316836001600160a01b03161461202257612022838261205c565b6001600160a01b038216612039576106d5816120f9565b826001600160a01b0316826001600160a01b0316146106d5576106d582826121a8565b6000600161206984610a2d565b61207391906127c5565b6000838152600960205260409020549091508082146120c6576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a5460009061210b906001906127c5565b6000838152600b6020526040812054600a8054939450909284908110612133576121336128cb565b9060005260206000200154905080600a8381548110612154576121546128cb565b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a80548061218c5761218c6128b5565b6001900381819060005260206000200160009055905550505050565b60006121b383610a2d565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b5080546121f89061281f565b6000825580601f10612208575050565b601f01602090049060005260206000209081019061092091906122aa565b8280546122329061281f565b90600052602060002090601f016020900481019282612254576000855561229a565b82601f1061226d57805160ff191683800117855561229a565b8280016001018555821561229a579182015b8281111561229a57825182559160200191906001019061227f565b506122a69291506122aa565b5090565b5b808211156122a657600081556001016122ab565b600067ffffffffffffffff808411156122da576122da6128e1565b604051601f8501601f19908116603f01168101908282118183101715612302576123026128e1565b8160405280935085815286868601111561231b57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b038116811461234c57600080fd5b919050565b60006020828403121561236357600080fd5b610b7082612335565b6000806040838503121561237f57600080fd5b61238883612335565b915061239660208401612335565b90509250929050565b6000806000606084860312156123b457600080fd5b6123bd84612335565b92506123cb60208501612335565b9150604084013590509250925092565b600080600080608085870312156123f157600080fd5b6123fa85612335565b935061240860208601612335565b925060408501359150606085013567ffffffffffffffff81111561242b57600080fd5b8501601f8101871361243c57600080fd5b61244b878235602084016122bf565b91505092959194509250565b6000806040838503121561246a57600080fd5b61247383612335565b91506020830135801515811461248857600080fd5b809150509250929050565b600080604083850312156124a657600080fd5b6124af83612335565b9150602083013567ffffffffffffffff8111156124cb57600080fd5b8301601f810185136124dc57600080fd5b6124eb858235602084016122bf565b9150509250929050565b6000806040838503121561250857600080fd5b61251183612335565b946020939093013593505050565b60006020828403121561253157600080fd5b5035919050565b6000806040838503121561254b57600080fd5b8235915061239660208401612335565b6000806040838503121561256e57600080fd5b50508035926020909101359150565b60006020828403121561258f57600080fd5b8135610b70816128f7565b6000602082840312156125ac57600080fd5b8151610b70816128f7565b600081518084526125cf8160208601602086016127dc565b601f01601f19169290920160200192915050565b600083516125f58184602088016127dc565b8351908301906126098183602088016127dc565b01949350505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161264a8160178501602088016127dc565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161267b8160288401602088016127dc565b01602801949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906126ba908301846125b7565b9695505050505050565b602081526000610b7060208301846125b7565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000821982111561278d5761278d612889565b500190565b6000826127a1576127a161289f565b500490565b60008160001904831182151516156127c0576127c0612889565b500290565b6000828210156127d7576127d7612889565b500390565b60005b838110156127f75781810151838201526020016127df565b83811115610ca65750506000910152565b60008161281757612817612889565b506000190190565b600181811c9082168061283357607f821691505b6020821081141561285457634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561286e5761286e612889565b5060010190565b6000826128845761288461289f565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461092057600080fdfea2646970667358221220819682e52272a144f160af6d2033b106ca1c6206ec38658640387db03827f33764736f6c63430008070033";

export class BeethovenxHelpinLudwigsNft__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BeethovenxHelpinLudwigsNft> {
    return super.deploy(overrides || {}) as Promise<BeethovenxHelpinLudwigsNft>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BeethovenxHelpinLudwigsNft {
    return super.attach(address) as BeethovenxHelpinLudwigsNft;
  }
  connect(signer: Signer): BeethovenxHelpinLudwigsNft__factory {
    return super.connect(signer) as BeethovenxHelpinLudwigsNft__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BeethovenxHelpinLudwigsNftInterface {
    return new utils.Interface(_abi) as BeethovenxHelpinLudwigsNftInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BeethovenxHelpinLudwigsNft {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BeethovenxHelpinLudwigsNft;
  }
}
