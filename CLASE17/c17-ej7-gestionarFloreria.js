/*______________________    EJERCICIO 1 - CLASE 17     ____________________________



● Ejercicio 7: “La Floreria”
Escribe una función "gestionarFloreria" que realice las siguientes tareas
 con una lista predefi nida de nombres de fl ores:
1. Quite los espacios en blanco alrededor de cada fl or.
2. Verifi que si existe la fl or "Margarita" y, si está presente,
 agregue "Azucena" al fi nal de la lista.
3. Reemplace todas las fl ores "Orquídea" por "Clavel".
4. Encuentre el índice de la fl or "Girasol" y, si no está presente,
 agregue "Girasol" al inicio de la lista.
Devuelva una cadena de fl ores en orden alfabético separadas por puntos.
Ejercicios - Algoritmos de Búsqueda:

*/

// Array de flores de ejemplo
let flores = [" Rosa ", "Orquídea", "Margarita", "Lirio"];

function gestionarFloreria(listaFlores) {
  // 1. Quitar espacios alrededor de cada flor
  let floresLimpias = listaFlores.map(flor => flor.trim());

  // 2. Verificar si existe "Margarita" y, si está, agregar "Azucena" al final
  if (floresLimpias.includes("Margarita")) {
    floresLimpias.push("Azucena");
  }

  // 3. Reemplazar todas las flores "Orquídea" por "Clavel"
  floresLimpias = floresLimpias.map(flor => flor === "Orquídea" ? "Clavel" : flor);

  // 4. Encontrar el índice de "Girasol" y, si no está, agregar al inicio
  let indiceGirasol = floresLimpias.indexOf("Girasol");
  if (indiceGirasol === -1) {
    floresLimpias.unshift("Girasol");
    indiceGirasol = 0; // ahora está al inicio
  }

  // 5. Ordenar alfabéticamente y unir con puntos
  let floresOrdenadas = floresLimpias.sort().join(".");

  // Devolver un objeto con todos los resultados
  return {
    flores: floresLimpias,
    indiceGirasol: indiceGirasol,
    floresOrdenadas: floresOrdenadas
  };
}

// Ejecutar la función
let resultado = gestionarFloreria(flores);
console.log(resultado);
