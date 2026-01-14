/*______________________    EJERCICIO 1 - CLASE 11     ____________________________

Ejercicio 10: Adivina el número
Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1 y 10.

 Luego, pide al usuario que adivine el número hasta 3 intentos.

  Si el usuario acierta en cualquiera de los intentos,
   muestra un mensaje de felicitación y detén los intentos restantes.

    Si no acierta después de los 3 intentos, muestra el número secreto.
     Usa un for para resolver este ejercicio.

*/
const prompt = require (`prompt-sync`)();  


// 1) genera numero

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log("La computadora eligió el número:", numeroAleatorio); //se dejó para anular en cualquier momento

/*  EXPLICACION chat gpt:

Math.random()
Devuelve un número decimal entre 0 (inclusive) y 1 (exclusivo)

Math.random() * 10
Rango: 0 a 9.999...

Math.floor(...)
Redondea hacia abajo

+ 1
Ajusta el rango final a 1–10

*/

//2 pide al usuario



for (let i = 0; i < 3; i++ ){
 
  let numero = parseFloat(prompt( "_______________________\n Ingrese un numero: " ));    



               if (numero === numeroAleatorio){
                    console.log(`encontraste el numero!!!  era ${numero}`);
                     break
               } else {
                    console.log(`sigue intentando`);
                 

                   }
               
}                    

/*  (encontrar donde meter esto para que lo muestre al final del tercer intento,
     pero que no se muestre cuando se gana)
     
     if((i=3) && (numero != numeroAleatorio)){
                          console.log(`lo siento! no le acertaste! `);
               }
*/