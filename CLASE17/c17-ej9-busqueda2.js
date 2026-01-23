/*______________________    EJERCICIO 1 - CLASE 17     ____________________________

● Ejercicio 9: Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la difi cultad un poco, 
y de paso, aplicamos lo aprendido en semanas anteriores.
 Quiero que hagan lo mismo del ejercicio anterior (buscar la posición de un número en un array),
  pero partiendo de esta lista:
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor,
 utilizando bubble sort. Luego, respondan las siguientes preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100?
*/

// Lista de ejemplo (desordenada)
let numeros = [22, 5, 100, 12, 1, 8, 7];

// 1 Bubble Sort: ordenar el array de menor a mayor
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiar
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 2 Búsqueda binaria
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

// Ordenar la lista primero
let numerosOrdenados = bubbleSort([...numeros]); // usamos spread para no modificar el original
console.log("Lista ordenada:", numerosOrdenados);

// Números a buscar
let numerosABuscar = [12, 5, 22, 100];

numerosABuscar.forEach(num => {
  let posicion = busquedaBinaria(numerosOrdenados, num);
  console.log(`El número ${num} está en la posición: ${posicion}`);
});
