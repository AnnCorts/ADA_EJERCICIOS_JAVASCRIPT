/*______________________    EJERCICIO 2 - CLASE 10     ____________________________

Ejercicio 2 – Usando las variables: 
Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso,
 y luego muestre un mensaje personalizado que incluya toda esta información.

 Desglosando el ejercicio deberás:
1. Pide al usuario que ingrese su nombre.
2. Pide al usuario que ingrese su edad.
3. Pide al usuario que ingrese su peso.
4. Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.

Pista: En el ejercicio anterior, declaramos valores en las variables. 
Ahora nos toca pedir datos al usuario, 
por lo que usaremos prompt-sync para solicitar esta información.

*/

const prompt = require (`prompt-sync`)();  // llamamos a la libreria prompt-sync
                                          //  para poder pedirle cosas al usuario

// 1) pedir al usuario
let nombre = (prompt( "Ingrese su nombre: " )); 
let edad = (prompt( "Ingrese su edad: " )); 
let peso = (prompt( "Ingrese su peso: " )); 


console.log(' ________________________________________\n \n           	ʕっ•ᴥ•ʔっ         \n\n  Hola!! qué gusto verte, ' +
     nombre +
     `\n  Tienes  ` +
     edad + ` años.` +
     `\n  Pesas ` +
     peso  + ` kilos` +
      '. \n_________________________________________ ');