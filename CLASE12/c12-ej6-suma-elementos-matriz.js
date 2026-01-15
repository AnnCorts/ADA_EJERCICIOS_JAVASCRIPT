/*______________________    EJERCICIO 1 - CLASE 12     ____________________________

● Ejercicio 6: Iguales a 10 pero menores de 1000

Dada una matriz, recorrer sus valores y sumar solo los números que estén por
encima o sean iguales a 10, pero menores que 1000.

*/

// la matriz 

let matriz = [
    [10, 3, 2, 1, 4, 7], 
    [5, 5, 10, 100, 4], 
    [5, 125, 10, 1020, 4], 
    [5, 5, 5097, 100, 4]
]; 

//contador

let suma = 0 ; //defino el contador

// for para recorrer
for (let fila=0; fila<matriz.length;fila++){
    for (let columna=0; columna<matriz[fila].length;columna++){
        // esto define valor como un elemento de la matriz.
        let valor = matriz[fila][columna]; 

        //condiciones para tomar un valor (mayor a 10, menor  1000)
        if(valor >= 10 && valor < 1000){
            suma += valor;  //suma valor al contador suma.
        }


    }
}

console.log("La suma total es de:", suma);
