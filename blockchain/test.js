const { Block, BlockChain, Transaction } = require("./blockchain/blockchain.js");
const EC = require("elliptic").ec, ec = new EC("secp256k1");


const MediChain = new BlockChain();


const hospital = ec.genKeyPair();
const patient1 = ec.genKeyPair();
const patient2 = ec.genKeyPair();

console.log('weoigw wgoj wefgwregj')
console.log(hospital)
console.log('weoigw wgoj wefgwregj')


console.log('Hospital Public Key: ')
console.log('Hospital Private Key: ')
console.log(' - - - - - - - - - - - - - - - ')
console.log('patient1 Public Key: ', patient1.getPublic())
console.log('patient1 Private Key: ', patient1.getPrivate())
console.log(' - - - - - - - - - - - - - - - ')
console.log('patient2 Public Key: ', patient1.getPublic())
console.log('patient2 Private Key: ', patient1.getPrivate())
console.log(' - - - - - - - - - - - - - - - ')

//  - - - - - - -- - -- - block 1 - - - - - - -- - -- - 

json_data = {Height: "5'8", EyeColour: "Hazel", Gender: "Male"}
const transaction1 = new Transaction(hospital.getPublic("hex"), patient1.getPublic("hex"), Date.now().toString(), json_data);
transaction1.sign(hospital);
MediChain.addTransaction(transaction1);


json_data2 = {Height: "5'4", EyeColour: "Brown", Gender: "Male"}
const transaction2 = new Transaction(hospital.getPublic("hex"), patient2.getPublic("hex"), Date.now().toString(), json_data2);
transaction2.sign(hospital);
MediChain.addTransaction(transaction2);

MediChain.mineTransactions();

//  - - - - - - -- - -- - block 1 - - - - - - -- - -- - 

//  - - - - - - -- - -- - block 2 - - - - - - -- - -- - 

// Create a transaction
const transaction3 = new Transaction(hospital.getPublic("hex"), patient1.getPublic("hex"), Date.now().toString(), {data: 'Diagnosed patient with OCD'});
transaction3.sign(hospital);
MediChain.addTransaction(transaction3);

// Mine transaction
MediChain.mineTransactions();

// Prints out balance of both address
console.log("Hospital Data:\n" + MediChain.getReport(hospital.getPublic("hex")));
console.log("Patient1 Data:\n" + MediChain.getReport(patient1.getPublic("hex")));
console.log("Patient2 Data:\n" + MediChain.getReport(patient2.getPublic("hex")));