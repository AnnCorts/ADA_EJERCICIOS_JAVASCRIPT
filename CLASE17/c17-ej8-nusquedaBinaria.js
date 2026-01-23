/*______________________    EJERCICIO 1 - CLASE 17     ____________________________


● Ejercicio 8: Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria,
 vamos a empezar con un ejemplo simple.
  Quiero que se familiaricen con la sintaxis del mismo,
   por lo que no hare énfasis en los datos, sino en la solución.
Dada la siguiente lista:
Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
o ¿Cuál es la posición del número 1?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 6?
o ¿Cuál es la posición del número 9?
o ¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil,
 ya que podemos leer el array, y determinar con un cálculo visual la posición de cada elemento,
pero, la propuesta que les hago es que codeen un algoritmo de búsqueda binaria,
 que “busque” ese número, por ejemplo, el 6, y nos indique por consola la posición del mismo.
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra.

*/

// Array ordenado de ejemplo
let numeros = [1, 3, 5, 6, 9, 11];

// Función de búsqueda binaria
function busquedaBinaria(arr, objetivo) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === objetivo) {
      return medio; // encontrado
    } else if (arr[medio] < objetivo) {
      inicio = medio + 1; // buscar en la mitad derecha
    } else {
      fin = medio - 1; // buscar en la mitad izquierda
    }
  }

  return -1; // no encontrado
}

// Probar los números solicitados
let numerosABuscar = [1, 5, 6, 9, 11];

numerosABuscar.forEach(num => {
  let posicion = busquedaBinaria(numeros, num);
  console.log(`El número ${num} está en la posición: ${posicion}`);
});
