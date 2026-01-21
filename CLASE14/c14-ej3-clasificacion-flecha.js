/*________________________    EJERCICIO 3 - CLASE 14     ____________________________
Ejercicios de Arrow Function:

●	Ejercicio 3: Clasificación de edades
Solicita al usuario una edad 
 usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.

*/

const prompt = require("prompt-sync")(); 

let edad = parseFloat(prompt(`Por favor ingrese su edad: `)); 


//funcion flecha
let clasificar = (edad) => {

        if (edad <= 12)  {
            console.log(" ________________________________________\n sos un niño");
        } else if ((edad > 12 && edad <= 19)){
            console.log(" ________________________________________\n sos un adolescente");
        } else if ((edad > 19 && edad <= 60)){
            console.log(" ________________________________________\n sos un adulto");
        } else {
            console.log(" ________________________________________\n sos un adulto mayor");
        }
}
let resultado =clasificar(edad)










