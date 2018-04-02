"use strict";
(function()
{
  let blockchain = [];

  const SHA256 = require('crypto-js/sha256');
  const Block = (index, timestamp, data, previousHash = '') =>
  {
    let block = {};
    let calculateHash = () => {
      // introduce difficulty
      let hash = SHA256(block.index + block.previousHash + block.timestamp + JSON.stringify(block.data)).toString();
      return hash;
    }
    block.index = index;
    block.previousHash = previousHash;
    block.timestamp = timestamp;
    block.data = data;
    block.hash = calculateHash();

    return block;
  }

  const Blockchain = {
    blockchain: [],
    createGenesisBlock: () =>
    {
      let block = Block(0, Date.now(), "Genesis", "0");
      return block;
    },
    nextBlock: (lastBlock, content) =>
    {
      let index = lastBlock.index + 1;
      let timestamp = Date.now();
      let data = content || "Block " + index;
      let hash = lastBlock.hash;
      let block = Block(index, timestamp, data, hash);
      return block;
    },
    createBlockChain: (blocks) =>
    {
      let genesis = Blockchain.createGenesisBlock();
      let numOfBlocksToAdd = blocks;
      Blockchain.blockchain.push(genesis);
      if (blocks > 0) {
        let previousBlock = Blockchain.blockchain[0];
        for (var i = 0; i < numOfBlocksToAdd; i++)
        {
          let blockToAdd = Blockchain.nextBlock(previousBlock);
          Blockchain.blockchain.push(blockToAdd);
          previousBlock = blockToAdd;
          console.log("Block #" + blockToAdd.index + " has been added to the blockchain");
          console.log("Hash: " + blockToAdd.hash);
        }
        console.log('blockchain', Blockchain.blockchain);
      }
      return Blockchain.blockchain;
    },
    addBlock: (blockchain, data) =>
    {
      let chainLength = blockchain[0];
      console.log(chainLength);
      let newBlockchain = () => {
        let tempBlockchain = Blockchain.createBlockChain()
        return tempBlockchain[0];
      }
      console.log(Blockchain.blockchain.pop());
      let previousBlock = (blockchain[0] === null) ? newBlockchain() : Blockchain.blockchain[Blockchain.blockchain.length - 1]
      let blockToAdd = Blockchain.nextBlock(previousBlock, data);
      Blockchain.blockchain.push(blockToAdd);
    }
  }

  // create a blockchain of any amount of blocks
  Blockchain.createBlockChain(12);

  // adds a block at the end of the chain
  // this would come from a client primarily
  Blockchain.addBlock(Blockchain.blockchain, JSON.stringify({
    id: 12345,
    file: {
      type: 'txt',
      piece: 'My block is generated outside of the loop'.split(' ')
    },
    author: 'me'
  }));

  console.log(Blockchain.blockchain);
})();
