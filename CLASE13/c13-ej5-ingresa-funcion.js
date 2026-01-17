/*______________________    EJERCICIO 5 - CLASE 13     ____________________________

 ● Ejercicio 5: Concatenar nombres (función expresada)
Crea una función expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido)
 como parámetros y devuelva el nombre completo concatenado.
 */

const prompt = require("prompt-sync")(); 

//variables globales
let nombre = prompt("Ingrese su nombre: "); 
let apellido = prompt("Ingrese su apellido: "); 


let concatenarNombres = function (nombre, apellido) {

    return `\n___________________________________________\n Mi nombre es ${nombre} ${apellido},\n comandante de los ejércitos del Norte,\n general de las legiones Fénix,\n leal servidor del verdadero emperador Marco Aurelio,\n padre de un hijo asesinado,\n esposo de una esposa asesinada,\n y juro que me vengaré,\n en esta vida o en la otra. \n___________________________________________" `;

}
console.log(concatenarNombres( nombre, apellido));



