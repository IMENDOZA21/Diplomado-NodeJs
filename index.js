const impar = require('is-odd');
const par = require('is-even');
const bcrypt = require('bcrypt');

console.log(impar("4"));
console.log(par(4));

async function encriptar(password){
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
    console.log(hash);
    return hash;
}

console.log(encriptar("jjjj"));

var password = "marcianito21";
const salt = bcrypt.genSalt(10);
const hash = bcrypt.hash(password, salt);
console.log(hash);