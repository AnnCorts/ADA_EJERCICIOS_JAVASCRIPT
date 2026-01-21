/*______________________    EJERCICIO 5 - CLASE 14     ____________________________

Ejercicios de Arrow Function:

●	Ejercicio 5: Verificar origen del auto
Solicita al usuario ingresar la marca de un auto y
 utiliza una función flecha para verificar y mostrar si el auto es de origen
  nacional o importado. Considera que solo los autos de marcas "Chevrolet",
   "Ford" y "Fiat" son de origen nacional.
✔	Solicita al usuario que ingrese la marca de un auto.
✔	Utiliza una función flecha para determinar si la marca ingresada
 corresponde a un auto de origen nacional o importado.
✔	Muestra un mensaje indicando si el auto es de origen nacional o importado,
 basado en la marca ingresada por el usuario.

*/
const prompt = require("prompt-sync")(); 

//variable global
let marca = (prompt("Ingrese una marca de auto: ").toLowerCase()); 
//toLowerCase es para convertir en minusculas y asi no tener errores en el ingreso

//funcion flecha
let nacionalidad = (marca) => {
   if (marca === "chevrolet" || marca === "ford" || marca === "fiat" ){
      return "La marca ingresada es de origen nacional";
   }else{
      return "La marca ingresada es de origen importado";
   }
}

console.log(nacionalidad(marca));






