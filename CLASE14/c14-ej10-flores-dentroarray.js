/*______________________    EJERCICIO 10 - CLASE 14     ____________________________

Ejercicios de Objetos:

●	Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona
 sus flores favoritas. Realiza las siguientes acciones:

1.	Inicializa un array vacío para almacenar las flores favoritas.

2.	Pregunta al usuario por sus tres flores favoritas utilizando prompt y
 agrega cada una al array manualmente (sin usar métodos como push).

3.	Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.

4.	Muestra por consola cuántas de las flores favoritas se mencionaron
 (esto debe hacerse manualmente).

*/
const prompt = require (`prompt-sync`)();  


//1
let flores = []; //areglo vacio.


//2
for(let i=0; i<3; i++) {//pregunta tres veces.
flores[i] = prompt(`dime tu ${i+1} flor favorita: `); //va metiendo los elementos en el array

}

//3
let florEspecifica = prompt(`dime una flor especifica: `);
//4
let contador = 0; 

for(let i=0; i<3;i++) {//pregunta tres veces.
    if (florEspecifica === flores[i]){
        contador++;
    }    
}

//resultado
if (contador > 0) {
    console.log(`Sí, ${florEspecifica} se encuentra entre tus favoritas ${contador} vez/veces.`);
} else {
    console.log(`No, ${florEspecifica} no está entre tus flores favoritas.`);
}
