/*______________________    EJERCICIO 3 - CLASE 12     ____________________________

● Ejercicio 3: Ciclo For
Nuestra tarea es contar la cantidad de números impares que hay desde el
número 0 hasta un número X (inclusive). Para esto, debes seguir los siguientes
pasos:
1. Solicitar al usuario que ingrese un número X.
2. Inicializar una variable para contar los números impares.
3. Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).
4. Dentro del ciclo, verificar si el número es impar.
5. Si el número es impar, incrementar el contador de números impares.
6. Al finalizar el ciclo, imprimir en consola la cantidad de números impares
encontrados.
7. Utiliza el operador módulo (%) para verificar si un número es impar.
8. Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe imprimir:
“La cantidad de números impares desde 0 hasta 10 (inclusive) es: 5”

*/

const prompt = require (`prompt-sync`)();  


// 1) pedir al usuario

let fin = parseFloat(prompt( "Ingrese un numero X : " )); 
let contador = 0;

for (let i = 0; i < fin+1 ; i++ ){  //a fin le sume uno para que tambien tome el extremo
    if (i % 2){
      console.log(`son impares  ${i}`);
      contador ++
    } else {
        //console.log(`son pares  ${i}`);
    }
     
}
console.log(` hay ${contador} numeros impares`);