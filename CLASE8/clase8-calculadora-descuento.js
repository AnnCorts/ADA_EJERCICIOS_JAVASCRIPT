//__________________________________________________________________
//    Ejercicio 1: Calculadora de Descuento
//__________________________________________________________________
//    Escribe un programa que calcule
//  el precio final de un producto después de aplicar un descuento.
//  Pide al usuario que ingrese el precio original del producto y
//  el porcentaje de descuento, y muestra el precio final.
//__________________________________________________________________


const prompt = require (`prompt-sync`)();

// 1) pedir al usuario
let precio = parseFloat(prompt(
    "Ingrese el precio original del producto: "  
)); 

let descuento = parseFloat(prompt(
    "Ingrese el descuento a aplicar sobre producto: "
)); 

// 2) calculamos el descuento

let precioFinal = precio - (precio * (descuento / 100 ));

// 3) mostrar resultado

console.log(' ________________________________________\n El precio final es: ' + precioFinal);






//__________________________________________________________________
//                           NOTAS:
//__________________________________________________________________


//__________________________________________________________________

//:::::NODE.js:
//Es un entorno de ejecución que nos permite ejecutar JavaScript
//  por fuera de un navegador web.


//__________________________________________________________________
//:::::NPM:
//Node package manager / es su propio gestor de paquetes
// gestiona as dependencias de un proyecto. (una dependendencia es una libreria)
// npm es una herramienta que te permite 
// instalar, actualizar y administrar librerías (paquetes) 
// que usa tu proyecto de JavaScript/Node.js.

// Una dependencia es una librería externa que tu proyecto necesita para funcionar.


//__________________________________________________________________
//:::::libreria:
// es un conjunto de funciones, clases o código ya escrito por otras personas,
//  que se pueden integrar al un proyecto.
//  por ejemplo propmt sync lee entradas de teclado



//__________________________________________________________________
//¿Qué hace esta línea?

//  require('prompt-sync')
//  Importa el módulo prompt-sync, que es una librería de Node.js 
//  que permite solicitar datos al usuario desde la consola (como input() en Python).

//  () al final
//  El módulo prompt-sync devuelve una función.
//  Los paréntesis () ejecutan esa función y
//  devuelven otra función lista para usarse como entrada.

//  const prompt = ...
//  Guarda esa función en la constante prompt,
//  que luego puedes usar para leer datos del usuario.