/*______________________    EJERCICIO 8 - CLASE 14     ____________________________

Ejercicios de Objetos:

●	Ejercicio 8: Funcion backEnd()
Creá la función backEnd() que recibirá 2 números como parámetros.
 La función deberá imprimir por pantalla los números del 1 al 100,
  pero teniendo en cuenta los siguientes criterios:

✔	Si el número a imprimir es múltiplo del primer parámetro que se ingresó,
 deberá mostrar el string “Back” en lugar del número.

✔	Si el número a imprimir es múltiplo del segundo parámetro ingresado,
 deberá mostrar el string “End” en su lugar del número.

✔	Si el número a imprimir es múltiplo de ambos parámetros,
 deberá mostrar el string “Back End” en lugar del número.


*/

function backEnd(a,b){ //recibe 2 numeros de parametros
  for (let i = 1; i <= 100; i++) {//desde 1 a 100 recorre
    if ((i%a === 0) && (i%b === 0)){
      console.log("Back End");  
    } else if (i%b === 0){
      console.log("End");
    }  else if (i%a === 0){
      console.log("Back");
    } else {
      console.log(i);
    }
  }  
}

backEnd(2,9);

/*
se le preguntó a chatgpt como se podria hcer de otra manera
ofreció una opcin con ternario y funcion flecha:
//ternario______condición ? valorSiVerdadero : valorSiFalso
* metió el if ternario dentro del console log


const backEnd = (a, b) => {
  for (let i = 1; i <= 100; i++) {
    console.log(
      i % a === 0 && i % b === 0
        ? "Back End"
        : i % a === 0
        ? "Back"
        : i % b === 0
        ? "End"
        : i
    );
  }
};

backEnd(2, 9);

*/