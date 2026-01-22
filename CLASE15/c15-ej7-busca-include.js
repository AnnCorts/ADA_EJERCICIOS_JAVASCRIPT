/*______________________    EJERCICIO 7 - CLASE 15     ____________________________

●	Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"].
 Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.

*/

let comidas = ["Pizza", "Hamburguesa", "Tacos"]; 

let busca = comidas.includes("Sushi");
    
if (busca===true) {
    console.log(`Sushi se encuentra`);
} else{
    console.log(`Sushi no se encuentra`);
}

