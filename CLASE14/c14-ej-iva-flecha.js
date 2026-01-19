/*______________________    EJERCICIO 1 - CLASE 14     ____________________________

Ejercicios de Arrow Function:

●	Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y
 el porcentaje de IVA.
  Usa una función flecha para calcular el precio final.

*/
const prompt = require("prompt-sync")(); 

//variable global
let precio = parseFloat(prompt("Ingrese el precio del producto: ")); 
let iva = parseFloat(prompt("Ingrese el porcentaje de iva: "));;

//funcion flecha
let precioIva = (precio, iva) =>  (precio + ( precio * iva / 100 ));

//mensaje
console.log(`El resultado es: ${precioIva(precio,iva)}`)