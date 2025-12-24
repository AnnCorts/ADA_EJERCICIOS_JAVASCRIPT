/*______________________    EJERCICIO 2 - CLASE 8     ____________________________

En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales.
 Debes escribir un programa que:

1. Solicite al usuario que ingrese un número entero.
2. Determine si el número es par o impar.
3. Muestre un mensaje indicando si el número es par o impar.

Requisitos:
● Utiliza el operador módulo (%) para comprobar si el número es divisible por 2.
● Usa una estructura if-else para mostrar el mensaje adecuado.
________________________________________________________________________________*/

const prompt = require (`prompt-sync`)();  // llamamos a la libreria prompt-sync
                                          //  para poder pedirle cosas al usuario

// 1) pedir al usuario
let numero = parseInt(prompt(  //ParseInt para ingresar un numero entero
    "Ingrese un numero entero: "  
)); 


// 2) calculamos divisibilidad por 2.

if (numero%2 == 0 ){
    console.log(' ________________________________________\n El numero es par. ' );
}else {
    console.log(' ________________________________________\n El numero es impar. ' );
}




