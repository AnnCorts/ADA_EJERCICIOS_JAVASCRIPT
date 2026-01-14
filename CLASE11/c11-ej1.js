/*______________________    EJERCICIO 1 - CLASE 11     ____________________________

Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos.
 Escribe un programa que le pida al usuario un número cualquiera.
  El programa deberá analizar si el número ingresado es positivo, negativo o cero.
   Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.


*/


const prompt = require (`prompt-sync`)();  


// 1) pedir al usuario
let numero = parseFloat(prompt( "Ingrese un numeor cualquiera: " )); 

// con if:

if (numero > 0)  {
    console.log(" ________________________________________\n es positivo");
} else if (numero < 0) {
   console.log(" ________________________________________\n es negativo"); 
} else {
   console.log(" ________________________________________\n es cero");
}




