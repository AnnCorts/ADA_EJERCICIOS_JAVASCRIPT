/*______________________    EJERCICIO 3 - CLASE 17     ____________________________


● Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función ‘gestionarProductos’
 que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específi co. En este punto pueden usar forEach
 o investigar el método “fi ndIndex()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
4. Verifi que si existe un producto con precio mayor a 50. Para esto investigar el método
 “.some()” https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
5. Devuelva una cadena de nombres de productos separados por comas.


*/

// Array de productos inicial
let productos = [
  { nombre: "Camisa", precio: 30 },
  { nombre: "Pantalón", precio: 45 },
  { nombre: "Zapatos", precio: 60 }
];

function gestionarProductos(productos) {
  // 1. Añadir un nuevo producto
  productos.push({ nombre: "Sombrero", precio: 25 });

  // 2. Eliminar el último producto
  productos.pop();

  // 3. Encontrar el índice de un producto específico (ej: "Pantalón")
  let indice = productos.findIndex(function(prod) {
    return prod.nombre === "Pantalón";
  });

  // 4. Verificar si existe un producto con precio > 50
  let hayCaro = productos.some(function(prod) {
    return prod.precio > 50;
  });

  // 5. Devolver una cadena con los nombres de los productos separados por comas
  let nombres = productos.map(function(prod) {
    return prod.nombre;
  }).join(", ");

  
  // Retornamos un objeto con todos los resultados
  return {
    arrayFinal: productos,
    indicePantalon: indice,
    existeCaro: hayCaro,
    nombres: nombres
  };
}

// Ejecutar la función
let resultado = gestionarProductos(productos);
console.log(resultado);
