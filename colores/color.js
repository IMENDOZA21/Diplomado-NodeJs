class Color{
    constructor(nombre, codigo) {
        this.nombre = nombre;
        this.codigo = codigo;
    }
}

/**
 *
 * @type {Color[]}
 */
const todosLosColores = [
    new Color("amarillo",1),
    new Color("azul",2),
    new Color("rojo",3),
    new Color("negro",4),
    new Color("blanco",5)
];

/**Shorcut: /** + enter
 * Funcion para retornar un color aleatorio
 * @returns {String, String} Color con nombre y codigo
 */
exports.getColorAleatorio = () => {
    return todosLosColores[Math.floor(Math.random()*todosLosColores.length)];
}

/**
 * Retorna el color Azul
 * @returns {Color}
 */
exports.getColorAzul = () => {
    return todosLosColores[1];
}

exports.todosLosColores = todosLosColores;
