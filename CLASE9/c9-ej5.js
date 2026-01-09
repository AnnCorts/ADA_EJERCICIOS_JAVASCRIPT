// Escribe un programa que pida al usuario que ingrese tres números
//  y determine cuál es el mayor de los tres.


const prompt = require (`prompt-sync`)(); // esto hace que me muestre en consola.

// 1) pedir al usuario
let numero1 = parseFloat(prompt(
    "Ingrese el primer numero: "  
)); 

let numero2 = parseFloat(prompt(
    "Ingrese el segundo numero: "  
));

let numero3 = parseFloat(prompt(
    "Ingrese el tercer numero: "  
));

// 2) Decidir cual es el mayor.

if ((numero1 > numero2) && (numero1 > numero3)) {
    console.log(" ________________________________________\n El numero 1 es mayor");
} else if((numero2 > numero1) && (numero2 > numero3)){
    console.log(" ________________________________________\n El numero 2 es mayor");
} else {
    console.log(" ________________________________________\n El numero 3 es mayor");
}