/*______________________    EJERCICIO 2 - CLASE 13     ____________________________

 ● Ejercicio 2: Número mayor (función expresada)
  Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y
   devuelva el número mayor.
*/


let mayor = function (a, b) {
    if (a>b){
      mayor = a;
    }else{
      mayor = b;
    }

    return mayor;

}
console.log(mayor(8, 3));




