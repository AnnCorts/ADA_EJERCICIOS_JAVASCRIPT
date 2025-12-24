/*______________________    EJERCICIO 2 - CLASE 8     ____________________________

Este ejercicio es ideal para familiarizarse con
 la manipulación de cadenas de texto y la función prompt().
  Escribe un programa que:

1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.

Requisitos:
● Utiliza prompt() para recibir el nombre del usuario.
● Muestra un mensaje utilizando concatenación de cadenas.
________________________________________________________________________________*/

const prompt = require (`prompt-sync`)();  // llamamos a la libreria prompt-sync
                                          //  para poder pedirle cosas al usuario

// 1) pedir al usuario
let nombre = prompt(  //toma todo como un string. por eso no hay que hacer ninguna conversion.
    "Ingrese su nombre: "  
); 

// 3) mostrar saludo

console.log(' ________________________________________\n \n           	ʕっ•ᴥ•ʔっ         \n\n  Hola!! qué gusto verte, ' + nombre + '. \n_________________________________________ ');



