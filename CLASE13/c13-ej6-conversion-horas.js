/*______________________    EJERCICIO 6 - CLASE 13     ____________________________

● Ejercicio 6: Convertir a minutos

Crea una función declarada llamada convertirHorasAMinutos
 que reciba un número de horas como parámetro y devuelva el total en minutos.

 */
const prompt = require("prompt-sync")(); 

//variable global
let horas = prompt("Ingrese las horas: "); 
 


function convertirHorasAMinutos (horas) {
    let minutos = (horas) * 60
    return ` ${horas} horas equivalen a ${minutos} minutos`;

}
console.log(convertirHorasAMinutos(horas));

