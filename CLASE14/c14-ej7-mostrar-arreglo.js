/*______________________    EJERCICIO 7 - CLASE 14     ____________________________

Ejercicios de Objetos:

●	Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔	título: una cadena con el título del libro.
✔	autor: una cadena con el nombre del autor del libro.
✔	anioPublicacion: un número con el año de publicación del libro.

Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y
 muestre por consola la información de cada libro en el formato especificado.

*/


//creamos dos objetos con tres propiedades cada uno.
let libro1 = {
    titulo: "La divina comedia",
    autor: "Dante Alighieri",
    anioPublicacion: 1963
}

let libro2 = {
    titulo: "El retrato de Dorian Grey",
    autor: "Oscar Wilde",
    anioPublicacion: 2005
}

// creamos la funcion mostrar libro

let arregloLibros = [libro1,libro2];  //hace un arreglo y toma los objetos como parametro.

function mostrarLibro(arregloLibros){
   
  for (let i = 0; i < arregloLibros.length; i++) {  // desde cero hasta la longitud del arreglo va recorriendo
    console.log("_______________________________________________");
    console.log("Título:", arregloLibros[i].titulo);
    console.log("Autor:", arregloLibros[i].autor);
    console.log("Año de publicación:", arregloLibros[i].anioPublicacion);
    console.log("_______________________________________________\n");
  }
}

//llamamos a la funcion:
mostrarLibro(arregloLibros)


