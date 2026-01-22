/*______________________    EJERCICIO 6 - CLASE 16     ____________________________


● Ejercicio 6: Agrega un prefi jo y un sufi jo a cada palabra
Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript'].
 Queremos transformarlas para que cada palabra tenga un prefi jo "¡" y un sufi jo "!".
  Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".

*/

let palabras =  ['hola', 'mundo', 'javascript'];

let exclaman = palabras.map(function(palabra) {
  return "¡" + palabra + "!";
});

console.log(exclaman);

//___________extra___________
console.log(`_________________________`)

exclaman.forEach(function(exclama){
    console.log(exclama);
})