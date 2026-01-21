/*______________________    EJERCICIO 9 - CLASE 14     ____________________________

Ejercicios de Objetos:

●	Ejercicio 9: Última aparición de un modelo de auto
En este ejercicio, trabajaremos con una lista de modelos de autos.
 
Implementa una función llamada ultimaAparicionModeloAuto(modelo) que encuentre y
  muestre la última posición en la lista donde aparece el modelo específico de auto
   dado por modelo.

  Datos Iniciales:
✔	Utiliza un array llamado modelosAutos que contiene varios modelos de autos,
 algunos repetidos para demostrar la funcionalidad.

Funcionalidad:
✔	Implementa la función ultimaAparicionModeloAuto(modelo),
 que toma modelo como parámetro (un string).
✔	Debes recorrer el array de manera manual para encontrar la última aparición del modelo.
✔	Si el modelo se encuentra en el array,
 la función debe imprimir por consola la posición (índice + 1) en la que aparece
  (considerando que la numeración es de 1 a N).
✔	Si el modelo no está en el array,
 debe imprimir un mensaje indicando que el modelo no está presente.


*/

//array:
let modelosAutos = [ "ford", "chevrolet", "fiat", "renault" , "fiat" , "opel" , "ford", "chevrolet" ]  //supuse que se referia a marcas porque habla de un string.


function ultimaAparicionModeloAuto(modelo) {
  let ultimaPosicion = -1;  //suponemos primero que no se encuentra. para inicializar el contador.

  //genera la posicion
  for (let i = 0; i < modelosAutos.length; i++) {
    if (modelosAutos[i] === modelo) {  // el elemento del arreglo es igual a modelo
      ultimaPosicion = i;
    }
  }
  //
  if (ultimaPosicion !== -1) { // el "-1" implica que no existe, y la negacion implica que si.
    console.log(`La última aparición de "${modelo}" está en la posición ${ultimaPosicion + 1}`);
  } else {
    console.log(`El modelo "${modelo}" no está presente`);
  }
}

ultimaAparicionModeloAuto("bmw");

