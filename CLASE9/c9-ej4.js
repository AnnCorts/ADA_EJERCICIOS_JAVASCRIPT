// Declara una variable nombre y pide al usuario que ingrese su nombre.
//  Verifica si el nombre ingresado es igual a tu nombre.

//...
const prompt = require (`prompt-sync`)(); // esto hace que me muestre en consola.

let nombre  = String(prompt( "Ingrese su nombre: " )) ;


if (nombre === "Anto"){
    console.log(" ________________________________________\n Tenemos el mismo nombre");
} else {
    console.log(" ________________________________________\n gusto en conocerte " + nombre );
}
