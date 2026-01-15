/*______________________    EJERCICIO 1 - CLASE 12     ____________________________

● Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes usando
arrays y mostrarlas por pantalla:
1. Crear un array para almacenar las notas.
2. Define un array vacío llamado notas donde almacenaremos las notas de los
estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una por una
utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente a
posiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas.

*/
const prompt = require (`prompt-sync`)();  

//array

let notas =[]  // 2) creamos un array vacio

//ingreso de notas

let cantidadNotas = parseFloat(prompt("Ingrese la cantidad de notas: ")); //vamosa definir el length
let nota;  // este va a ser el contador que guarde las notas

for (let i = 0; i < cantidadNotas ; i++ ){  //recorre de 0 hasta el length sumando uno
    //ingresa cada nota el contador i va sumandose
    let nota = parseFloat(prompt(`Por favor ingrese la nota ${i+ 1}: `)); 
    // se va armando el array con cada nota que se agrega
       notas [i] = nota; 
}
console.log(` las notas son: ${notas} `);
console.log(notas);  //asi se muestra con corchete.