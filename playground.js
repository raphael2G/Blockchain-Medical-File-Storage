const { Block, BlockChain, Transaction } = require("./blockchain.js");
const EC = require("elliptic").ec, ec = new EC("secp256k1");

const MediChain = new BlockChain();

function createUser() {
    return ec.genKeyPair();
}

function createTransaction(keyPair, to, json_entry) {
    const transaction = new Transaction(keyPair.getPublic("hex"), to, Date.now().toString(), json_entry);
    transaction.sign(keyPair);
    MediChain.addTransaction(transaction);
}

function mineTransactions() {
    MediChain.mineTransactions();
}

hospital = createUser();
patient1 = createUser();
patient2 = createUser();

createTransaction(hospital, patient1.getPublic('hex'), {Height: "5'8", EyeColour: "Hazel", Gender: "Male"});
createTransaction(hospital, patient2.getPublic('hex'), {Height: "5'4", EyeColour: "Brown", Gender: "Male"});
mineTransactions();

createTransaction(hospital, patient1.getPublic('hex'), {data: 'Diagnosed patient with OCD'});
mineTransactions();

console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
console.log("Hospital Data:\n" + MediChain.getReport(hospital.getPublic("hex")));
console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
console.log("Patient1 Data:\n" + MediChain.getReport(patient1.getPublic("hex")));
console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
console.log("Patient2 Data:\n" + MediChain.getReport(patient2.getPublic("hex")));
console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
console.log(MediChain.chain);
console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
