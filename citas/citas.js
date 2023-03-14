const citas = [
    "cita1",
    "cita2",
    "cita3",
    "cita4",
    "cita5",
    "cita6",
    "cita7",
    "cita8"
];

function citaAleatoria(){
    return citas[Math.floor(Math.random()*citas.length)];
}

module.exports = citaAleatoria();