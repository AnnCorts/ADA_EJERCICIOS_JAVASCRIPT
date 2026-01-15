/*______________________    EJERCICIO 1 - CLASE 12     ____________________________

● Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números
enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en
la matriz.


*/

let matriz = [
    [10, 10, 10, 10, 10], 
    [5, 5, 15, 10, 15], 
    [8, 2, 10, 1, 9], 
    [5, 5, 5, 10, 5],
    [2, 8, 9, 10, 1]
];

let suma = 0 ; //defino el contador

// for para recorrer
for (let fila=0; fila<matriz.length;fila++){
    for (let columna=0; columna<matriz[fila].length;columna++){
        // esto define valor como un elemento de la matriz.
        let valor = matriz[fila][columna]; 

            suma += valor;  //suma valor al contador suma.

    }
}

console.log("La suma total es de:", suma);
