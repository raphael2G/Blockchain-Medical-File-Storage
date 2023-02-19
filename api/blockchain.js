const crypto = require("crypto");

class BlockChain {
  constructor() {
    this.chain = [new Block(Date.now().toString())];
    this.transactions = [];
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
    for (let i = 1; i < this.chain.length; i++) {
      currentBlock = this.chain[i];
      previousBlock = this.chain[i - 1];

      if (
        currentBlock.hash != currentBlock.getHash() ||
        previousBlock.hash != previousBlock.getHash()
      ) {
        return false;
      }
    }
    return true;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  mineTransactions() {
    this.addBlock(new Block(Date.now().toString(), this.transactions));

    this.transactions = [];
  }

  getReport(address) {
    let report = "";

    this.chain.forEach((block) => {
      block.data.forEach((transaction) => {
        if (address === transaction.to || address == transaction.from) {
          report +=
            "Date: " +
            transaction.date +
            "\n" +
            "Entry: " +
            JSON.stringify(transaction.data) +
            "\n";
        }
      });
    });

    return report;
  }
}

class Block {
  constructor(timestamp = "", data = []) {
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.getHash();
    this.previousHash = "";
  }

  getHash() {
    return crypto
      .createHash("sha256")
      .update(this.timestamp + JSON.stringify(this.data) + this.previousHash)
      .digest("hex");
  }
}

class Transaction {
  constructor(from, to, date, data) {
    this.from = from;
    this.to = to;
    this.date = date;
    this.data = data;
  }

  sign(keyPair) {
    if (keyPair.getPublic("hex") === this.from) {
      this.signature = keyPair
        .sign(
          crypto
            .createHash("sha256")
            .update(this.from + this.to + JSON.stringify(this.data))
            .digest("hex"),
          "base64"
        )
        .toDER("hex");
    }
  }

  isValid(transaction) {
    return (
      transaction.from &&
      transaction.to &&
      transaction.data &&
      ec
        .keyFromPublic(transaction.from, "hex")
        .verify(
          SHA256(
            transaction.from +
              transaction.to +
              transaction.date +
              transaction.data
          ),
          transaction.signature
        )
    );
  }
}

module.exports = { BlockChain, Block, Transaction };
