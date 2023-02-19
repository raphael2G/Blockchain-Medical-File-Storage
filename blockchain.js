const crypto = require("crypto")

  
class BlockChain {
    constructor() {
        this.chain = [new Block(Date.now().toString())];
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(block) {
        block.previousHash = this.getLastBlock().hash;
        block.hash = block.getHash();
        this.chain.push(Object.freeze(block));
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i ++) {
            currentBlock = this.chain[i];
            previousBlock = this.chain[i-1];

            if (currentBlock.hash != currentBlock.getHash() || previousBlock.hash != previousBlock.getHash()) {
                return false;
            }
        }
        return true;
    }
}

class Block {
    constructor(timestamp = "", data=[]) {
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.getHash();
        this.previousHash = "";
    }

    getHash() {
        return crypto.createHash("sha256").update(this.timestamp + JSON.stringify(this.data) + this.previousHash).digest('hex');
    }
}

module.exports = {BlockChain, Block}