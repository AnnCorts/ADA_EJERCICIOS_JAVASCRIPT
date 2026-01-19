/*______________________    EJERCICIO 1 - CLASE 14     ____________________________

Ejercicios de Arrow Function:

●	Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y
 el precio unitario.
  Usa una función flecha para calcular el total con descuento según la cantidad.

*/

const prompt = require("prompt-sync")(); 

//variable global
let cantidad = parseInt(prompt("Ingrese la cantidad de productos: ")); 
let precio = parseFloat(prompt("Ingrese el precio unitario: "));;
 

//funcion flecha
let descuento = (precio, cantidad) => {
    let promo = 0;

    switch (cantidad) {
    case 3:
        promo = 5 ;
        console.log(`Tenes un decuento de 5%.`);
       break;
    case 9:
         promo = 10 ;
         console.log(`Tenes un decuento de 10%.`);
       break; 
    case 12:
         promo = 15 ;
         console.log(`Tenes un decuento de 15%.`);
       break;
    default:
        promo = 0 ;
        console.log(`Esa cantidad no tiene decuento.`);
}

let precioFinal = ((precio - ( precio * promo / 100 ))* cantidad);
return precioFinal;

} 

let resultado = descuento(precio, cantidad);

console.log(` Estas llevando ${cantidad} productos.El total es de: $${resultado}.`);




