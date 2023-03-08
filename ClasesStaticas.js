 //Clase que necesita ser instanceada
class Saludar1{
    saludo = "Hola";

    metodoSaludar(){
        return this.saludo;
    }
}


let saludar = new Saludar1();
console.log(saludar.metodoSaludar());

//Clase Static no necesita instancearse
class Saludar2{
    static saludo = "Hola";
    static metodoSaludar(){
        return this.saludo;
    }
}
console.log(Saludar2.saludo);
console.log(Saludar2.metodoSaludar());