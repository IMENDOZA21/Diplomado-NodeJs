require('dotenv').config();
const nombre = process.env.NOMBRE || "Guillermo";
function hola(nombre){
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
function hablar(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log("bla bla bla bla");
            resolve(nombre);
        },5000);
    })
}
function adios(firstname){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log(`Adios ${firstname}`);
            resolve();
        },10);
    })
}
console.log("Iniciando proceso");
hola(nombre)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(function (){
        console.log("Terminando proceso")
    })
    .catch(function (){
        console.log("Ah ocurrido un error")
    });
