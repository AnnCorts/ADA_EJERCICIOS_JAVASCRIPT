/*______________________    EJERCICIO 10 - CLASE 13     ____________________________

● Ejercicio 10: Factorial de un número (Ejercicio entrevista)

 Crea una función expresada llamada calcularFactorial que reciba un número y
  devuelva su factorial. Fórmula del factorial:

                       n! = n * (n-1) * ..... * 1
*/
const prompt = require (`prompt-sync`)(); 

// 1) pedir al usuario
let n = parseFloat(prompt( "Ingrese un numero positivo: " )); 


let calcularFactorial = function (n) {
    let factorial = 1;
    for (let i = n; i > 0; i-- ){
            factorial *= i;   // es lo mismo que: " factorial = factorial * i; "
    }

    return factorial;
};

console.log(`El factorial de ${n} es: ${calcularFactorial(n)}`);

