/*______________________    EJERCICIO 9 - CLASE 12     ____________________________
● Ejercicio 9: Última aparición de un modelo de auto

Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.

Los gastos estarán en una matriz de 4x7, cada fila representa una semana y
cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0,
día 1, columna 1, día 2, etcétera.

a) Lo que nos solicitan es dar el total de gastos en una SEMANA. Recordemos
que cada fila representa una semana, es decir, si nos indican semana 2
tenemos que sumar la fila 1 de la matriz. Recordar que las matrices
comienzan siempre en posición 0.

b) La aplicación también tendrá una parte de estadísticas, para esto nos
solicitan dar el total de un DIA en particular, por ejemplo del día 3, acá
también tengamos en cuenta lo que ocurre con las filas, ya que las columnas
también comienzan en 0.

c) Por último, es necesario tener el total de gastos realizados en el mes.
✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para
resolver este último punto?

d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día
que más gastos se realizaron.
✔ Posibles matrices para comprobar los resultados.

          Día1  Día2  Día3  Día4  Día5  Día6  Día7
Semana 1  1135  2500   900  1600  2800   650  1100
Semana 2  1750  1890  1900  1300   898  1750  2800
Semana 3  1700  1150  1690  1900  1770   500  2560
Semana 4   800  1250  1430  2100  1980  1270  950
*/

const prompt = require (`prompt-sync`)();  


//matriz
let matriz = [
    [1135, 2500,  900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300,  898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [ 800, 1250, 1430, 2100, 1980, 1270,  950]
];

//_________________________SEMANA_______________________________
//contador
let suma_semana = 0; 

 //array
let semana = [];  //creo un array para almacenar los elementos de la semana

let nroSemana = (prompt( "Ingrese el numero de la semana: " )); 
let idSemana =nroSemana  - 1; //ahora traducimos semana nro a elemento de la matriz

// for para recorrer

     for (let columna=0; columna<matriz[idSemana].length;columna++){ 
     
        suma_semana += matriz[idSemana][columna]

    }

console.log(`el gasto de la semana numero ${nroSemana} es: ${suma_semana}`);


//_________________________DIA_______________________________
//contador
let suma_dia = 0; 

 //array


let nroDia = (prompt( "Ingrese el numero del dia: " )); 
let idDia =nroDia  - 1; //ahora traducimos dia nro a elemento de la matriz

// for para recorrer

     for (let fila=0; fila<matriz.length; fila++){ 
     
        suma_dia += matriz[fila][idDia]
        suma_dia_particular = matriz[idSemana][idDia]

    }

//EXTRA. el switch es porque se puede agregar el dia escrito en la terminal.   
switch (idDia) {
    case 1 :
       idDia = " lunes"
       break;
    case 2 :
       idDia = " martes"
       break;
    case 3 :
       idDia = " miercoles"
       break;
    case 4 :
       idDia = " jueves"
       break;
    case 5 :
       idDia = " viernes"
       break;
    case 6 :
       idDia = " sabado"
       break;
    case 7 :
       idDia = " domingo"
       break;                 
    default:
}

console.log(`el gasto de los dias ${idDia} del mes es: ${suma_dia}`);
console.log(`el gasto del dia ${idDia}  de la semana ${idSemana} es: ${suma_dia_particular}`);


//_________________________MES_______________________________
//contador
let suma_mes = 0; 

 //array
  let mes = [];  //creo un array para almacenar los elementos del mes

// for para recorrer primero filas, luego columnas

     for (let fila=0; fila<matriz.length; fila++){ 
         for (let columna=0; columna<matriz[fila].length;columna++){

        suma_mes += matriz[fila][columna]
        
    }}
console.log(`(F) el gasto del mes son: ${suma_mes} `);


// for para recorrer primero filas, luego columnas
//contador
let suma_mes2 = 0; 

    for (let columna=0; columna<matriz[0].length;columna++){
         for (let fila=0; fila<matriz.length; fila++){ 
         
        suma_mes2 += matriz[fila][columna]
        
    }}
console.log(`(C) el gasto del mes son: ${suma_mes2} `);
//Es lo mismo recorer primero por filas o por columnas.

/*d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día
que más gastos se realizaron.
✔ Posibles matrices para comprobar los resultados.
*/

//_________________________semana con mas gasto____________________
//contador
let maxSemana = 0;
let idSem = 0; 


// for para recorrer primero filas, luego columnas

     for (let fila=0; fila<matriz.length; fila++){                      //para cada fila
        let sumaSem = 0;

        for (let columna=0; columna<matriz[fila].length;columna++){    //recorro columnas
            sumaSem += matriz[fila][columna]                              //sumo todos los dias de la semana
        }

        if (sumaSem >maxSemana){
            maxSemana = sumaSem ;  //reescribo el maximo
            idSem = fila + 1;   // identifico semana
        }

    }
console.log(`la semana con mas gasto fue la semana ${idSem} con: ${maxSemana} `);

//_________________________dia con mas gasto____________________
//contador
let maxDia = 0;
let idDDia = 0; 
let posicionDia = [0][0];  //elijo el primer elemento de la matriz
let semana3
// for para recorrer primero filas, luego columnas

     for (let fila=0; fila<matriz.length; fila++){                      //para cada fila
        for (let columna=0; columna<matriz[fila].length;columna++){    //recorro columnas
        
            if (matriz[fila][columna] >maxDia){    // si el elemento recorrido es mayor que el maximo
                maxDia = matriz[fila][columna] ;  //reescribo el maximo
                semana3 = fila + 1;   // identifico semana
                idDDia = columna + 1;   // identifico el dia
            }
        }
    }

//EXTRA. el switch es porque se puede agregar el dia escrito en la terminal.   
switch (idDDia) {
    case 1 :
       idDDia = " lunes"
       break;
    case 2 :
       idDDia = " martes"
       break;
    case 3 :
       idDDia = " miercoles"
       break;
    case 4 :
       idDDia = " jueves"
       break;
    case 5 :
       idDDia = " viernes"
       break;
    case 6 :
       idDDia = " sabado"
       break;
    case 7 :
       idDDia = " domingo"
       break;                 
    default:
}
console.log(`el dia con mas gasto fue el dia ${idDDia} de la semana ${semana3} con: ${maxDia}`);
