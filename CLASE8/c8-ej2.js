/*______________________    EJERCICIO 2 - CLASE 8     ____________________________
En este ejercicio, practicarás el uso de condicionales (if, else).
 Escribe un programa en JavaScript que:

1. Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso.

Requisitos:
● Utilizá una estructura de control de fl ujo (if, else if, else) para hacer las verificaciones.
● Usá parseFloat() para convertir la entrada del usuario a un número. 
________________________________________________________________________________*/

const prompt = require (`prompt-sync`)();  // llamamos a la libreria prompt-sync
                                          //  para poder pedirle cosas al usuario

// 1) pedir al usuario
let numero = parseFloat(prompt(
    "Ingrese un numero: "  
)); 


// 2) calculamos pertenecia a conjuntos mediante control de flujo.

if (numero > 0 ){
    console.log(' ________________________________________\n El numero es positivo. ' );
}else if(numero < 0 ){
    console.log(' ________________________________________\n El numero es negativo. ' );
}else {
    console.log(' ________________________________________\n El numero es cero. ' );
}
    

