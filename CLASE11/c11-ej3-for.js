/*______________________    EJERCICIO 1 - CLASE 11     ____________________________

Ejercicio 3: ¿Sabes contar?
Consigna: Crea un programa que le pida al usuario un número positivo.
 El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
  Usa un ciclo for para realizar la tarea.

*/

const prompt = require (`prompt-sync`)();  


// 1) pedir al usuario
let numero = parseFloat(prompt( "Ingrese un numero positivo: " )); 

//ciclo for  
// for(inicio; condicion; modificador){}
// for(defino a i=0 ; para los i menores a numero; voy sumando uno en cada vuelta){}

for (let i = 0; i < numero; i++ ){
    console.log(`Contando ${i + 1}`);
    
}
