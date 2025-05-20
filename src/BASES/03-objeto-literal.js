const persona = {
    nombre: "Juan",
    apellido: "Stark",
    edad: 35,
    direccion: {
        ciudad: "new york",
        zip: 12345,
        lat: 40.7128,
        lng: 74.0060,
    }
};


const persona2 = {...persona};
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);