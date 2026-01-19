/*______________________    EJERCICIO 1 - CLASE 14     ____________________________

Ejercicios de Arrow Function:

●	Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y
 usa una función flecha para calcular el promedio.

*/

const prompt = require("prompt-sync")(); 


let notas =[]  // 2) creamos un array vacio
//variable global
let nota;  // este va a ser el contador que guarde las notas

for (let i = 0; i < 5 ; i++ ){  //recorre de 0 hasta 5 sumando uno
    //ingresa cada nota el contador i va sumandose
    let nota = parseFloat(prompt(`Por favor ingrese la nota ${i+ 1}: `)); 
    // se va armando el array con cada nota que se agrega
       notas [i] = nota; 
}
console.log(` las notas son: ${notas} `);



//funcion flecha
let promedio = (notas) => {
    
    let sumaNotas = notas.reduce(function(acum,num){
        return acum + num;
    }); 
    let prom = sumaNotas/5;

    return prom;

}
let resultado =promedio(notas)
//mensaje
console.log(`El resultado es: ${resultado}`)

