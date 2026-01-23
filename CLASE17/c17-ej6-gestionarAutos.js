/*______________________    EJERCICIO 1 - CLASE 17     ____________________________


● Ejercicio 6: Autos y más autos…
Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista
 predefi nida de marcas de autos:
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifi que si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()”


*/

// Array de marcas de autos de ejemplo
let autos = [" Tesla ", "Ford", "Chevrolet", "Ford", "Audi", "BMW"];

function gestionarAutos(listaAutos) {
  // 1. Quitar espacios alrededor de cada marca
  let marcas = listaAutos.map(marca => marca.trim());

  // 2. Verificar si existe "Tesla"
  let existeTesla = marcas.includes("Tesla");

  // 3. Reemplazar todas las marcas "Ford" por "BMW"
  marcas = marcas.map(marca => marca === "Ford" ? "BMW" : marca);

  // 4. Encontrar el índice de "Chevrolet"
  let indiceChevrolet = marcas.indexOf("Chevrolet");

  // 5. Devolver una cadena de marcas en orden alfabético separadas por puntos
  let marcasOrdenadas = marcas.sort().join(".");

  // Devolver un objeto con todos los resultados
  return {
    marcas: marcas,
    existeTesla: existeTesla,
    indiceChevrolet: indiceChevrolet,
    marcasOrdenadas: marcasOrdenadas
  };
}

// Ejecutar la función
let resultado = gestionarAutos(autos);
console.log(resultado);
