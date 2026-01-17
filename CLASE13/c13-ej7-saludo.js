/*______________________    EJERCICIO 1 - CLASE 13     ____________________________

● Ejercicio 7: Mensaje según la hora
Declara una variable global llamada horaActual (puedes asignarle un valor fijo).
 Crea una función declarada llamada mostrarSaludo que imprima "Buenos días"
  si la hora es menor a 12, "Buenas tardes" si es menor a 18, o "Buenas noches"
   en cualquier otro caso.

*/

const prompt = require("prompt-sync")(); 

//variable global
let horaActual = 23; 



function mostrarSaludo (horaActual) {
 
    if(horaActual < 12){
        return "Buenos dias!"; 
    }else if(horaActual <18){
        return "Buenas tardes!"; 
    }else{
        return "Buenas noches!"; 
    }

}
console.log(mostrarSaludo(horaActual));




/*____esto no funciona, revisar________________
function mostrarSaludo (horaActual) {
 
switch (horaActual) {
    case horaActual < 12  :
      saludo = console.log(`Buenos dias!`);
       break;
    case horaActual < 18  :
        saludo =  console.log(`Buenas tardes!`);
       break; 
    case horaActual < 25  :
        saludo =  console.log(`Buenas noches!`);
       break;
    default:
        console.log(`ingrese una hora valida.`);
    }

    return saludo;
}
console.log(mostrarSaludo(horaActual));
*/