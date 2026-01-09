// Declara dos variables numéricas numero1 y numero2.
//  Pide al usuario que ingrese dos números y
//  muestra cuál es mayor o si son iguales.


const prompt = require (`prompt-sync`)(); // esto hace que me muestre en consola.

// 1) pedir al usuario
let numero1 = parseFloat(prompt(
    "Ingrese el primer numero: "  
)); 

let numero2 = parseFloat(prompt(
    "Ingrese el segundo numero: "  
));

// 2) Decidir cual es el mayor.

if (numero1 > numero2){
    console.log(" ________________________________________\n El numero 1 es mayor que numero 2");
} else if(numero1 < numero2){
    console.log(" ________________________________________\n El numero 1 es menor que numero 2");
} else {
    console.log(` ________________________________________\n Ambos numeros son iguales`);
}
