/*______________________    EJERCICIO 1 - CLASE 17     ____________________________




● Ejercicio 5: Manipulación de Arrays y Cadenas
A partir del siguiente array de frases,
 escribe la función “procesarFrases” que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena separada por espacios.
5. Devuelva un nuevo array con las frases modifi cadas.

*/

// Array de frases de ejemplo
let frases = [
  "El clima es MALO hoy",
  "Ese resultado fue malo",
  "No es un día malo para aprender"
];

function procesarFrases(frases) {
  // Creamos un nuevo array con las frases modificadas
  let frasesModificadas = frases.map(function(frase) {
    // 1. Convertir la frase a minúsculas
    let fraseMinuscula = frase.toLowerCase();

    // 2. Dividir la frase en palabras
    let palabras = fraseMinuscula.split(" ");

    // 3. Reemplazar "malo" por "bueno"
    palabras = palabras.map(function(palabra) {
      return palabra === "malo" ? "bueno" : palabra;
    });

    // 4. Combinar las palabras nuevamente en una frase
    return palabras.join(" ");
  });

  // 5. Devolver el nuevo array
  return frasesModificadas;
}

// Ejecutar la función
let resultado = procesarFrases(frases);
console.log(resultado);
