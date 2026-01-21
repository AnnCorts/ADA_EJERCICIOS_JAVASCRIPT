/*______________________    EJERCICIO 6 - CLASE 14     ____________________________

Ejercicios de Objetos:

●	Ejercicio 6: El deportista
Para este ejercicio deberán definir un objeto literal “deportista”,
 con los siguientes atributos: nombre, energía, experiencia.

Ademas queremos poder pedirle al deportista que entrene.
 Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características:
✔	Recibe por parámetro la cantidad de horas.
✔	Resta a su energía (this.energia) la cantidad de horas x 5.
✔	Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y
 ver cómo va variando la energía y experiencia del deportista por consola.

*/
const prompt = require("prompt-sync")(); 

//array
let deportista = {
    nombre : "Dante",
    energia : 100,
    experiencia : 20,
    entrenarHoras: function(horas){
        this.energia -= horas * 5;       // this.energia = this.energia - (horas * 5)  
        this.experiencia += horas * 2;  // this.energia = this.energia + (horas * 2)
}
}


//variable global
let horas = parseInt(prompt("Ingrese la cantidad de horas entrenando: ")); 

 
//funcion flecha


console.log("\n__________________________________________\nAntes del entrenamiento: \n__________________________________________\n ");
console.log("Energia de Dante: ", deportista.energia );
console.log("Experiencia del entrenamiento: ", deportista.experiencia);

deportista.entrenarHoras(horas);

console.log("\n__________________________________________\nLuego del entrenamiento: \n__________________________________________\n");
console.log("Energia de Dante: ", deportista.energia);
console.log("Experiencia del entrenamiento: ", deportista.experiencia);


