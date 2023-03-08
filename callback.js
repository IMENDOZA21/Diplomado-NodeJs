require('dotenv').config();
const nombre = process.env.NOMBRE || "Guillermo";
function hola(nombre,callback){
    setTimeout(function (){
        console.log(`Hola ${nombre}`);
        callback(nombre);
    },1000);
}
function adios(firstname,callback){
    setTimeout(function (){
        console.log(`Adios ${firstname}`);
        callback();
    });
}
console.log("Iniciando proceso");
hola(nombre,function (name){
    adios(name,function () {
        console.log("terminando proceso");
    })
});