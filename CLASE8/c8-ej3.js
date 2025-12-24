/*______________________    EJERCICIO 2 - CLASE 8     ____________________________

Este ejercicio te ayudará a practicar la entrada de datos y
 el uso de operadores aritméticos.
  Escribe un programa que:

1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.

Requisitos:
● Utiliza prompt() para recibir los números.
● Utiliza parseFloat() para convertir las entradas a números.
● Almacena los resultados en variables adecuadas y muestra el resultado.
________________________________________________________________________________*/

const prompt = require (`prompt-sync`)();  // llamamos a la libreria prompt-sync
                                          //  para poder pedirle cosas al usuario

// 1) pedir al usuario
let numero1 = parseFloat(prompt(
    "Ingrese un numero: "  
)); 
let numero2 = parseFloat(prompt(
    "Ingrese otro numero: "  
)); 

// 2) calculamos la suma.


let suma = (numero1 + numero2); 

// 3) mostrar resultado

console.log(' ________________________________________\n La suma de esos numeros es: ' + suma);


