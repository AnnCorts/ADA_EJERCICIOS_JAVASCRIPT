/*______________________    EJERCICIO 1 - CLASE 12     ____________________________

● Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta
que el usuario ingrese un número negativo. Luego, imprime la suma de todos los
números ingresados.

*/

const prompt = require (`prompt-sync`)();  


console.log(`continuaré pidiendo numeros hasta que me des un numero negativo!\n_______________________________`); 

let numero = 1;

while(numero > 0) {
     numero = parseFloat(prompt( "Ingrese un numero: " )); 
     console.log(`ingresaste: ${numero}`);
                  
     if (numero < 0){ console.log(`terminamos! \n_______________________________`); }
}

