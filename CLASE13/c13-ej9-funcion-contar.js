/*______________________    EJERCICIO 1 - CLASE 13     ____________________________
 
● Ejercicio 9: Contar hasta un número.

Crea una función declarada llamada contarHasta
  que reciba un número
y use un bucle para imprimir todos los números desde 1 hasta ese número.

*/
const prompt = require (`prompt-sync`)(); 

// 1) pedir al usuario
let n = parseFloat(prompt( "Ingrese un numero positivo: " )); 

function contarHasta (n) {
    for (let i = 0; i < n; i++ ){
        console.log(`Contando ${i + 1}`); 
    }

   
}


contarHasta(n);


