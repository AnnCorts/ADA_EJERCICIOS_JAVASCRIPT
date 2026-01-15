/*______________________    EJERCICIO 1 - CLASE 11     ____________________________


Ejercicio 4: ¿Es par o impar?
Consigna: Los números pueden ser pares o impares.
 Escribe un programa que le pida al usuario un número y determine si es par o impar.
  Muestra un mensaje explicativo indicando qué significa cada caso.


*/


const prompt = require (`prompt-sync`)();  


// 1) pedir al usuario
let numero = parseFloat(prompt( "Ingrese un numero : " )); 

//if ternario

(numero % 2)  ? console.log("es impar") : console.log("es par");


