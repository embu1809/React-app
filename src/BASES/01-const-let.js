const nombre = "Fernando";  //Si se que el valor no va a cambiar lo hago en un const
const apellido = "Herrera";

let valorDado = 5; // Si no se si el valor va a cambiar lo hago en un let
valorDado = 4; // si estiy realizando el cambio de valor no es necesario el let de nuevo
const nombreCompleto = `${nombre} ${apellido}`; //Template String
console.log(nombreCompleto);
console.log(nombre, apellido, valorDado); 

if (true) {
    let valorDado = 6; //let solo se puede usar dentro del bloque
    console.log(valorDado); 
}

console.log(valorDado); //EL VALOR DE DADO = 6 SE MUESTRA SOLO DENDTRO DEL IF no se puede usar fuera del bloque

