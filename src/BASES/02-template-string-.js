const nombre = "Fernando";  //Si se que el valor no va a cambiar lo hago en un const
const apellido = "Herrera";

const nombreCompleto = nombre + " " + apellido; //Template String
console.log(nombreCompleto);
console.log("HOLA", nombre, apellido);  //Concatenacion de variables
console.log(`Hola ${nombre} ${apellido}
     ${2 + 2}
    `); //Template String

function getSaludo(nombre){
    return "Hola" + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`); //Template String