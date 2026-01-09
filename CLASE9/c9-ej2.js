// Define dos constantes,
//  RANGO_MINIMO y RANGO_MAXIMO,
//  con valores numéricos de tu elección.
//  Pide al usuario que ingrese un número y
//  verifica si está dentro del rango definido por las constantes.


const prompt = require (`prompt-sync`)(); // esto hace que me muestre en consola.

// RANGO
const minimo = 0
const maximo = 100

// 1) pedir al usuario
let numero = parseFloat(prompt( "Ingrese un numero: "  )); 


// 2) Decidir cual es el mayor.

if ((minimo < numero) && (numero < maximo)) {
    console.log(" ________________________________________\n El numero está en el rango");
} else {
    console.log(` ________________________________________\n el numero está fuera del rengo`);
}
