/*______________________    EJERCICIO 1 - CLASE 8     ____________________________
 En este ejercicio, practicarás el uso de variables y operadores aritméticos. 
 Debes escribir un programa en JavaScript que:

1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.

Requisitos:
● Utiliza la función prompt() para solicitar el dato al usuario.
● Almacená el número ingresado en una variable.
● Utiliza un operador aritmético para calcular el doble del número. 
________________________________________________________________________________*/

const prompt = require (`prompt-sync`)();  // llamamos a la libreria prompt-sync
                                          //  para poder pedirle cosas al usuario

// 1) pedir al usuario
let cualquiera = parseFloat(prompt(
    "Ingrese un numero cualquiera: "  
)); 



// 2) calculamos el doble

let doble = (cualquiera * 2);

// 3) mostrar resultado

console.log(' ________________________________________\n El doble de ese numero es: ' + doble);





