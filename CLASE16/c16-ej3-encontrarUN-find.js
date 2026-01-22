/*______________________    EJERCICIO 3 - CLASE 16     ____________________________


● Ejercicio 3: Encuentra el primer número mayor a 10
Tienes una lista de números [5, 8, 12, 20, 3].
 Queremos encontrar el primer número de la lista que sea mayor a 10.
  Recuerda que el resultado debe ser únicamente el primer número que cumpla esta condición,
   no todos los números que lo hagan.

*/

let numeros = [5, 8, 12, 20, 3]

let mayor = numeros.find(function(unNumero) {
  return unNumero > 10;
});

console.log(mayor);



/* ________________________________________________
          si quisiera todos los mayores

let mayor = numeros.filter(function(unNumero) {
  return unNumero > 10;
});

console.log(mayor);

*/
