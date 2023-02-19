const { Block, BlockChain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec, ec = new EC("secp256k1");

const MediChain = new BlockChain();

function createUser() {
    user = ec.genKeyPair();
    console.log(user.getPublic('hex'));
    return user;
}

function createTransaction(keyPair, to, json_entry) {
    const transaction = new Transaction(keyPair.getPublic("hex"), to, Date.now().toString(), json_entry);
    transaction.sign(keyPair);
    MediChain.addTransaction(transaction);
    console.log(transaction);
    mineTransactions();
}

function mineTransactions() {
    MediChain.mineTransactions();
}

function viewReport(publicKey) {
    return MediChain.getReport(publicKey);
}


hospital = createUser();
patient1 = createUser();
patient2 = createUser();

createTransaction(hospital, patient1.getPublic('hex'), {Height: "5'8", EyeColour: "Hazel", Gender: "Male"});
createTransaction(hospital, patient2.getPublic('hex'), {Height: "5'4", EyeColour: "Brown", Gender: "Male"});
// mineTransactions(MediChain);

// console.log("Hospital Data:\n" + MediChain.getReport(hospital.getPublic("hex")));

module.exports = {createUser, createTransaction, mineTransactions, viewReport}



// createTransaction(hospital, patient1.getPublic('hex'), {data: 'Diagnosed patient with OCD'});
// mineTransactions(MediChain);

// console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
// console.log("Hospital Data:\n" + MediChain.getReport(hospital.getPublic("hex")));
// console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
// console.log("Patient1 Data:\n" + MediChain.getReport(patient1.getPublic("hex")));
// console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
// console.log("Patient2 Data:\n" + MediChain.getReport(patient2.getPublic("hex")));
// console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
// console.log(MediChain.chain);
// console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
