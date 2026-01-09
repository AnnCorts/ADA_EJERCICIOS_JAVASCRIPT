//  Define una constante PI con el valor de pi (3.14159).
//  Pide al usuario que ingrese el radio de un círculo y
//  calcula su área y
//  perímetro utilizando la constante PI.



const prompt = require (`prompt-sync`)(); // esto hace que me muestre en consola.

let piNumber = 3.14159;

// 1) pedir al usuario
let radio = parseFloat(prompt( "Ingrese el radio de un circulo: "  )); 

let area = piNumber * radio * radio
console.log("el area es: " + (area));

let perimetro = piNumber * 2 * radio
console.log("el perimetro es: " + (perimetro));
