/*______________________    EJERCICIO 2 - CLASE 17     ____________________________

● Ejercicio 2: Análisis y Modifi cación de Cadenas de Texto
Pide al usuario que ingrese una oración.
 Luego, escribe la función “procesarOracion” que haga lo siguiente:
1. Quite los espacios en blanco al principio y al fi nal.
2. Divida la oración en palabras.
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g”
 que indica que se debe buscar todas las apariciones del carácter 'a' en la cadena
  (la bandera g es para global, lo que signifi ca que reemplazará todas las apariciones,
   no solo la primera).
4. Encuentre la posición de la primera aparición de la palabra "javascript".
 De no aparecer retornar -1
5. Convierta la oración a una cadena de palabras separadas por guiones.


*/

const prompt = require (`prompt-sync`)(); 

//  pedir al usuario
let oracion = (prompt( "Ingrese una oracion: " )); 



function procesarOracion(oracion) {

  //1 sacamos espacios al principio y al final
  let recorte = oracion.trim();

  //2 Divide la oración en palabras
  let palabras = recorte.split(" ");

  //3 Reemplazar todas las 'a' por '@'
  let reemplazada = recorte.replace(/a/g, '@');

  //4 Encontrar la posición de "javascript"
  let posicion = recorte.toLowerCase().indexOf("javascript");

  //5 Convertir la oración en palabras separadas por guiones
  let conGuiones = palabras.join("-");

  return {
    oracionOriginal: oracion,
    sinEspacios: recorte,
    palabras: palabras,
    vocalesReemplazadas: reemplazada,
    posicionJavascript: posicion,
    conGuiones: conGuiones
  };
}

let resultado = procesarOracion(oracion);
console.log(resultado);
