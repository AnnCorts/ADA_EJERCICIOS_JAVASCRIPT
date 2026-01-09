// Pide al usuario que ingrese su edad y
//  verifica si es mayor o menor de edad.
//  Muestra un mensaje personalizado según el caso.

const prompt = require (`prompt-sync`)(); // esto hace que me muestre en consola.

let edad  = parseInt(prompt( "Ingrese su edad: " )) ;


if (edad >= 18){
    console.log(" ________________________________________\n sos mayor de edad");
} else {
    console.log(" ________________________________________\n sos menor" );
}



