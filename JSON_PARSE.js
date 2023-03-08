const myObject = {
    nombre : "Ivan",
    edad : 25,
    comidaFav: "Pasta"
}
console.log(myObject);
var myObjectString = JSON.stringify(myObject);
console.log(myObjectString);
var myObjectParse = JSON.parse(myObjectString);
console.log(myObjectParse);
