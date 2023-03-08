require('dotenv').config();
console.log(process.env.VECES);

console.log("Primera instruccion");

i = 0;
var veces = process.env.VECES || 10; //
/*
while(i<10){
    console.log(i);
    i++;
}*/
var id = setInterval(function(){
    console.log(i);
    i++;
    if (i == veces) {
        clearInterval(id);
        //console.log(3 + z); //inyeccion de error
    }
},1000);

console.log("Segunda instruccion");