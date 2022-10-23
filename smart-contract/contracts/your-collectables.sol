//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
import "./uploads.sol";

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

contract YourCollectible is
    ERC721Upgradeable,
    ERC721EnumerableUpgradeable,
    ERC721URIStorageUpgradeable,
    OwnableUpgradeable,
    Upload
{
    mapping(uint256 => bool) uploadedCollectableMintedStatus;

    function _updateUploadCollectable(uint256 tokenId, bool status) private {
        uploadedCollectableMintedStatus[tokenId] = status;
    }

    modifier checkminted(uint256 tokenId) {
        require(!uploadedCollectableMintedStatus[tokenId]);
        _;
    }
    using CountersUpgradeable for CountersUpgradeable.Counter;
    CountersUpgradeable.Counter private _tokenIdCounter;

    // constructor(string memory name, string memory symbol)
    //     ERC721(name, symbol)
    // {}

    // function initilizer(string memory name, string memory symbol) public {
    //     ERC721(name, symbol);
    // }
    function initialize(
        string memory name,
        string memory symbol,
        uint256 filesCount
    ) public initializer {
        __ERC721_init(name, symbol);
        __Ownable_init();
        filesCount = filesCount;
        // __UUPSUpgradeable_init();

        // setBaseURI(baseURI);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    // function mintItem(address to, uint256 tokenId) public returns (uint256) {
    //     // _tokenIdCounter.increment();
    //     // uint256 tokenId = _tokenIdCounter.current();
    //     _safeMint(to, tokenId);
    //     File memory file = files[msg.sender][tokenId];
    //     _setTokenURI(
    //         tokenId,
    //         string(abi.encodePacked(_baseURI(), " ", file.hash))
    //     );
    //     _updateUploadCollectable(tokenId, true);
    //     return tokenId;
    // }
    function mintItem(address to, string memory uri) public returns (uint256) {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721Upgradeable, ERC721EnumerableUpgradeable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _beforeConsecutiveTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint96 size
    ) internal override(ERC721Upgradeable, ERC721EnumerableUpgradeable) {
        super._beforeConsecutiveTokenTransfer(from, to, tokenId, size);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
