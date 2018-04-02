// const createGenesisBlock = () =>
// {
//   let block = Block(0, Date.now(), "Genesis", "0");
//   return block;
// }
//
// const nextBlock = (lastBlock, content) =>
// {
//   let index = lastBlock.index + 1;
//   let timestamp = Date.now();
//   let data = content || "Block " + index;
//   let hash = lastBlock.hash;
//   let block = Block(index, timestamp, data, hash);
//   return block;
// }
//
// const createBlockChain = (blocks) =>
// {
//   let genesis = createGenesisBlock();
//   let numOfBlocksToAdd = blocks;
//   blockchain.push(genesis);
//   if (blocks > 0) {
//     let previousBlock = blockchain[0];
//     for (var i = 0; i < numOfBlocksToAdd; i++)
//     {
//       let blockToAdd = nextBlock(previousBlock);
//       blockchain.push(blockToAdd);
//       previousBlock = blockToAdd;
//       // console.log("Block #" + blockToAdd.index + " has been added to the blockchain");
//       // console.log("Hash: " + blockToAdd.hash);
//     }
//     // console.log('blockchain', blockchain);
//   }
//   return blockchain;
// }
//
// const addBlock = (blockchain, data) =>
// {
//   let chainLength = blockchain.length;
//   let newBlockchain = () => {
//     let tempBlockchain = createBlockChain()
//     return tempBlockchain[0];
//   }
//   let previousBlock = (chainLength === 0) ? newBlockchain() : blockchain[blockchain.length - 1]
//   let blockToAdd = nextBlock(previousBlock, data);
//   // console.log(previousBlock);
//   blockchain.push(blockToAdd);
// }
//
// createBlockChain(1);
//
// let newBlock = addBlock(blockchain, {
//   id: 12345,
//   file: {
//     type: 'txt',
//     piece: 'My block is generated outside of the loop'.split(' ')
//   },
//   author: 'me'
// });
// console.log(blockchain);
