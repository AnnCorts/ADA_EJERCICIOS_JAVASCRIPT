/*______________________    EJERCICIO 1 - CLASE 17     ____________________________



● Ejercicio 4: Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas.
 Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifi que si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados por puntos.
 Investigar el método “.sort()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


*/

const prompt = require('prompt-sync')();

// Pedir al usuario la lista de nombres
let entrada = prompt("Ingrese los nombres separados por comas (Julian,Maria,Malena,Andrea,Pablo,Pedro): ");

function transformarYAnalizarNombres(lista) {
  // 1. Convertir la cadena en array y quitar espacios
  let nombres = lista.split(",").map(nombre => nombre.trim());

  // 2. Verificar si existe el nombre "Juan"
  let existeJuan = nombres.includes("Juan");

  // 3. Reemplazar todos los nombres "Maria" por "Ana"
  nombres = nombres.map(nombre => nombre === "Maria" ? "Ana" : nombre);

  // 4. Encontrar el índice del nombre "Pedro"
  let indicePedro = nombres.indexOf("Pedro");

  // 5. Devolver los nombres en orden alfabético separados por puntos
  let nombresOrdenados = nombres.sort().join(".");

  // Devolver un objeto con todos los resultados
  return {
    nombres: nombres,
    existeJuan: existeJuan,
    indicePedro: indicePedro,
    nombresOrdenados: nombresOrdenados
  };
}

// Ejecutar la función
let resultado = transformarYAnalizarNombres(entrada);
console.log(resultado);
