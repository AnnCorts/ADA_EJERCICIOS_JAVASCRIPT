/*______________________    EJERCICIO 6 - CLASE 11     ____________________________

Ejercicio 6: La tabla de multiplicar
Consigna: Crea un programa que le pida al usuario un número y
 luego imprima su tabla de multiplicar desde el 1 hasta el 10.
  Usa un ciclo for.

*/

const prompt = require (`prompt-sync`)();  


// 1) pedir al usuario
let numero = parseFloat(prompt( "Ingrese un numero: " )); 

for (let i = 1; i <= 10 ; i++ ){  
   let multiplicacion = numero * i;
        console.log(`${numero} por  ${i} = ${multiplicacion}`);
    }
     



