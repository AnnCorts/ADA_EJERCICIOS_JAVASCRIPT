/*______________________    EJERCICIO 1 - CLASE 12     ____________________________

● Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en
un array. 
Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se
encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su
desarrollo)
*/
const prompt = require (`prompt-sync`)();  

//array
let nombres =[]  // 2) creamos un array vacio

//ingreso de nombres
let nombre;  // este va a ser el contador que guarde los nombres

for (let i = 0; i < 5 ; i++ ){  //recorre de 0 hasta el length sumando uno
    //ingresa cada nota el contador i va sumandose
    let nombre = (prompt(`Por favor ingrese el nombre ${i+ 1}: `)); 
    // se va armando el array con cada nombre que se agrega
       nombres [i] = nombre; 
}

//ingreso de busqueda

let busqueda = (prompt( "Ingrese un nombre que quiera buscar: " )); 

//busqueda

    if (nombres.includes(busqueda)){     //para ver si lo incluye
         console.log(`  ${busqueda} se encuentra en la base de datos `);
    } else {
          console.log(`  ${busqueda} no se encuentra en la base de datos `);
    }     

// console.log(nombres);  // asi se muestra con corchete.
