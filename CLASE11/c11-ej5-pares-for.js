/*______________________    EJERCICIO 1 - CLASE 11     ____________________________

Ejercicio 5: Encuentra los números pares entre dos valores
Consigna: Escribe un programa que le pida al usuario dos números enteros (inicio y fi n).
 El programa debe mostrar todos los números pares que se encuentran entre esos dos valores,
  incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números
   entre el inicio y el fi n. Si el número inicial es mayor que el final,
    el programa debe mostrar un mensaje indicando que los valores son inválidos.


*/
const prompt = require (`prompt-sync`)();  


// 1) pedir al usuario
let inicio = parseFloat(prompt( "Ingrese un numero de inicio: " )); 
let fin = parseFloat(prompt( "Ingrese un numero de finalizacion: " )); 

for (let i = inicio; i < fin+1 ; i++ ){  //a fin le sume uno para que tambien tome los extremos
    if (i % 2){
      
    } else {
        console.log(`son pares  ${i}`);
    }
     
}