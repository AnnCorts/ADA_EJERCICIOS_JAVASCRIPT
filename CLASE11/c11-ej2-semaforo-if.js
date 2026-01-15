/*______________________    EJERCICIO 2 - CLASE 11     ____________________________

Ejercicio 2: Semáforo inteligente
Consigna: Vamos a programar un semáforo.
 Escribe un programa que le pida al usuario ingresar un color del semáforo:
  rojo, amarillo o verde. Dependiendo del color ingresado,
   el programa debe imprimir un mensaje con la acción correspondiente:
● Rojo: "Alto, no puedes avanzar."
● Amarillo: "Precaución, prepárate para avanzar."
● Verde: "Avanza con seguridad." Si el usuario ingresa un color inválido,
 el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
  Utiliza un switch para resolver este ejercicio.


*/


const prompt = require (`prompt-sync`)();  


// 1) pedir al usuario
let color = parseFloat(prompt( "Ingrese un color del semaforo (rojo, amarillo o verde): " )); 

if (color === rojo )  {
    console.log(" ________________________________________\n alto!!");
} else if (color === amarillo ) {
   console.log(" ________________________________________\n avanza con seguridad"); 
} else if (color === verde ){
   console.log(" ________________________________________\n puede pasar");
} else {
   console.log(" ________________________________________\n color no reconocido. Ingrese rojo, amarillo o verde: ");
}







