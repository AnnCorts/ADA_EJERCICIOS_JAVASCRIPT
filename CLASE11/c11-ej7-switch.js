/*______________________    EJERCICIO 1 - CLASE 11     ____________________________

Ejercicio 7: Calculadora simple
Consigna: Crea un programa que le pida al usuario dos números y
 una operación matemática a realizar: suma, resta, multiplicación o división.

  Según la operación ingresada, el programa deberá calcular y mostrar el resultado.
   Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error.
    Usa switch para resolverlo.
*/

const prompt = require (`prompt-sync`)();  


// 1) pedir al usuario
let primerNumero = parseFloat(prompt( "Ingrese un numero: " )); 
let segundoNumero = parseFloat(prompt( "Ingrese otro numero: " )); 
let operacion = prompt( "Ingrese una operacion: (por ejemplo: suma, resta, multiplicacion o division) " ); 



switch (operacion) {
    case "suma" :
       let sumar = primerNumero + segundoNumero ;
       console.log(`la suma es ${sumar}`);
       break;
    case "resta" :
       let restar = primerNumero - segundoNumero ;
       console.log(`la resta es ${restar}`);
       break; 
    case "multiplicacion" :
       let multiplicar = primerNumero * segundoNumero ;
       console.log(` la multiplicacion es ${multiplicar}`);
       break;
    case "division" :
       let dividir = primerNumero / segundoNumero ;
       console.log(` la division es ${dividir}`);
       break; 
    default:
        console.log(`ingrese una operacion valida.`);

}


