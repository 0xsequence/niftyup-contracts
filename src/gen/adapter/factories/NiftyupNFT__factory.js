"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiftyupNFT__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "_approved",
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
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
        ],
        name: "TransferBatch",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "TransferSingle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "_uri",
                type: "string",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
        ],
        name: "URI",
        type: "event",
    },
    {
        stateMutability: "nonpayable",
        type: "fallback",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
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
                internalType: "address[]",
                name: "_owners",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
        ],
        name: "balanceOfBatch",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
        ],
        name: "batchBurn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "batchMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
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
                name: "_id",
                type: "uint256",
            },
        ],
        name: "getIDBinIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "bin",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_binValues",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256",
            },
        ],
        name: "getValueInBin",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "isOperator",
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
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
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
                name: "_operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_approved",
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
                internalType: "string",
                name: "_newBaseMetadataURI",
                type: "string",
            },
        ],
        name: "setBaseMetadataURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceID",
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
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
        ],
        name: "uri",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610078565b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b61311280620000886000396000f3fe608060405234801561001057600080fd5b50600436106101505760003560e01c80638da5cb5b116100cd578063db90e83c11610081578063eaec5f8111610066578063eaec5f8114610b3b578063f242432a14610b5e578063f2fde38b14610c3657610150565b8063db90e83c14610aca578063e985e9c514610b0057610150565b8063b390c0ab116100b2578063b390c0ab146108a9578063b48ab8b6146108cc578063c4d66de814610a9757610150565b80638da5cb5b1461083d578063a22cb4651461086e57610150565b80632eb2c2d611610124578063715018a611610109578063715018a6146106f6578063731133e9146106fe5780637e518ec8146107cd57610150565b80632eb2c2d6146103ab5780634e1273f41461057f57610150565b8062fdd58e146101b757806301ffc9a7146102025780630e89341c1461025557806320ec271b146102e7575b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f554e535550504f525445445f4d4554484f440000000000000000000000000000604482015290519081900360640190fd5b6101f0600480360360408110156101cd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610c69565b60408051918252519081900360200190f35b6102416004803603602081101561021857600080fd5b50357fffffffff0000000000000000000000000000000000000000000000000000000016610cc0565b604080519115158252519081900360200190f35b6102726004803603602081101561026b57600080fd5b5035610cd3565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102ac578181015183820152602001610294565b50505050905090810190601f1680156102d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103a9600480360360408110156102fd57600080fd5b81019060208101813564010000000081111561031857600080fd5b82018360208201111561032a57600080fd5b8035906020019184602083028401116401000000008311171561034c57600080fd5b91939092909160208101903564010000000081111561036a57600080fd5b82018360208201111561037c57600080fd5b8035906020019184602083028401116401000000008311171561039e57600080fd5b509092509050610e26565b005b6103a9600480360360a08110156103c157600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561040257600080fd5b82018360208201111561041457600080fd5b8035906020019184602083028401116401000000008311171561043657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561048657600080fd5b82018360208201111561049857600080fd5b803590602001918460208302840111640100000000831117156104ba57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561050a57600080fd5b82018360208201111561051c57600080fd5b8035906020019184600183028401116401000000008311171561053e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e9a945050505050565b6106a66004803603604081101561059557600080fd5b8101906020810181356401000000008111156105b057600080fd5b8201836020820111156105c257600080fd5b803590602001918460208302840111640100000000831117156105e457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561063457600080fd5b82018360208201111561064657600080fd5b8035906020019184602083028401116401000000008311171561066857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610fa5945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156106e25781810151838201526020016106ca565b505050509050019250505060405180910390f35b6103a9611226565b6103a96004803603608081101561071457600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135916040820135919081019060808101606082013564010000000081111561075857600080fd5b82018360208201111561076a57600080fd5b8035906020019184600183028401116401000000008311171561078c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506112bd945050505050565b6103a9600480360360208110156107e357600080fd5b8101906020810181356401000000008111156107fe57600080fd5b82018360208201111561081057600080fd5b8035906020019184600183028401116401000000008311171561083257600080fd5b509092509050611354565b610845611422565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6103a96004803603604081101561088457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515611443565b6103a9600480360360408110156108bf57600080fd5b50803590602001356114dc565b6103a9600480360360808110156108e257600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561091a57600080fd5b82018360208201111561092c57600080fd5b8035906020019184602083028401116401000000008311171561094e57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561099e57600080fd5b8201836020820111156109b057600080fd5b803590602001918460208302840111640100000000831117156109d257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050640100000000811115610a2257600080fd5b820183602082011115610a3457600080fd5b80359060200191846001830284011164010000000083111715610a5657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506114e7945050505050565b6103a960048036036020811015610aad57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661157e565b610ae760048036036020811015610ae057600080fd5b5035611611565b6040805192835260208301919091528051918290030190f35b61024160048036036040811015610b1657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661161e565b6101f060048036036040811015610b5157600080fd5b5080359060200135611659565b6103a9600480360360a0811015610b7457600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a081016080820135640100000000811115610bc157600080fd5b820183602082011115610bd357600080fd5b80359060200191846001830284011164010000000083111715610bf557600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061166c945050505050565b6103a960048036036020811015610c4c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611770565b6000806000610c7784611611565b73ffffffffffffffffffffffffffffffffffffffff871660009081526001602090815260408083208584529091529020549193509150610cb79082611659565b95945050505050565b6000610ccb82611870565b90505b919050565b60606003610ce0836118cd565b6040516020018083805460018160011615610100020316600290048015610d3e5780601f10610d1c576101008083540402835291820191610d3e565b820191906000526020600020905b815481529060010190602001808311610d2a575b5050825160208401908083835b60208310610d8857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610d4b565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790527f2e6a736f6e000000000000000000000000000000000000000000000000000000920191825250604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe50181526005909201905295945050505050565b610e9433858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506040805160208089028281018201909352888252909350889250879182918501908490808284376000920191909152506119f992505050565b50505050565b3373ffffffffffffffffffffffffffffffffffffffff86161480610ec35750610ec3853361161e565b610f18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180612efa603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610f84576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180612d71603d913960400191505060405180910390fd5b610f9085858585611ba2565b610f9e858585855a86611ff0565b5050505050565b81518151606091908114611004576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526039815260200180612d386039913960400191505060405180910390fd5b6000806110248560008151811061101757fe5b6020026020010151611611565b915091506000600160008860008151811061103b57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020549050600083905060608567ffffffffffffffff811180156110af57600080fd5b506040519080825280602002602001820160405280156110d9578160200160208202803683370190505b5090506110e68385611659565b816000815181106110f357fe5b602090810291909101015260015b868110156112195761111889828151811061101757fe5b90965094508286141580611181575089818151811061113357fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168a600183038151811061116057fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b156111f057600160008b838151811061119657fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000205493508592505b6111fa8486611659565b82828151811061120657fe5b6020908102919091010152600101611101565b5098975050505050505050565b3361122f611422565b73ffffffffffffffffffffffffffffffffffffffff16146112b157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6112bb6000612267565b565b336112c6611422565b73ffffffffffffffffffffffffffffffffffffffff161461134857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610e94848484846122e4565b3361135d611422565b73ffffffffffffffffffffffffffffffffffffffff16146113df57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61141e82828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061235892505050565b5050565b600054610100900473ffffffffffffffffffffffffffffffffffffffff1690565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61141e33838361236b565b336114f0611422565b73ffffffffffffffffffffffffffffffffffffffff161461157257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610e94848484846123d5565b60005460ff16156115da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612ecc602e913960400191505060405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905561160e81612267565b50565b6008810491600790911690565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205460ff1690565b6020810282901c63ffffffff1692915050565b3373ffffffffffffffffffffffffffffffffffffffff861614806116955750611695853361161e565b6116ea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180612e076037913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611756576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612ff06038913960400191505060405180910390fd5b61176285858585612682565b610f9e858585855a86612726565b33611779611422565b73ffffffffffffffffffffffffffffffffffffffff16146117fb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116611867576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612dae6026913960400191505060405180910390fd5b61160e81612267565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c0000000000000000000000000000000000000000000000000000000014156118c457506001610cce565b610ccb82612917565b60608161190e575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610cce565b818060005b821561192757600101600a83049250611913565b60608167ffffffffffffffff8111801561194057600080fd5b506040519080825280601f01601f19166020018201604052801561196b576020820181803683370190505b5090507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b83156119ef57600a840660300160f81b828280600190039350815181106119b557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350611992565b5095945050505050565b815181518114611a54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180612f36603d913960400191505060405180910390fd5b60005b81811015611a9a57611a9285858381518110611a6f57fe5b6020026020010151858481518110611a8357fe5b60200260200101516001612974565b600101611a57565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611b48578181015183820152602001611b30565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015611b87578181015183820152602001611b6f565b5050505090500194505050505060405180910390a450505050565b815181518114611bfd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526042815260200180612e3e6042913960600191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015611c395750600081115b15611e4c57600080611c518560008151811061101757fe5b915091506000611cc8600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000858152602001908152602001600020548387600081518110611cb957fe5b602002602001015160016129ff565b90506000611d3d600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020548488600081518110611d2e57fe5b602002602001015160006129ff565b90508360015b86811015611df957611d5a89828151811061101757fe5b9096509450818614611dcb5773ffffffffffffffffffffffffffffffffffffffff8b8116600090815260016020818152604080842087855280835281852099909955938e16835290815282822094825284815282822095909555878152948452808520549290935291909220549084905b611ddc84868a8481518110611cb957fe5b9350611def83868a8481518110611d2e57fe5b9250600101611d43565b505073ffffffffffffffffffffffffffffffffffffffff808a166000908152600160208181526040808420898552825280842096909655928b168252825283812095815294905292209190915550611ee9565b60005b81811015611ee757828181518110611e6357fe5b6020026020010151611e8887868481518110611e7b57fe5b6020026020010151610c69565b1015611edf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180612f736036913960400191505060405180910390fd5b600101611e4f565b505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611f95578181015183820152602001611f7d565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015611fd4578181015183820152602001611fbc565b5050505090500194505050505060405180910390a45050505050565b61200f8573ffffffffffffffffffffffffffffffffffffffff16612c12565b1561225f5760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156120c75781810151838201526020016120af565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156121065781810151838201526020016120ee565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561214257818101518382015260200161212a565b50505050905090810190601f16801561216f5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b15801561219457600080fd5b5087f11580156121a8573d6000803e3d6000fd5b50505050506040513d60208110156121bf57600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c81000000000000000000000000000000000000000000000000000000001461225d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604c815260200180612e80604c913960600191505060405180910390fd5b505b505050505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381166101008181027fffffffffffffffffffffff0000000000000000000000000000000000000000ff851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b6122f18484846000612974565b6040805184815260208101849052815173ffffffffffffffffffffffffffffffffffffffff87169260009233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a4610e9460008585855a86612726565b805161141e906003906020840190612c96565b6123788383836001612974565b6040805183815260208101839052815160009273ffffffffffffffffffffffffffffffffffffffff87169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a4505050565b815183511461242f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e81526020018061306d603e913960400191505060405180910390fd5b825115612572576000806124498560008151811061101757fe5b9150915060006124b1600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000858152602001908152602001600020548387600081518110611d2e57fe5b86519091508360015b82811015612537576124d189828151811061101757fe5b909650945081861461251c5773ffffffffffffffffffffffffffffffffffffffff8a166000908152600160209081526040808320948352939052828120949094558584529220549184905b61252d84868a8481518110611d2e57fe5b93506001016124ba565b50505073ffffffffffffffffffffffffffffffffffffffff871660009081526001602090815260408083209583529490529290922091909155505b8373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561261f578181015183820152602001612607565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561265e578181015183820152602001612646565b5050505090500194505050505060405180910390a4610e9460008585855a86611ff0565b61268f8483836001612974565b61269c8383836000612974565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051808381526020018281526020019250505060405180910390a450505050565b6127458573ffffffffffffffffffffffffffffffffffffffff16612c12565b1561225f5760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156127fe5781810151838201526020016127e6565b50505050905090810190601f16801561282b5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b15801561284e57600080fd5b5087f1158015612862573d6000803e3d6000fd5b50505050506040513d602081101561287957600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e61000000000000000000000000000000000000000000000000000000001461225d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526047815260200180612fa96047913960600191505060405180910390fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000141561296b57506001610cce565b610ccb82612c4c565b60008061298085611611565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260016020908152604080832085845290915290205491935091506129c2908286866129ff565b73ffffffffffffffffffffffffffffffffffffffff9096166000908152600160209081526040808320948352939052919091209490945550505050565b60006020840263ffffffff82846001811115612a1757fe5b1415612ae55784821b8701925086831015612a7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806130ab6032913960400191505060405180910390fd5b64010000000087831c8216860110612ae0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806130ab6032913960400191505060405180910390fd5b612c08565b6001846001811115612af357fe5b1415612bb75784821b8703925086831115612b59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180612dd46033913960400191505060405180910390fd5b84818389901c161015612ae0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180612dd46033913960400191505060405180910390fd5b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260458152602001806130286045913960600191505060405180910390fd5b5050949350505050565b6000813f8015801590612c4557507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282612ccc5760008555612d12565b82601f10612ce557805160ff1916838001178555612d12565b82800160010185558215612d12579182015b82811115612d12578251825591602001919060010190612cf7565b50612d1e929150612d22565b5090565b5b80821115612d1e5760008155600101612d2356fe455243313135355061636b656442616c616e63652362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e475448455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e544f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20554e444552464c4f57455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e5061636b656442616c616e63652362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20554e444552464c4f57455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20494e56414c49445f42494e5f57524954455f4f5045524154494f4e455243313135354d696e744275726e5061636b656442616c616e6365235f62617463684d696e743a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a204f564552464c4f57a26469706673582212206ec8f552ccd3a6bfefd3ca734c12ff26de43b4a8f81f5a4a977b408bcacc52ce64736f6c63430007040033";
class NiftyupNFT__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.NiftyupNFT__factory = NiftyupNFT__factory;
NiftyupNFT__factory.bytecode = _bytecode;
NiftyupNFT__factory.abi = _abi;
