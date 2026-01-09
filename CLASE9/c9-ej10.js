// Pide al usuario que ingrese un número del 1 al 7 y
//  muestra el día de la semana correspondiente.
//  Si el número no está dentro de ese rango, muestra un mensaje de error.



const prompt = require (`prompt-sync`)();  // llamamos a la libreria prompt-sync
                                          //  para poder pedirle cosas al usuario


// 1) pedir al usuario
let numero = parseFloat(prompt(
    "Ingrese un numero del 1 al 7: "  
)); 


if (numero % 7 == 0){
    console.log(" ________________________________________\n Es domingo");
}else if (numero % 6 == 0){
    console.log(" ________________________________________\n Es sabado");
}else if (numero % 5 == 0){
    console.log(" ________________________________________\n Es viernes");
}else if (numero % 4 == 0){
    console.log(" ________________________________________\n Es jueves");
}else if (numero % 3 == 0){
    console.log(" ________________________________________\n Es miercoles");
}else if (numero % 2 == 0){
    console.log(" ________________________________________\n Es martes");
}else if (numero % 1 == 0){
    console.log(" ________________________________________\n Es lunes");
} else 
     console.log(" ________________________________________\n te dije del 1 al 7");


// en este caso abarca todos lo numeros multiplos de los dias correspondientes.
// se arregla con un igual estricto



