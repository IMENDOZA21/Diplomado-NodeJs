const impar = require('is-odd');
const par = require('is-even');
const bcryptjs = require("bcrypt");
const citas = require("./citas/citas");
const color = require("./colores/color")

console.log(impar("4"));
console.log(par(4));

async function encriptar(password){
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
    console.log(hash);
    return hash;
}

encriptar("marcianito21").then(r => {
    console.log(citas + " " + r);
});

console.log(citas);
console.log(color);
console.log(color.getColorAzul());
console.table(color.todosLosColores);
console.log(color.getColorAleatorio());
