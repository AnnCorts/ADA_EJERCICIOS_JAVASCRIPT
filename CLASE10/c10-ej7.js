/*______________________    EJERCICIO 7 - CLASE 10     ____________________________

Ejercicio 7 - Intercambio de Valores: 
 Declara dos variables con valores iniciales y luego intercambiá sus valores.
 Muestra los valores antes y después del intercambio en la consola. 
 Para intercambiar valores puedes usar varios métodos
 (usando una variable temporal, aritmética o asignación simultánea),
 eres libre de elegir el que desees, eso si, investiga sobre el que usarás.

*/

let numero1 = 1;
let numero2 = 2;

console.log(`valor inicial de numero1: ` + numero1);
console.log(`valor inicial de numero2: ` + numero2);

let variabletemporal = numero2 
 numero2 = numero1;
 numero1 = variabletemporal;

console.log(`valor final de numero1: ` + numero1 + ` y valor final de numero2: ` + numero2);