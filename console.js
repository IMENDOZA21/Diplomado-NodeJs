console.time("tiempo");
console.log("logs");
console.info("Informacion");
console.warn("Advertencia");
console.error("Error fatality");
console.error("Mensaje error", 5);
console.error(new Error("Error ocurrido"));

const persona = [
    {
        nombre: "ivan",
        edad: 25,
        apellido: "mendoza"
    },
    {
        nombre: "guillermo",
        edad: 45,
        apellido: "gutierrez"
    }
]
console.table(persona);

console.group("Agrupando v1");
console.log("mensaje1");
console.log("mensaje2");
console.log("mensaje3");
console.groupEnd("Agrupando v1");
console.group("Agrupando v2");
console.log("mensaje1");
console.log("mensaje2");
console.log("mensaje3");
console.groupEnd("Agrupando v2");

function mensaje1(){
    console.group("Msg1");
    console.log("msg 1");
    mensaje2();
    console.log("msg 2");
    console.log("msg 3");
    console.groupEnd("Msg1");
}
function mensaje2(){
    console.group("Msg2");
    console.log("msg 1");
    console.log("msg 2");
    console.log("msg 3");
    console.groupEnd("Msg2");
}
mensaje1();

console.clear(); //limpia la consola

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");
console.count("veces");


for (let i=0 ; i < 1000 ; i++){

}
console.timeEnd("tiempo");

console.log(global);

function saludar(){
    console.log("HOLA PERRO");
}
setImmediate(saludar);
