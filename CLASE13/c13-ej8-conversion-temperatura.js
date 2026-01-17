/*______________________    EJERCICIO 1 - CLASE 13     ____________________________

● Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)

 Crea una función expresada llamada convertirCelsiusAFahrenheit
  que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
   Fórmula:
           Fahrenheit = (Celsius * (9/5) ) + 32

*/

const prompt = require (`prompt-sync`)(); 
                                          
let celsius = parseFloat(prompt( "Ingrese la temperatura en Celsius: " )); 

let convertirCelsiusAFahrenheit = function (celsius) {
  let fahrenheit = `la temperatura en fahrenheit es: ` + (celsius * 9 / 5 + 32);

    return fahrenheit;
}

console.log(convertirCelsiusAFahrenheit(celsius));
