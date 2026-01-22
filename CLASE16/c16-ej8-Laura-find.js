/*______________________    EJERCICIO 8 - CLASE 16     ____________________________

● Ejercicio 8: Busca un nombre específi co
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana'].
 Queremos saber si el nombre 'Laura' está presente en la lista y,
  si lo está, deberías devolverlo.

*/

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];


let encuentra = nombres.find(function(nombre) {
  return nombre === `Laura`;
});

let traduce =function(){
  if (encuentra === undefined){
    console.log(`Laura no está!`)
  } else {
    console.log(`aca está Laura!!`)
  }
}

traduce();

