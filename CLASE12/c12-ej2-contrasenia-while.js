/*______________________    EJERCICIO 2 - CLASE 12     ____________________________


● Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. 
Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la
correcta.
 La contraseña correcta es "1234".


*/

const prompt = require (`prompt-sync`)();  


console.log(`CONTRASEÑA\n_______________________________`); 

let contrasenia = 1234;
let pasword = 1 ;
while(contrasenia != pasword) {
     pasword = parseFloat(prompt( "Ingrese su contraseña numérica de 4 digitos: " )); 
     console.log(`contraseña incorrecta`);
                  
     if (contrasenia === pasword){ console.log(`Bienvenida! \n_______________________________`); }
}

