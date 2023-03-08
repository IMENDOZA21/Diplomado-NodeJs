require('dotenv').config();
const nombre = process.env.NOMBRE || "Guillermo";
async function hola(nombre){
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            console.log(`Hola ${nombre}`);
            if (nombre === "Ivan"){
                resolve(nombre);
            }else {
                reject();
            }
        },1000);
    });
}
async function hablar(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log("bla bla bla bla");
            resolve();
        },5000);
    })
}
async function adios(firstname){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log(`Adios ${firstname}`);
            resolve();
        },10);
    })
}
console.log("Iniciando proceso");
async function main() {
    let name = await hola(nombre);
    await hablar();
    await hablar();
    await adios(name);
    console.log("Terminando proceso");
}

main();