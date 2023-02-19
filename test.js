const { Block, BlockChain } = require("./blockchain.js");

const MediChain = new BlockChain();

json_data = {Height: "5'8", EyeColour: "Hazel", Gender: "Male"}

block1 = new Block(Date.now().toString(), json_data);
MediChain.addBlock(block1);

json_data = {Height: "1'23", EyeColour: "Brown", Gender: "Male"}
block2 = new Block(Date.now().toString(), json_data);

MediChain.addBlock(block2);

console.log(MediChain.chain)


