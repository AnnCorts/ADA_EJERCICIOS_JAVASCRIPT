/*______________________    EJERCICIO 1 - CLASE 13     ____________________________

 ● Ejercicio 4: Número par o impar
 
 Crea una función declarada llamada esPar
  que reciba un número y devuelva "Es par" si el número es par o
   "Es impar" si el número es impar. Usa una variable local para guardar el resultado.
 */


function esPar (n) {
    if (n%2===0) {
      par = `es par`;
    }else{
      par = `es impar`;
    }

    return par;

}
console.log(esPar(8));
